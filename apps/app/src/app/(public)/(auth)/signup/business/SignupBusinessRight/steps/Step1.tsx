'use client';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { yupResolver } from '@hookform/resolvers/yup';

import { TextInput, FormError, ActionButton } from 'ui';
import { OAuthButtons } from '__components/modals/auth/OAuthButtons';
import { styles } from '__styles/styles';
import { CheckLegal } from '../../../components/CheckLegal';
import { IStep1Schema, step1Schema } from '../validation';
import { auth, getCloudFunction } from '__firebase/clientApp';
import { SwitchToLogin } from '../../../components/SwitchToLogin';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Image from 'next/image';
import facebookLogo from '/public/images/facebooklogo.png';
import googleLogo from '/public/images/googlelogo.png';
import { Providers } from 'app/types';
import { wizardForm } from '__atoms/signupBusinessAtom';

export const Step1 = () => {
  const [wData, setWFormData] = useRecoilState(wizardForm);
  const [authUser] = useAuthState(auth);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth
    // {sendEmailVerification: true} // implement later
  );

  const {
    register,
    setValue,
    setError,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IStep1Schema>({
    mode: 'onTouched',
    resolver: yupResolver(step1Schema),
    defaultValues: {
      provider: Providers.email,
    },
  });

  const provider = watch('provider');

  const onSubmit = async (data: any) => {
    const checkEmailExists = getCloudFunction('checkEmailExists');
    const emailExists = (await checkEmailExists(data.email)).data;
    if (emailExists) {
      setError('email', { message: 'Email already exists' });
      return;
    }

    const resEmailSignup = await createUserWithEmailAndPassword(data.email, data.new_password);
    console.log('🚀  file: Step1.tsx:56  resEmailSignup:', resEmailSignup);

    console.log('wData:', wData);

    setWFormData(prev => ({
      ...prev,
      ...data,
      step: prev.step + 1,
    }));
    console.log('wData:', wData);
    return;
  };

  return (
    <>
      <p className='px-[10%]'>
        Access the highly curated society of top event workers. Find the talent you need for your
        next event.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={provider === 'email' ? styles.formSmall : styles.form}>
        {provider === 'email' ? (
          <>
            <TextInput name='email' register={register} label={true} />
            <FormError formError={errors?.email?.message} />
            <div className='flex gap-4'>
              <div>
                <TextInput name='new_password' register={register} label={true} />
                <FormError formError={errors?.new_password?.message} />
              </div>
              <div>
                <TextInput name='confirm_password' label={true} register={register} />
                <FormError formError={errors?.confirm_password?.message} />
              </div>
            </div>
            <CheckLegal
              name='check_legal'
              register={register}
              error={errors?.check_legal?.message}
            />
            <FormError formError={errors?.check_legal?.message} />
            <div className='divider'>Or sign up with</div>
            <OAuthButtons isSignUp={true} setSelected={setValue} selected={provider} />
            <ActionButton text='Step 2' />
            <SwitchToLogin />
          </>
        ) : (
          <div className='w-4/5 mx-auto flex flex-col items-center gap-4 bg-cyan-200/30'>
            <p className='self-start font-semibold'>Signing up with</p>
            <div className='relative flex items-center gap-4'>
              <div className='avatar'>
                <div className='w-16'>
                  <Image
                    src={authUser?.photoURL || '/images/profile-photo-placeholder.jpg'}
                    alt={provider}
                    fill={true}
                    sizes='3rem'
                    className='rounded-xl'
                  />
                </div>
              </div>
              <div className='relative h-16 flex items-center gap-3 border border-gray-500 px-4 py-2 rounded-lg'>
                <div className='avatar'>
                  <div className='w-8'>
                    <Image
                      src={provider === 'google' ? googleLogo : facebookLogo}
                      alt='google'
                      fill={true}
                      sizes='3rem'
                    />
                  </div>
                </div>
                <p>{authUser?.email}</p>
              </div>
            </div>
            <CheckLegal
              name='check_legal'
              register={register}
              error={errors?.check_legal?.message}
            />
            <FormError formError={errors?.check_legal?.message} />
            <ActionButton text='Step 2' />
          </div>
        )}
      </form>
    </>
  );
};
