import { useState, useRef, ChangeEvent } from 'react';
import { uploadString, getDownloadURL, ref } from 'firebase/storage';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import {
  useUpdateProfile,
  useSignInWithGoogle,
  useSignInWithFacebook,
  useCreateUserWithEmailAndPassword,
  useSignOut,
  useAuthState,
} from 'react-firebase-hooks/auth';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { wizardForm } from '__atoms/signupFreelancerAtom';
import { auth, db, storage } from '__firebase/clientApp';
import { styles } from '__styles/styles';
import { onSelectImage } from '__utils/helpers';
import { ImageUpload } from '__components/ImageUpload';
import { ActionButton } from '../../../components/ActionButton';
import { AuthCredential, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
// import { getAuth, updateProfile } from 'firebase/auth';

export const Step3 = () => {
  const [selectedFile, setSelectedFile] = useState<string>();
  const selectedFileRef = useRef<HTMLInputElement>(null);
  const [updateProfile, loadingUpdate, errorUpdate] = useUpdateProfile(auth);
  const [authUser, sadasdsadsad2, asdasdsadsad3] = useAuthState(auth);
  console.log('🚀  file: Step3.tsx:29  authUser:', authUser);
  const router = useRouter();

  // console.log('🚀  file: Step3.tsx:24  errorUpdate:', errorUpdate);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook, userFb, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
  const [createUserWithEmailAndPassword, userEmail, loadingEmail, errorEmail] =
    useCreateUserWithEmailAndPassword(
      auth
      // {sendEmailVerification: true} // implement later
    );
  const [wFormData, setWFormData] = useRecoilState(wizardForm);
  const { handleSubmit } = useForm();
  const [signOut, loading_signout, error_signout] = useSignOut(auth);

  const onSubmit = async () => {
    try {
      const { name, last_name, email, new_password, provider, profession, other_skills } =
        wFormData;

      // console.log('🚀  file: Step3.tsx:29  authUser:', authUser);
      // const res1 = await updateProfile({
      //   displayName: 'BATMAN___________YAYYYYYYY',
      // });
      // console.log('🚀  file: Step3.tsx:50  res1:', res1);
      // console.log('🚀  file: Step3.tsx:29  authUser:', authUser);

      let newUser: any;
      try {
        if (provider === 'google') {
          // const newU = await signInWithGoogle();
          // newUser = newU.user;
          // newUser = wFormData.oAuthCreds.user;
          newUser = authUser;
        } else if (provider === 'facebook') {
          // newUser = (await signInWithFacebook()).user;
          // newUser = wFormData.oAuthCreds.user;
          newUser = authUser;
        } else {
          const result = await createUserWithEmailAndPassword(email, new_password);
          newUser = result.user;
        }
      } catch (error) {
        console.log('🚀  file: Step3.tsx:56  error:', error);
      }

      if (errorEmail || errorFacebook || errorGoogle) {
        const error = errorEmail || errorFacebook || errorGoogle;
        console.log('🚀  file: Step3.tsx:63  error:', error);
        return;
      }

      const userDocUpdates: any = {
        basic_info_done: true,
        type: 'freelancer',
        first_name: name,
        last_name: last_name,
        displayName: name,
        profession: profession,
        other_skills: other_skills,
        invite_link: `https://app.eventdee.com/invite/${name}-${last_name}`,
      };

      console.log('newUser.uid', newUser?.uid);
      const userDocRef = doc(db, 'users', newUser?.uid);
      console.log('🚀  file: Step3.tsx:90  userDocRef:', userDocRef);

      let downloadURL = '';
      if (selectedFile) {
        try {
          const imageRef = ref(storage, `users/${userDocRef.id}/images/profile`);
          await uploadString(imageRef, selectedFile, 'data_url');
          downloadURL = await getDownloadURL(imageRef);
          console.log('Image uploaded successfully: ', downloadURL);
        } catch (error) {
          throw error;
        }
      }

      if (downloadURL) {
        userDocUpdates.photoURL = downloadURL;
      }

      // const unsubscribe = onSnapshot(userDocRef, async (doc: any) => {
      //   if (doc.exists()) {
      //     await updateDoc(userDocRef, userDocUpdates);
      //     unsubscribe(); // Stop listening for further changes
      //   }
      // });

      const updatedUserDoc = await updateDoc(userDocRef, userDocUpdates);
      console.log('🚀  file: Step3.tsx:119  updatedUserDoc:', updatedUserDoc)

      // console.log('🤣🤣🤣 auth.currentUser before:', auth.currentUser);

      // const res = await updateProfile({
      //   displayName: 'BATMAN___________YAYYYYYYY',
      // });

      // console.log('🤣🤣🤣 auth.currentUser after:', auth.currentUser);

      setWFormData(prev => ({
        ...prev,
        step: 1,
      }));

      router.push('/');

      
    } catch (error) {
      console.log('🚀  file: Step3.tsx:116  error:', error);
    }
  };

  // const onSubmit = async () => {
  //   return 'sdsadsa';
  // };

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
