import { useState, useRef, ChangeEvent } from 'react';
import { uploadString, getDownloadURL, ref } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import {
  useUpdateProfile,
  useCreateUserWithEmailAndPassword,
  useAuthState,
} from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { wizardForm } from '__atoms/signupFreelancerAtom';
import { auth, db, getCloudFunction, storage } from '__firebase/clientApp';
import { styles } from '__styles/styles';
import { onSelectImage } from '__utils/helpers';
import { ImageUpload } from '__components/ImageUpload';
import { ActionButton } from '../../../components/ActionButton';

export const Step3 = () => {
  const [selectedFile, setSelectedFile] = useState<string>();
  const selectedFileRef = useRef<HTMLInputElement>(null);
  const [updateProfile, loadingUpdate, errorUpdate] = useUpdateProfile(auth);
  const [authUser, sadasdsadsad2, asdasdsadsad3] = useAuthState(auth);
  const router = useRouter();

  const [createUserWithEmailAndPassword, userEmail, loadingEmail, errorEmail] =
    useCreateUserWithEmailAndPassword(
      auth
      // {sendEmailVerification: true} // implement later
    );
  const [wFormData, setWFormData] = useRecoilState(wizardForm);
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    try {
      const { name, last_name, email, new_password, provider, profession, other_skills } =
        wFormData;

      const newUser =
        provider === 'email'
          ? (await createUserWithEmailAndPassword(email, new_password)).user
          : authUser;

      // if (errorEmail || errorFacebook || errorGoogle) {
      //   const error = errorEmail || errorFacebook || errorGoogle;
      //   console.log('🚀  file: Step3.tsx:63  error:', error);
      //   return;
      // }

      const customClaims = {
        basic_info_done: true,
        type: 'freelancer',
      };

      const userDocUpdates: any = {
        customClaims,
        type: 'freelancer',
        first_name: name,
        last_name: last_name,
        displayName: name,
        profession: profession,
        other_skills: other_skills,
        invite_link: `${name}-${last_name}`.toLowerCase(),
      };

      // https://app.eventdee.com/invite

      const userDocRef = doc(db, 'users', newUser?.uid);

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
        await updateProfile({
          photoURL: downloadURL,
        });
      }

      // const unsubscribe = onSnapshot(userDocRef, async (doc: any) => {
      //   if (doc.exists()) {
      //     await updateDoc(userDocRef, userDocUpdates);
      //     unsubscribe(); // Stop listening for further changes
      //   }
      // });

      const updatedUserDoc = await updateDoc(userDocRef, userDocUpdates);
      console.log('🚀  file: Step3.tsx:119  updatedUserDoc:', updatedUserDoc);

      const setCustomClaims = getCloudFunction('setCustomClaims'); // Our custom function
      const resSetCC = await setCustomClaims({
        uid: authUser?.uid,
        payload: customClaims,
      });

      setWFormData(prev => ({
        ...prev,
        step: 1,
      }));

      /* Shouldnt mkae it here */
      console.log('routing to HOMEEEEEEE');

      router.push('/');
    } catch (error) {
      console.log('🚀  file: Step3.tsx:116  error:', error);
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
