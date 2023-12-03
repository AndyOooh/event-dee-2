'use client';

import { styles } from '__styles/styles';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { useContext } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormError, Select, TextInput } from 'ui';
import { formArrayPersonalInfo } from './formArray';
import { FormValues } from '__atoms/signupBusinessAtom';

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<FormValues>;
};

export const PersonalInfo = ({ register, errors }: Props) => {
  const { currentUser } = useContext(CurrUserContext);

  return (
    <div className={styles.form}>
      <div className='w-full grid grid-cols-2 gap-6'>
        {currentUser
          ? formArrayPersonalInfo.map((info, index) => {
              return info.type === 'text' ? (
                <div key={info.title}>
                  <TextInput
                    name={info.title}
                    defaultValue={currentUser && currentUser[info.title]}
                    register={register}
                    label={true}
                    maxW='max-w-md'
                    prepend={info.prepend}
                  />
                  <FormError formError={errors?.[info.title]?.message} />
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
                  <FormError formError={errors?.[info.title]?.message} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
