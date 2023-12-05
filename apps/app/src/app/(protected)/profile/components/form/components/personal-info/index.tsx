'use client';

import { styles } from '__styles/styles';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { useContext, useEffect } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { DatePicker, FormError, Select, TextInput } from 'ui';
import { formArrayPersonalInfo } from './form-data';
import { FormValues } from '__atoms/signupBusinessAtom';
import { format } from 'date-fns';
import { fbTimestampToDateInput } from '__firebase/utilities';

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<FormValues>;
};

export const PersonalInfo = ({ register, errors }: Props) => {
  const { currentUser } = useContext(CurrUserContext);

  // useEffect(() => {
  //   console.log('currentUser DOB', currentUser.dob);
  //   console.log('currentUser DOB DATE', new Date(currentUser.dob.seconds));
  //   const thisIsIt = format(new Date(currentUser.dob.seconds * 1000), 'yyyy-MM-dd');
  //   console.log('🚀  file: index.tsx:24  thisIsIt:', thisIsIt)
  // }, [currentUser]);

  return (
    <div className={styles.form}>
      <div className='w-full grid grid-cols-2 gap-6'>
        {currentUser
          ? formArrayPersonalInfo.map((info, index) => {
              // if (info.type === 'date') {
              //   console.log('🚀  file: index.tsx:26  dob:', currentUser[info.title]);
              //   const dob = currentUser && new Date(currentUser[info.title].seconds * 1000);
              //   console.log('🚀  file: index.tsx:27  dob:', dob);
              // }
              return info.type === 'select' ? (
                <div key={info.title}>
                  <Select
                    name={info.title}
                    defaultValue={currentUser && currentUser[info.title]}
                    options={info.options}
                    register={register}
                    label={true}
                    // className=''
                    maxW='max-w-md'
                  />
                  <FormError formError={errors?.[info.title]?.message} />
                </div>
              ) : info.type === 'date' ? (
                <div key={info.title}>
                  <DatePicker
                    name={info.title}
                    defaultValue={
                      currentUser && fbTimestampToDateInput(currentUser[info.title].seconds)
                    }
                    register={register}
                    label={true}
                    maxW='max-w-md'
                    extraProps={info.extraProps}
                  />
                  <FormError formError={errors?.[info.title]?.message} />
                </div>
              ) : (
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
              );
            })
          : null}
      </div>
    </div>
  );
};
