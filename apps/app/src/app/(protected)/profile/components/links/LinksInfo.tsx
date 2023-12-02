'use client';

import { styles } from '__styles/styles';
import { UserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { useContext } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { TextInput } from 'ui';
import { formArrayLinksInfo } from '../formArrayLinksInfo';

type Props = {
  register: UseFormRegister<any>;
};

export const LinksInfo = ({ register }: Props) => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className={styles.form}>
      <div className='w-full grid grid-cols-2 gap-6'>
        {currentUser
          ? formArrayLinksInfo.map((info, index) => (
              <div key={info.title}>
                <TextInput
                  name={info.name}
                  // defaultValue={currentUser && currentUser[info.title]}
                  defaultValue={currentUser && currentUser.links?.[index]}
                  register={register}
                  label={true}
                  maxW='max-w-md'
                />
                {/* <FormError formError={errors?.email?.message} /> */}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
