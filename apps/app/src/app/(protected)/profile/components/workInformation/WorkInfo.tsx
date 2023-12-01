'use client';

import { styles } from '__styles/styles';
import { UserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { useContext } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Select, TextInput } from 'ui';
import { formArrayWorkInfo } from '../formArrayWorkInfo';

type Props = {
  register: UseFormRegister<any>;
};

export const WorkInfo = ({ register }: Props) => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className={styles.form}>
      <div className='w-full grid grid-cols-2 gap-6'>
        {currentUser
          ? formArrayWorkInfo.map((info, index) => {
              return info.type === 'text' ? (
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
              ) : (
                <div key={info.title}>
                  <Select
                    name={info.title}
                    defaultValue={currentUser && currentUser[info.title]}
                    options={info.options}
                    register={register}
                    label={true}
                    className=''
                    maxW='max-w-md'
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
