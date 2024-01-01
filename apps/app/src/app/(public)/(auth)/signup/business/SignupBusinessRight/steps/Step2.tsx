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

export const Step2 = () => {
  const [, setWFormData] = useRecoilState(wizardForm);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IStep2Schema>({
    mode: 'onTouched',
    resolver: yupResolver(step2Schema),
  });

  // const onSubmit: SubmitHandler<FormStep2> = async data => {
  //   setWFormData(prev => ({
  //     ...prev,
  //     ...data,
  //     step: prev.step + 1,
  //   }));
  // };

    const onSubmit: SubmitHandler<IStep2Schema> = async data => {
    const { first_name, last_name, company_name, company_type } = data;
    const { provider, email, password } = wizardFormData;

    let newUser: any;
    try {
      if (provider === 'google') {
        newUser = (await signInWithGoogle()).user;
      } else if (provider === 'facebook') {
        newUser = (await signInWithFacebook()).user;
      } else {
        newUser = (await createUserWithEmailAndPassword(email, password)).user;
      }
    } catch (error) {
      console.log('Step3.tsx:67  error:', error);
    }

    // if (errorEmail || errorFacebook || errorGoogle) {
    //   const error = errorEmail || errorFacebook || errorGoogle;
    //   return;
    // }

    try {
      const userDocRef = doc(db, 'users', newUser?.uid);
      console.log('🚀  file: SignupMemberRight.tsx:84  userDocRef:', userDocRef);

      await updateProfile({
        displayName: first_name,
      });
      await updateDoc(userDocRef, {
        displayName: name,
        last_name: last_name,
        type: 'business',
      });
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
      {/* <Select name='company_type' register={register} options={copmpanyTypes} label={true} /> */}
      <Select
        name='company_type'
        register={register}
        options={Object.values(CompanyType)}
        // defaultValue='Select Company Type'
        label={true}
      />
      <FormError formError={errors?.company_name?.message} />
      {/* <TextInput name='company_name' register={register} name='position' label={true} />
        <FormError formError={errors?.company_name?.message} /> */}

      <ActionButton text='Get Started' />
    </form>
  );
};
