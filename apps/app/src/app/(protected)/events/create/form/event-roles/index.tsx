// 'use client';

import { styles } from '__styles/styles';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { useContext, useEffect, useState } from 'react';
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
import { getAttributes } from 'ui/src/forms/attributesMap';

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<IeventDetailsSchema>;
  setValue: UseFormSetValue<IcreateEventSchema>;
  getValues: UseFormSetValue<IcreateEventSchema>;
  control: Control<IcreateEventSchema>;
};

export const EventRoles = ({ register, control, errors, setValue, getValues }: Props) => {
  const { currentUser } = useContext(CurrUserContext);
  const [saved, setSaved] = useState<number[]>([]);

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
    hourly: 300,
    days: 3,
    hours_per_day: 1,
    break_hours: 0,
    transport_covered: null,
    overnight_covered: null,
    role_description: null,
  };

  console.log('🚀  file: index.tsx:34  fields:', fields);

  // const onAddRole = (e: any) => {
  const onAddRole = (index: number) => {
    // e.preventDfault();
    console.log('onAddRole');
    append(baseValues);
    setSaved(prev => [...prev, index]);

    console.log('control: ', control);
    console.log('fields: ', fields);

    // const vals = getValues();
    // console.log('🚀  file: index.tsx:27  vals:', vals)
    // setValue('roles', [...getValues().roles, { role: '', description: '' }]);
    // TODO: add role to roles array in form
  };

  const onRemoveRole = (index: number) => {
    console.log('onRemove');
    remove(index);
    setSaved(prev => prev.filter(item => item !== index));
  };

  const onUpdateRole = (index: number) => {
    console.log('onUpdate');
    setSaved(prev => prev.filter(item => item !== index));
  };

  return currentUser ? (
    <>
      <div className={styles.form}>
        {/* <div className='w-full grid grid-cols-2 gap-6'> */}
        <div className='w-full flex gap-6'>
          {formArrayEventRoles.slice(0, 6).map(info => (
            <div key={info.title}>
              {info.type === 'select' ? (
                <Select
                  name={info.title}
                  reg_name={`roles.${saved.length}.${info.title}`}
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
                  reg_name={`roles.${saved.length}.${info.title}`}
                  // reg_name={`roles.${saved.length}.email`}
                  defaultValue={info.defaultValue}
                  register={register}
                  label={true}
                  // labelClassName='w-min whitespace-nowrap'
                  className={{
                    input: `input-sm`,
                    wrapper_div: `input-sm`,
                    label_span: 'self-center',
                  }}
                  // className={{ input: `${info.className} input-sm` }}
                  // maxW='max-w-md'
                  prepend={info.prepend}
                  // prependClassName={info.prependClassName}
                  digits={info.digits}
                />
              )}
              <FormError formError={errors?.[info.title]?.message as string} />
            </div>
          ))}
          {/* <label htmlFor='' className='label w-min flex flex-col'>
            Num Test
            <input type='number' className='input input-sm input-bordered pr-1 w-min' />
          </label> */}
        </div>
        <div className='w-full flex gap-6'>
          {formArrayEventRoles.slice(6, 8).map(info => (
            <div key={info.title}>
              {info.type === 'select' ? (
                <Select
                  name={info.title}
                  reg_name={`roles.${saved.length}.${info.title}`}
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
                  reg_name={`roles.${saved.length}.${info.title}`}
                  defaultValue={info.defaultValue}
                  register={register}
                  label={true}
                  // className={`${info.className} input-sm`}
                  className={{
                    input: `input-sm`,
                    wrapper_div: `input-sm`,
                    label_span: 'self-center',
                  }}
                  // maxW='max-w-md'
                  prepend={info.prepend}
                  // prependClassName={info.prependClassName}
                />
              )}
              <FormError formError={errors?.[info.title]?.message as string} />
            </div>
          ))}
        </div>
        <div className='self-start'>
          <TextInput
            name={formArrayEventRoles[8].title}
            reg_name={`roles.${saved.length}.${formArrayEventRoles[8].title}`}
            defaultValue={formArrayEventRoles[8].defaultValue}
            register={register}
            label={true}
            // className={`${formArrayEventRoles[8].className}`}
            className={{ input: `input-sm`, wrapper_div: `input-sm`, label_span: 'self-center' }}
            // maxW='max-w-md'
            prepend={formArrayEventRoles[8].prepend}
            // prependClassName={formArrayEventRoles[8].prependClassName}
          />
          <FormError formError={errors?.[formArrayEventRoles[8].title]?.message as string} />
        </div>
        <div className='self-center flex justify-center gap-4'>
          <ActionButton onClick={() => onAddRole(saved.length)} text='Add Role' className='btn-sm max-w-[10rem]' />
          <ActionButton
            onClick={() => onRemoveRole(saved.length)}
            text='Cancel'
            className='btn-sm max-w-[10rem] btn-error'
          />
        </div>
      </div>
      {fields.slice(0, saved.length).map((field: IeventRoleSchema & { id: string }, index: any) => (
        <div key={index} className='w-full flex justify-between border-2 border-cyan-300 py-2'>
          {Object.entries(field).map(([key, value]: [string, any]) => {
            return key === 'id' ? null : (
              <div key={key} className='flex flex-col gap-2 justify-center items-center'>
                <div>{getAttributes(key)._label}</div>
                <div>{value}</div>
              </div>
            );
          })}
          <button onClick={() => onRemoveRole(index)}>Remove</button>
          <button onClick={() => onUpdateRole(index)}>Update</button>
        </div>
      ))}
    </>
  ) : (
    <LoaderSpinner />
  );
};
