'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { TextInput, FormError, Select } from 'ui';
import { wizardForm, FormStep2 } from '__atoms/signupBusinessAtom';
import { styles } from '__styles/styles';
import { ActionButton } from '../../../components/ActionButton';
import { step2Schema } from '../validation';
import { CompanyType, IStep2Schema } from '../../../freelancer/signup-member-right/validation';
import { auth, db, getCloudFunction } from '__firebase/clientApp';
import { doc, updateDoc } from 'firebase/firestore';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { DEFAULT_PROFILE_PHOTO_URL } from '__utils/global-consts';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const Step2 = () => {
  const [wFormData, setWFormData] = useRecoilState(wizardForm);
  const [authUser] = useAuthState(auth);
  const [updateProfile, loadingUpdate, errorUpdate] = useUpdateProfile(auth);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IStep2Schema>({
    mode: 'onTouched',
    resolver: yupResolver(step2Schema),
  });

  const onSubmit: SubmitHandler<IStep2Schema> = async data => {
    try {
      setLoading(true);
      const { first_name, last_name, company_name, company_type } = data;
      const { provider, email, password } = wFormData;

      const customClaims = {
        basic_info_done: true,
        type: 'business',
      };

      const photoURL = authUser?.photoURL || DEFAULT_PROFILE_PHOTO_URL;

      const userDocUpdates: any = {
        customClaims,
        type: 'business',
        first_name,
        last_name,
        displayName: first_name,
        company_name,
        invite_link: `${company_name}`.toLowerCase(),
        company_type,
        photoURL,
      };

      const userDocRef = doc(db, 'users', authUser?.uid);
      const updatedUserDoc = await updateDoc(userDocRef, userDocUpdates);

      const setCustomClaims = getCloudFunction('setCustomClaims'); // Our custom function
      const resSetCC = await setCustomClaims({
        uid: authUser?.uid,
        payload: customClaims,
      });

      setWFormData(prev => ({
        ...prev,
        step: 1,
      }));

      router.push('/');
      setLoading(false);
    } catch (error) {
      console.log('🚀  file: Step2.tsx:90  error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.formSmall} max-w-md`}>
      <div className='flex gap-4'>
        <div>
          <TextInput
            name='first_name'
            tooltip='Real name looks more professional and could result in more job opportunitues.'
            register={register}
            label={true}
          />
          <FormError formError={errors?.first_name?.message} />
        </div>
        <div>
          <TextInput
            register={register}
            name='last_name'
            tooltip='This is only for official use and will not be public.'
            label={true}
          />
          <FormError formError={errors?.last_name?.message} />
        </div>
      </div>
      <TextInput name='company_name' register={register} label={true} />
      <FormError formError={errors?.company_name?.message} />
      <Select
        name='company_type'
        register={register}
        options={Object.values(CompanyType)}
        label={true}
      />
      <FormError formError={errors?.company_name?.message} />
      <ActionButton text='Get Started' />
    </form>
  );
};
