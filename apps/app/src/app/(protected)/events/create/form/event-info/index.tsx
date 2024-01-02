'use client';

import { styles } from '__styles/styles';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { useContext } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { DatePicker, FormError, Select, TextInput } from 'ui';
import { formArrayEventDetails } from './form-data';
import { formatDate } from '__firebase/utilities';

type Props = {
  register: UseFormRegister<any>;
  // errors: FieldErrors<IeventDetailsSchema>;
  errors: any;
};

export const EventInfo = ({ register, errors }: Props) => {
  const { currentUser } = useContext(CurrUserContext);

  return currentUser ? (
    <div className={styles.form}>
      <div className='w-full grid grid-cols-2 gap-6'>
        {formArrayEventDetails.slice(0, 4).map((info, index) => (
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
        ))}
      </div>
      <div className='w-1/2 mx-auto'>
        <TextInput
          name={formArrayEventDetails[4].title}
          defaultValue={currentUser && currentUser[formArrayEventDetails[4].title]}
          register={register}
          label={true}
          maxW='max-w-md'
        />
      </div>
    </div>
  ) : null;
};