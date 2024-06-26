'use client';

import { styles } from '__styles/styles';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { useContext } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { DatePicker, FormError, Select, TextInput } from '@repo/ui';
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
  const descriptionFormData = formArrayEventDetails[descriptionIndex];

  return currentUser ? (
    <div className={styles.form}>
      <div className="w-full grid grid-cols-2 gap-6">
        {formArrayEventDetails.slice(0, dateIndex).map((info) => (
          <div key={info.title}>
            {info.type === 'select' ? (
              <Select
                name={info.title}
                defaultValue={currentUser && currentUser[info.title]}
                options={info.options}
                register={register}
                label={true}
                maxW="max-w-md"
                tooltip={info.tooltip}
              />
            ) : (
              <TextInput
                name={info.title}
                defaultValue={currentUser && currentUser[info.title]}
                register={register}
                label={true}
                maxW="max-w-md"
                prepend={info.prepend}
                tooltip={info.tooltip}
              />
            )}
            <FormError formError={errors?.[info.title]?.message as string} />
            {/* <FormError formError={errors?.[info.title]?.message} /> */}
          </div>
        ))}
        <div className="w-full flex gap-4">
          {formArrayEventDetails.slice(dateIndex, descriptionIndex).map((info) => (
            <div key={info.title} className="w-full">
              <DatePicker
                name={info.title}
                defaultValue={currentUser && formatDate(currentUser[info.title], true)}
                register={register}
                label={true}
                maxW="max-w-[75%]"
                extraProps={info.extraProps}
                tooltip={info.tooltip}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 mx-auto">
        <TextInput
          name={descriptionFormData.title}
          defaultValue={currentUser && currentUser[descriptionFormData.title]}
          register={register}
          label={true}
          maxW="max-w-md"
          tooltip={descriptionFormData.tooltip}
        />
      </div>
    </div>
  ) : null;
};
