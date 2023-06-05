import { useState, useRef, ChangeEvent } from 'react';
import { uploadString, getDownloadURL, ref } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import {
  useUpdateProfile,
  useSignInWithGoogle,
  useSignInWithFacebook,
  useCreateUserWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { useRecoilValue } from 'recoil';
import { useForm } from 'react-hook-form';

import { wizardForm } from '__atoms/signupFreelancerAtom';
import { auth, db, storage } from '__firebase/clientApp';
import { styles } from '__styles/styles';
import { onSelectImage } from '__utils/helpers';
import { ImageUpload } from '../ImageUpload';
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
  const wizardFormData = useRecoilValue(wizardForm);
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    console.log('🚀  file: Step3.tsx:54  wFormData:', wizardFormData);
    const { name, last_name, email, new_password, provider, profession, other_skills } = wizardFormData;
    console.log('🚀  file: Step3.tsx:37  provider:', provider)

    let newUser: any;
    try {
      if (provider === 'google') {
        // newUser = (await signInWithGoogle()).user;
        const newU = (await signInWithGoogle());
        console.log('🚀  file: Step3.tsx:43  NewU:', newU)
        newUser = newU.user;
      } else if (provider === 'facebook') {
        newUser = (await signInWithFacebook()).user;
      } else {
        // newUser = (await createUserWithEmailAndPassword(email, new_password)).user;
        newUser = (await createUserWithEmailAndPassword(email, new_password)).user;
      }
    } catch (error) {
      console.log('🚀  file: Step3.tsx:67  error:', error);
    }
    console.log('🚀  file: Step3.tsx:92  newUser **********************:', newUser);

    if (errorEmail || errorFacebook || errorGoogle) {
      const error = errorEmail || errorFacebook || errorGoogle;
      console.log('🚀  file: Step3.tsx:73  error:', error);
      return;
    }

    // some things needs to be pulled out of this if. Actually we should have an object of props to update and add to it inside if.
    if (selectedFile) {
      try {
        const userDocRef = doc(db, 'users', newUser?.uid);
        console.log('🚀  file: SignupMemberRight.tsx:67  userDocRef *********:', userDocRef);
        console.log('Before ref**************')
        const imageRef = ref(storage, `users/${userDocRef.id}/images/profile`);
        console.log('After ref**************')
        await uploadString(imageRef, selectedFile, 'data_url');
        const downloadURL = await getDownloadURL(imageRef);
        
        // seems redundant to update both auth and firabse user.
        await updateProfile({
          photoURL: downloadURL,
          displayName: name,
        });
        console.log('🚀  file: SignupMemberRight.tsx:77  userDocRef *********:', userDocRef);
        await updateDoc(userDocRef, {
          photoURL: downloadURL,
          displayName: name,
          last_name: last_name,
          profession: profession,
          other_skills: other_skills,
          type: 'freelancer',
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
