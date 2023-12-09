import { useState, useRef, ChangeEvent } from 'react';
import { uploadString, getDownloadURL, ref } from 'firebase/storage';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import {
  useUpdateProfile,
  useSignInWithGoogle,
  useSignInWithFacebook,
  useCreateUserWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useForm } from 'react-hook-form';

import { wizardForm } from '__atoms/signupFreelancerAtom';
import { auth, db, storage } from '__firebase/clientApp';
import { styles } from '__styles/styles';
import { onSelectImage } from '__utils/helpers';
import { ImageUpload } from '__components/ImageUpload';
import { ActionButton } from '../../../components/ActionButton';

export const Step3 = () => {
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
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    const { name, last_name, email, new_password, provider, profession, other_skills } = wFormData;
    console.log('🚀  file: Step3.tsx:36  new_password:', new_password)
    console.log('🚀  file: Step3.tsx:36  email:', email)

    let newUser: any;
    try {
      if (provider === 'google') {
        const newU = await signInWithGoogle();
        newUser = newU.user;
      } else if (provider === 'facebook') {
        newUser = (await signInWithFacebook()).user;
      } else {
        newUser = (await createUserWithEmailAndPassword(email, new_password)).user;
      }
    } catch (error) {
      console.log('🚀  file: Step3.tsx:67  error:', error);
    }

    if (errorEmail || errorFacebook || errorGoogle) {
      const error = errorEmail || errorFacebook || errorGoogle;
      return;
    }

    // some things needs to be pulled out of this if. Actually we should have an object of props to update and add to it inside if.
    if (selectedFile) {
      try {
        const userDocRef = doc(db, 'users', newUser?.uid);
        const imageRef = ref(storage, `users/${userDocRef.id}/images/profile`);
        await uploadString(imageRef, selectedFile, 'data_url');
        const downloadURL = await getDownloadURL(imageRef);

        // seems redundant to update both auth and firabse user.
        await updateProfile({
          photoURL: downloadURL,
          displayName: name,
        });
        const fullName = `${name} ${last_name}`;
        console.log('🚀  file: Step3.tsx:76  fullName:', fullName);
        const unsubscribe = onSnapshot(userDocRef, async (doc: any) => {
          if (doc.exists()) {
            // User document exists, proceed with the update
            // Your update logic here
            await updateDoc(userDocRef, {
              type: 'freelancer',
              first_name: name,
              last_name: last_name,
              full_name: fullName,
              displayName: name,
              photoURL: downloadURL,
              profession: profession,
              other_skills: other_skills,
              invite_link: `https://app.eventdee.com/invite/${name}-${last_name}`,
            });
            unsubscribe(); // Stop listening for further changes
          }
        });
        console.log('666666666666666666666');
        setWFormData(prev => ({
          ...prev,
          step: 1,
        }));
      } catch (error) {
        console.log('🚀  file: Step3.tsx:98  error:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formSmall}>
      <div className='flex flex-col items-center gap-2 w-full'>
        <ImageUpload
          selectedFile={selectedFile}
          // setSelectedFile={setSelectedFile}
          selectedFileRef={selectedFileRef}
          onSelectImage={(e: ChangeEvent<HTMLInputElement>) => onSelectImage(e, setSelectedFile)}
        />
      </div>
      {/* <FormError formError={formError} authError={authError} /> */}
      <ActionButton loading={loadingEmail} text='Sign up' />
    </form>
  );
};
