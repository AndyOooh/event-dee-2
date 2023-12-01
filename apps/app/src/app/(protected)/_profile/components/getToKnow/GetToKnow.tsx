'use client';

import { styles } from '__styles/styles';
import { UserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ActionButton } from 'app/(public)/(auth)/signup/components/ActionButton';
import { TextInput } from 'ui';
import { db } from '__firebase/clientApp';
import { doc, updateDoc } from 'firebase/firestore';
import { formArrayGetToKnow } from '../formArrayGetToKnow';

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  invite_link: string;
  province: string;
  gender: string;
  pronouns: string;
};

export const GetToKnow = () => {
  const { currentUser } = useContext(UserContext);

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
    // resolver: yupResolver(step1Schema),
    defaultValues: {
      //   provider: 'email',
    },
  });
  const onSubmit = async (data: any) => {
    try {
      console.log('🚀  file: GetToKnow.tsx:53  data:', data);
      console.log('in SUBMIT');
      console.log('Updating user uid: ', currentUser.uid);

      // TODO: compare data with currentUser and only update the ones that are different
      // If nothing is different, don't update (return and show a message)

      const userDocRef = doc(db, 'users', currentUser.uid);
      const res = await updateDoc(userDocRef, data);
      // console.log('🚀  file: GetToKnow.tsx:55  res:', res);

      return;
    } catch (error) {
      console.log('🚀  file: GetToKnow.tsx:59  error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className='w-full flex flex-col gap-6'>
        {currentUser
          ? formArrayGetToKnow.map((info, index) => (
              <div key={info.title} className='w-1/2 self-center'>
                <TextInput
                  name={info.title}
                  defaultValue={currentUser && currentUser[info.title]}
                  register={register}
                  label={true}
                  maxW='max-w-md'
                />
                {/* <FormError formError={errors?.email?.message} /> */}
              </div>
            ))
          : null}
      </div>

      <>
        <ActionButton text='Update' />
      </>
    </form>
  );
};
