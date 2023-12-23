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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formSmall}>
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
          <OAuthButtons setSelected={setValue} selected={provider} />
          <ActionButton text='Step 2' />
          <SwitchToLogin />
        </>
      ) : (
        <>
          <p className=''>Signing up with</p>
          {/* <p>{formValues.oAuthCreds.user.email} </p> */}
          <p>{authUser?.email}</p>
          <OAuthButtons setSelected={setValue} selected={provider} />
          <CheckLegal name='check_legal' register={register} error={errors?.check_legal?.message} />
          <FormError formError={errors?.check_legal?.message} />
          <ActionButton text='Step 2' />
        </>
      )}
    </form>
  );
};
