'use client';

import React, { useState } from 'react';
import { ActionButton } from '../../../components/ActionButton';
import { FormError, TextInput } from 'ui';

import OAuthButtons from '../../../../../../../components/modals/auth/OAuthButtons';
import { CheckLegal } from '../../../components/CheckLegal';
import { styles } from '../../../../../../../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { step1Schema, step1SchemaEmail } from '../validation';
import { useRecoilState } from 'recoil';
import { FormStep1, wizardForm } from '../../../../../../../atoms/signupFreelancerAtom';

type Props = {
  // onSelectProvider: (provider: 'google' | 'facebook' | 'email') => void;
  // selectedProvider: 'google' | 'facebook' | 'email';
};

// type FormData = {
//   provider: 'google' | 'facebook' | 'email';
//   email: string;
//   password: string;
//   confirm_password: string;
//   check_legal: boolean;
// };
type FormData = FormStep1 & {
  confirm_password?: string;
  check_legal: boolean;
};

export const Step1 = ({}: Props) => {
  const [wFormData, setWFormData] = useRecoilState(wizardForm);
  console.log('🚀  file: Step1.tsx:35  wFormData:', wFormData);
  const {
    register,
    setValue,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onTouched',
    resolver: yupResolver(step1Schema),
    defaultValues: {
      provider: 'email',
    },
  });

  console.log('🚀  file: Step1.tsx:43  errors:', errors);
  const provider = watch('provider');

  const onSubmit = (data: any) => {
    console.log('in SUBMIT');
    if (provider !== 'email') {
      setWFormData(prev => ({
        ...prev,
        ...data,
        step: prev.step + 1,
      }));
      return;
    }
    setWFormData(prev => ({
      ...prev,
      ...data,
      step: prev.step + 1,
    }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {provider === 'email' ? (
        <>
          <TextInput register={register} type='email' />
          <FormError formError={errors?.email?.message} />
          <TextInput type='password' autoComplete='new-password' register={register} />
          <FormError formError={errors?.password?.message} />
          <TextInput
            name='confirm_password'
            type='password'
            autoComplete='new-password'
            register={register}
          />
          <FormError formError={errors?.confirm_password?.message} />
          <CheckLegal name='check_legal' register={register} error={errors?.check_legal?.message} />
          <FormError formError={errors?.check_legal?.message} />
          <div className='divider'>Or sign up with</div>
          <OAuthButtons setSelected={setValue} selected={provider} />
          <ActionButton text='Step 2' />
          <div className='flex gap-2 w-fit mx-auto'>
            Have an account?
            <button className='font-bold' onClick={() => console.log('login')}>
              Log In
            </button>
          </div>
        </>
      ) : (
        <>
          <p className=''>Signing up with</p>
          <OAuthButtons setSelected={setValue} selected={provider} />
          <CheckLegal name='check_legal' register={register} error={errors?.check_legal?.message} />
          <FormError formError={errors?.check_legal?.message} />
          <ActionButton text='Step 2' />
        </>
      )}
    </form>
  );
};
