import React, { ChangeEvent, useRef, useState } from 'react';

import { ActionButton } from '../../../components/ActionButton';
import { ImageUpload } from '../ImageUpload';
import { doc, updateDoc } from 'firebase/firestore';
import { uploadString, getDownloadURL } from 'firebase/storage';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { auth, db, storage } from '../../../../../../../firebase/clientApp';
import { onSelectImage } from '../../../../../../../utils/helpers';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { wizardForm } from '../../../../../../../atoms/signupFreelancerAtom';
import { styles } from '../../../../../../../styles/styles';

import { ref as storageRef } from 'firebase/storage';

type Props = {};

// type FormData = {
//   photo: string;
// };

export const Step3 = ({}: Props) => {
  // copy/paste from SMR
  const [selectedFile, setSelectedFile] = useState<string>();
  const selectedFileRef = useRef<HTMLInputElement>(null);
  const [updateProfile, loadingUpdate, errorUpdate] = useUpdateProfile(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook, userFb, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
  const [createUserWithEmailAndPassword, userEmail, loadingEmail, errorEmail] =
    useCreateUserWithEmailAndPassword(
      auth
      // {sendEmailVerification: true} // implement later
    );
  const [wFormData, setWFormData] = useRecoilState(wizardForm);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // mode: 'onTouched',
    // resolver: yupResolver(step2Schema),
  });

  // copy/paste from SMR
  const onSubmit = async () => {
    console.log('🚀  file: Step3.tsx:54  wFormData:', wFormData);
    const { name, last_name, email, password, provider, profession, other_skills } = wFormData;
    // const { photo } = data;

    let newUser: any;
    try {
      if (provider === 'google') {
        newUser = (await signInWithGoogle()).user;
      } else if (provider === 'facebook') {
        newUser = (await signInWithFacebook()).user;
      } else {
        newUser = (await createUserWithEmailAndPassword(email, password)).user;
      }
    } catch (error) {
      console.log('🚀  file: Step3.tsx:67  error:', error);
    }
    console.log('🚀  file: Step3.tsx:92  newUser:', newUser);

    // Valid form inputs
    if (errorEmail) {
      console.log('🚀  file: SignupMemberRight.tsx:48  authError:', errorEmail);
      return;
    }

    if (selectedFile) {
      try {
        const userDocRef = doc(db, 'users', newUser?.uid);
        console.log('🚀  file: SignupMemberRight.tsx:84  userDocRef:', userDocRef);
        const imageRef = storageRef(storage, `users/${userDocRef.id}/images/profile`);
        await uploadString(imageRef, selectedFile, 'data_url');
        const downloadURL = await getDownloadURL(imageRef);
        // seems redundant to update bith auth and firabse user.
        await updateProfile({
          photoURL: downloadURL,
          displayName: name,
        });
        await updateDoc(userDocRef, {
          photoURL: downloadURL,
          displayName: name,
          last_name: last_name,
          profession: profession,
          other_skills: other_skills,
        });
        console.log('HERE IS DOWNLOAD URL', downloadURL);
      } catch (error) {
        console.log('🚀  file: Step3.tsx:98  error:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className='flex flex-col items-center gap-2 w-full'>
        <ImageUpload
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          selectedFileRef={selectedFileRef}
          onSelectImage={(e: ChangeEvent<HTMLInputElement>) => onSelectImage(e, setSelectedFile)}
        />
      </div>
      {/* <FormError formError={formError} authError={authError} /> */}
      <ActionButton loading={loadingEmail} text='Sign up' />
    </form>
  );
};
