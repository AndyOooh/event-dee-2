'use client';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { yupResolver } from '@hookform/resolvers/yup';

import { TextInput, FormError } from 'ui';
import { FormStep1, wizardForm } from '__atoms/signupFreelancerAtom';
import { OAuthButtons } from '__components/modals/auth/OAuthButtons';
import { styles } from '__styles/styles';
import { ActionButton } from '../../../components/ActionButton';
import { CheckLegal } from '../../../components/CheckLegal';
import { IStep1Schema, step1Schema } from '../validation';
import { auth, getCloudFunction } from '__firebase/clientApp';
import { SwitchToLogin } from '../../../components/SwitchToLogin';
import { useAuthState } from 'react-firebase-hooks/auth';
import Image from 'next/image';
import facebookLogo from '/public/images/facebooklogo.png';
import googleLogo from '/public/images/googlelogo.png';

export const Step1 = () => {
  const [wFormData, setWFormData] = useRecoilState(wizardForm);
  const [authUser, sadasdsadsad2, asdasdsadsad3] = useAuthState(auth);
  console.log('🚀  file: Step2.tsx:21  authUser:', authUser);

  const {
    register,
    setValue,
    setError,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IStep1Schema>({
    mode: 'onTouched',
    resolver: yupResolver(step1Schema),
    defaultValues: {
      provider: 'email',
    },
  });

  const provider = watch('provider');

  const formValues = watch();
  console.log('🚀  file: Step1.tsx:44  formValues2:', formValues);

  const onSubmit = async (data: any) => {
    // console.log('in SUBMIT');
    const email = watch('email');
    const checkEmailExists = getCloudFunction('checkEmailExists'); // Our custom function
    const emailExists = (await checkEmailExists(email)).data;
    console.log('🚀  file: Step1.tsx:52  emailExists:', emailExists);
    if (emailExists) {
      setError('email', { message: 'Email already exists' });
      return;
    }

    setWFormData(prev => ({
      ...prev,
      ...data,
      step: prev.step + 1,
    }));
    return;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={provider === 'email' ? styles.formSmall : styles.form}>
      {provider === 'email' ? (
        <>
          <TextInput name='email' register={register} label={true} />
          <FormError formError={errors?.email?.message} />
          {/* <div className='flex gap-4'> */}
          <TextInput name='new_password' register={register} label={true} />
          <FormError formError={errors?.new_password?.message} />
          <TextInput name='confirm_password' label={true} register={register} />
          <FormError formError={errors?.confirm_password?.message} />
          {/* </div> */}
          <CheckLegal name='check_legal' register={register} error={errors?.check_legal?.message} />
          <FormError formError={errors?.check_legal?.message} />
          <div className='divider'>Or sign up with</div>
          <OAuthButtons isSignUp={true} setSelected={setValue} selected={provider} />
          <ActionButton text='Step 2' />
          <SwitchToLogin />
        </>
      ) : (
        <>
          <div className='w-4/5 mx-auto flex flex-col items-center gap-4 bg-cyan-200/30'>
            <p className='self-start font-semibold'>Signing up with</p>
            <div className='relative flex items-center gap-4'>
              <div className='avatar'>
                <div className='w-16'>
                  {/* <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' /> */}
                  <Image
                    src={authUser?.photoURL}
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
            {/* <p>{formValues.oAuthCreds.user.email} </p> */}
            {/* <OAuthButtons setSelected={setValue} selected={provider} /> */}
            <CheckLegal
              name='check_legal'
              register={register}
              error={errors?.check_legal?.message}
            />
            <FormError formError={errors?.check_legal?.message} />
            <ActionButton text='Step 2' />
          </div>
        </>
      )}
    </form>
  );
};
