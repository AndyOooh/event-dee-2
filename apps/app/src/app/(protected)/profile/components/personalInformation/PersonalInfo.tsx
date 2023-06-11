'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { styles } from '__styles/styles';
import { UserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { step1Schema } from './validation';
import { ActionButton } from 'app/(public)/(auth)/signup/components/ActionButton';
import { FormError, TextInput } from 'ui';
import { formArray } from '../formArray';

type Props = {};

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  invite_link: string;
  province: string;
  gender: string;
  pronouns: string;
};

export const PersonalInfo = (props: Props) => {
  const { currentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({});

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
      //   provider: 'email',
    },
  });
  const onSubmit = async (data: any) => {
    // console.log('in SUBMIT');
    // const email = watch('email');
    // const checkEmailExists = getCloudFunction('checkEmailExists'); // Our custom function
    // const emailExists = (await checkEmailExists(email)).data;
    // console.log('🚀  file: Step1.tsx:52  emailExists:', emailExists);
    // if (emailExists) {
    //   setError('email', { message: 'Email already exists' });
    //   return;
    // }

    setFormData(prev => ({
      ...prev,
      ...data,
    }));
    <s></s>;
    return;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className='w-full grid grid-cols-2 gap-6'>
        {formArray.map((info, index) => (
          <>
            <TextInput
              key={index}
              name={info.title}
              defaultValue={currentUser && currentUser[info.title]}
              register={register}
              label={true}
              maxW='max-w-md'
            />
            {/* <FormError formError={errors?.email?.message} /> */}
          </>
        ))}
      </div>
      <>
        <ActionButton text='Update' />
      </>
    </form>
  );
};
