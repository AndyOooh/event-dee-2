'use client';

import { styles } from '__styles/styles';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { useContext } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { TextInput } from 'ui';
import { formArrayGetToKnow } from '../formArrayGetToKnow';

type Props = {
  register: UseFormRegister<any>;
};

export const GetToKnow = ({ register }: Props) => {
  const { currentUser } = useContext(CurrUserContext);

  return (
    <div className={styles.form}>
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
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
