'use client';

import React from 'react';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormError, TextInput } from 'ui';
import { FormStep1, wizardForm } from '__atoms/signupBusinessAtom';
import { OAuthButtons } from '__components/modals/auth/OAuthButtons';
import { styles } from '__styles/styles';
// import { step1Schema } from '../validation';
import { ActionButton } from '../../../components/ActionButton';
import { CheckLegal } from '../../../components/CheckLegal';
import { step1Schema } from '../../../freelancer/SignupMemberRight/validation';

type FormData = FormStep1 & {
  email?: string;
  password?: string;
  confirm_password?: string;
  check_legal: boolean;
};

export const Step1 = () => {
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
  const provider = watch('provider');

  const onSubmit = (data: any) => {
    console.log('in SUBMIT');
    setWFormData(prev => ({
      ...prev,
      ...data,
      step: prev.step + 1,
    }));
  };

  return (
    <>
      <p className='px-[10%]'>
        Access the highly curated society of top event workers. Find the talent you need for your
        next event.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {provider === 'email' ? (
          <>
            <TextInput name='email' register={register} label={true} />
            <FormError formError={errors?.email?.message} />
            <div className='flex gap-4'>
              <TextInput name='password' register={register} label={true} />
              <FormError formError={errors?.password?.message} />
              <TextInput name='confirm_password' label={true} register={register} />
              <FormError formError={errors?.confirm_password?.message} />
            </div>
            <CheckLegal
              name='check_legal'
              register={register}
              error={errors?.check_legal?.message}
            />
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
            <CheckLegal
              name='check_legal'
              register={register}
              error={errors?.check_legal?.message}
            />
            <FormError formError={errors?.check_legal?.message} />
            <ActionButton text='Step 2' />
          </>
        )}
      </form>
    </>
  );
};
