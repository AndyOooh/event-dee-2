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
import { step1Schema } from '../validation';
import { getCloudFunction } from '__firebase/clientApp';
import { SwitchToLogin } from '../../../components/SwitchToLogin';

type FormData = FormStep1 & {
  confirm_password?: string;
  check_legal: boolean;
};

export const Step1 = () => {
  const [wFormData, setWFormData] = useRecoilState(wizardForm);
  console.log('🚀  file: Step1.tsx:35  wFormData:', wFormData);
  const {
    register,
    setValue,
    setError,
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
          <OAuthButtons setSelected={setValue} selected={provider} />
          <CheckLegal name='check_legal' register={register} error={errors?.check_legal?.message} />
          <FormError formError={errors?.check_legal?.message} />
          <ActionButton text='Step 2' />
        </>
      )}
    </form>
  );
};
