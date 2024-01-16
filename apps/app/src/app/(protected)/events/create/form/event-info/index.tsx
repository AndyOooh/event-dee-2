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
  const dateIndex = 3;
  const descriptionIndex = 5;

  return currentUser ? (
    <div className={styles.form}>
      <div className='w-full grid grid-cols-2 gap-6'>
        {formArrayEventDetails.slice(0, dateIndex).map(info => (
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
        <div className='w-full flex gap-4'>
          {formArrayEventDetails.slice(dateIndex, descriptionIndex).map(info => (
            <div key={info.title} className='w-full'>
              <DatePicker
                name={info.title}
                defaultValue={currentUser && formatDate(currentUser[info.title], true)}
                register={register}
                label={true}
                maxW='max-w-[75%]'
                extraProps={info.extraProps}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='w-1/2 mx-auto'>
        <TextInput
          name={formArrayEventDetails[descriptionIndex].title}
          defaultValue={currentUser && currentUser[formArrayEventDetails[descriptionIndex].title]}
          register={register}
          label={true}
          maxW='max-w-md'
        />
      </div>
    </div>
  ) : null;
};
