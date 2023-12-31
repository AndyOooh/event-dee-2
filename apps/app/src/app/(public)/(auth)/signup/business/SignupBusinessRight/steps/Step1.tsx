'use client';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { yupResolver } from '@hookform/resolvers/yup';

import { TextInput, FormError } from 'ui';
import { wizardForm } from '__atoms/signupFreelancerAtom';
import { OAuthButtons } from '__components/modals/auth/OAuthButtons';
import { styles } from '__styles/styles';
import { ActionButton } from '../../../components/ActionButton';
import { CheckLegal } from '../../../components/CheckLegal';

// import { IStep1Schema, step1Schema } from '../../../freelancer/signup-member-right/validation';
import { IStep1Schema, step1Schema } from '../validation';

import { auth, getCloudFunction } from '__firebase/clientApp';
import { SwitchToLogin } from '../../../components/SwitchToLogin';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Image from 'next/image';
import facebookLogo from '/public/images/facebooklogo.png';
import googleLogo from '/public/images/googlelogo.png';

export const Step1 = () => {
  const [, setWFormData] = useRecoilState(wizardForm);
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
      provider: 'email',
    },
  });

  const provider = watch('provider');

  const formValues = watch();

  const onSubmit = async (data: any) => {
    const email = watch('email');
    const checkEmailExists = getCloudFunction('checkEmailExists'); // Our custom function
    const emailExists = (await checkEmailExists(email)).data;
    if (emailExists) {
      setError('email', { message: 'Email already exists' });
      return;
    }

    await createUserWithEmailAndPassword(data.email, data.new_password);

    setWFormData(prev => ({
      ...prev,
      ...data,
      step: prev.step + 1,
    }));
    return;
  };

  return (
    <>
      <p className='px-[10%]'>
        Access the highly curated society of top event workers. Find the talent you need for your
        next event.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formSmall}>
        {provider === 'email' ? (
          <>
            <TextInput name='email' register={register} label={true} />
            <FormError formError={errors?.email?.message} />
            <div className='flex gap-4'>
              <TextInput name='password' register={register} label={true} />
              <FormError formError={errors?.new_password?.message} />
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
