import { useState, useRef, ChangeEvent } from 'react';
import { uploadString, getDownloadURL, ref } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { useUpdateProfile, useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { wizardForm } from '__atoms/signupFreelancerAtom';
import { auth, db, getCloudFunction, storage } from '__firebase/clientApp';
import { styles } from '__styles/styles';
import { onSelectImage } from '__utils/helpers';
import { ImageUpload } from '__components/ImageUpload';
import { LoaderSpinner } from '__components/ui/LoaderSpinner';
import { DEFAULT_PROFILE_PHOTO_URL } from '__utils/global-consts';
import { ActionButton } from 'ui';
import { SetCustomClaimsParams } from 'event-dee-types';

export const Step3 = () => {
  const [authUser] = useAuthState(auth);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [updateProfile, loadingUpdate, errorUpdate] = useUpdateProfile(auth);
  const [wFormData, setWFormData] = useRecoilState(wizardForm);
  const [selectedFile, setSelectedFile] = useState<string>();
  const selectedFileRef = useRef<HTMLInputElement>(null);
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    try {
      setLoading(true);
      const { name, last_name, profession, other_skills } = wFormData;

      const customClaims = {
        basic_info_done: true,
        type: 'freelancer',
      };

      const userDocUpdates: any = {
        customClaims,
        type: 'freelancer',
        first_name: name,
        last_name,
        displayName: name,
        profession: profession,
        other_skills,
        invite_link: `${name}-${last_name}`.toLowerCase(),
        photoURL: DEFAULT_PROFILE_PHOTO_URL,
      };

      const userDocRef = doc(db, 'users', authUser?.uid);

      let downloadURL = '';
      if (selectedFile) {
        try {
          const imageRef = ref(storage, `users/${userDocRef.id}/images/profile`);
          await uploadString(imageRef, selectedFile, 'data_url');
          downloadURL = await getDownloadURL(imageRef);
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

      await updateDoc(userDocRef, userDocUpdates);

      const setCustomClaims = getCloudFunction<SetCustomClaimsParams, { message: string }>(
        'setCustomClaims'
      );
      await setCustomClaims({
        data: {
          uid: authUser?.uid,
          payload: customClaims,
        },
      });

      setWFormData(prev => ({
        ...prev,
        step: 1,
      }));

      router.push('/');
      setLoading(false);
    } catch (error) {
      console.error('🚀  file: Step3.tsx:116  error:', error);
    }
  };

  return loadingUpdate || loading ? (
    <LoaderSpinner />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formSmall}>
      <div className='flex flex-col items-center gap-2 w-full'>
        <ImageUpload
          selectedFile={selectedFile}
          selectedFileRef={selectedFileRef}
          onSelectImage={(e: ChangeEvent<HTMLInputElement>) => onSelectImage(e, setSelectedFile)}
        />
      </div>
      <ActionButton loading={loading} text='Sign up' />
    </form>
  );
};
