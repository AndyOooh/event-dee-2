// 'use client';

import { styles } from '__styles/styles';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { useContext, useEffect } from 'react';
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  useFieldArray,
} from 'react-hook-form';
import { ActionButton, FormError, Select, TextInput } from 'ui';
import { formArrayEventRoles } from './form-data';
import { IcreateEventSchema } from '../validation';
import { IeventRoleSchema } from './validation';
import { IeventDetailsSchema } from '../event-info/validation';
import { LoaderSpinner } from '__components/ui/LoaderSpinner';

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<IeventDetailsSchema>;
  setValue: UseFormSetValue<IcreateEventSchema>;
  getValues: UseFormSetValue<IcreateEventSchema>;
  control: Control<IcreateEventSchema>;
};

export const EventRoles = ({ register, control, errors, setValue, getValues }: Props) => {
  const { currentUser } = useContext(CurrUserContext);

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    name: 'roles', // unique name for your Field Array
    control, // control props comes from useForm (optional: if you are using FormContext)
  });

  useEffect(() => {
    remove();
    // append({ hourly: 1 });
    // append();
    append(baseValues);
    // append({ hourly: '1' });
    // append({ hourly: '' });
  }, []);

  const baseValues: IeventRoleSchema = {
    role_type: null,
    number_workers: 1,
    hourly: 1,
    days: 3,
    hours_per_day: 1,
    break_hours: null,
    transport_covered: null,
    overnight_covered: null,
    role_description: null,
  };

  console.log('🚀  file: index.tsx:34  fields:', fields);

  // const onAddRole = (e: any) => {
  const onAddRole = () => {
    // e.preventDfault();
    console.log('onAddRole');
    append(baseValues);
    // const vals = getValues();
    // console.log('🚀  file: index.tsx:27  vals:', vals)
    // setValue('roles', [...getValues().roles, { role: '', description: '' }]);
    // TODO: add role to roles array in form
  };

  return currentUser ? (
    fields.map((field: any, index: any) => (
      <div key={field.id} className={styles.form}>
        {/* <div className='w-full grid grid-cols-2 gap-6'> */}
        <div className='w-full flex gap-6'>
          {formArrayEventRoles.slice(0, 6).map(info => (
            <div key={info.title}>
              {info.type === 'select' ? (
                <Select
                  name={info.title}
                  reg_name={`roles.${index}.${info.title}`}
                  defaultValue={info.defaultValue}
                  options={info.options}
                  register={register}
                  label={true}
                  className='select-sm '
                  maxW='max-w-md'
                />
              ) : (
                <TextInput
                  name={info.title}
                  reg_name={`roles.${index}.${info.title}`}
                  // reg_name={`roles.${index}.email`}
                  defaultValue={info.defaultValue}
                  register={register}
                  label={true}
                  className={`${info.className} input-sm`}
                  // maxW='max-w-md'
                  prepend={info.prepend}
                  prependClassName={info.prependClassName}
                />
              )}
              <FormError formError={errors?.[info.title]?.message as string} />
            </div>
          ))}
        </div>
        <div className='w-full flex gap-6'>
          {formArrayEventRoles.slice(6, 8).map(info => (
            <div key={info.title}>
              {info.type === 'select' ? (
                <Select
                  name={info.title}
                  reg_name={`roles.${index}.${info.title}`}
                  defaultValue={info.defaultValue}
                  options={info.options}
                  register={register}
                  label={true}
                  className='select-sm '
                  maxW='max-w-md'
                />
              ) : (
                <TextInput
                  name={info.title}
                  reg_name={`roles.${index}.${info.title}`}
                  defaultValue={info.defaultValue}
                  register={register}
                  label={true}
                  className={`${info.className} input-sm`}
                  // maxW='max-w-md'
                  prepend={info.prepend}
                  prependClassName={info.prependClassName}
                />
              )}
              <FormError formError={errors?.[info.title]?.message as string} />
            </div>
          ))}
        </div>
        <div className='self-start'>
          <TextInput
            name={formArrayEventRoles[8].title}
            reg_name={`roles.${index}.${formArrayEventRoles[8].title}`}
            defaultValue={formArrayEventRoles[8].defaultValue}
            register={register}
            label={true}
            className={`${formArrayEventRoles[8].className}`}
            // maxW='max-w-md'
            prepend={formArrayEventRoles[8].prepend}
            prependClassName={formArrayEventRoles[8].prependClassName}
          />
          <FormError formError={errors?.[formArrayEventRoles[8].title]?.message as string} />
        </div>
        <ActionButton onClick={onAddRole} text='Add Role' />
      </div>
    ))
  ) : (
    <LoaderSpinner />
  );
};
