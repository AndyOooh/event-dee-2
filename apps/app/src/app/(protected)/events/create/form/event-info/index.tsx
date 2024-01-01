'use client';

import { styles } from '__styles/styles';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { useContext } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { DatePicker, FormError, Select, TextInput } from 'ui';
import { formArrayPersonalInfo } from './form-data';
import { formatDate } from '__firebase/utilities';
import { IcreateEventSchema } from './validation';

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<IcreateEventSchema>;
};

export const EventInfo = ({ register, errors }: Props) => {
  const { currentUser } = useContext(CurrUserContext);

  return (
    <div className={styles.form}>
      <div className='w-full grid grid-cols-2 gap-6'>
        {currentUser
          ? formArrayPersonalInfo.map((info, index) => (
              <div key={info.title}>
                {info.type === 'select' ? (
                  <Select
                    name={info.title}
                    defaultValue={currentUser && currentUser[info.title]}
                    options={info.options}
                    register={register}
                    label={true}
                    maxW='max-w-md'
                  />
                ) : info.type === 'date' ? (
                  <DatePicker
                    name={info.title}
                    defaultValue={currentUser && formatDate(currentUser[info.title], true)}
                    register={register}
                    label={true}
                    maxW='max-w-md'
                    extraProps={info.extraProps}
                  />
                ) : (
                  <TextInput
                    name={info.title}
                    defaultValue={currentUser && currentUser[info.title]}
                    register={register}
                    label={true}
                    maxW='max-w-md'
                    prepend={info.prepend}
                  />
                )}
                <FormError formError={errors?.[info.title]?.message as string} />
                {/* <FormError formError={errors?.[info.title]?.message} /> */}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
