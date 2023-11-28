'use client';

import { styles } from '__styles/styles';
import { UserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { use, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ActionButton } from 'app/(public)/(auth)/signup/components/ActionButton';
import { ReactSelect, SearchableSelect, SearchableSelect2, Select, TextInput } from 'ui';
import { db } from '__firebase/clientApp';
import { doc, updateDoc } from 'firebase/firestore';
import { formArrayLinksInfo } from '../formArrayLinksInfo';

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  invite_link: string;
  province: string;
  gender: string;
  pronouns: string;
};

export const LinksInfo = () => {
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
      console.log('🚀  file: LinksInfo.tsx:43  data:', data);

      // TODO: compare data with currentUser and only update the ones that are different
      // If nothing is different, don't update (return and show a message)
      const dataToUpdate = { links: Object.values(data).filter(Boolean) };

      const userDocRef = doc(db, 'users', currentUser.uid);
      const res = await updateDoc(userDocRef, dataToUpdate);
      // console.log('🚀  file: LinksInfo.tsx:55  res:', res);

      return;
    } catch (error) {
      console.log('🚀  file: LinksInfo.tsx:59  error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className='w-full grid grid-cols-2 gap-6'>
        {currentUser
          ? formArrayLinksInfo.map((info, index) => (
              <div key={info.title}>
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
