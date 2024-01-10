// 'use client';

import { styles } from '__styles/styles';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { useContext, useEffect, useState } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  useFieldArray,
  useWatch,
} from 'react-hook-form';
import { ActionButton, FormError, RadioButtonMulti, Select, TextInput } from 'ui';
import { formArrayEventRoles } from './form-data';
import { IcreateEventSchema } from '../validation';
import { IeventRoleSchema } from './validation';
import { IeventDetailsSchema } from '../event-info/validation';
import { LoaderSpinner } from '__components/ui/LoaderSpinner';
import { getAttributes } from 'ui/src/forms/attributesMap';
import { BiEdit, BiTrash } from 'react-icons/bi';

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
  const selectOptions = ['Provided', 'Not Provided', 'Amount'];
  // const [checked, setChecked] = useState<string>(selectOptions[0]);

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
    transport: 'Not Provided',
    overnight: 'Not Provided',
    role_description: null,
  };

  // const setChecked = (fn: any) => {
  //   fn('Amount');
  // };

  console.log('🚀  file: index.tsx:34  fiels:', fields);
  console.log('😍😘😍😘😍😘control: ', control);
  console.log('😍😘😍😘😍😘control: ', control.getFieldState('roles'));

  const roles = useWatch({ name: 'roles', control });
  console.log('🚀  roles:', roles);

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
                  className={{
                    input: `input-sm`,
                    wrapper_div: `input-sm`,
                    label_span: 'self-center',
                  }}
                  // maxW='max-w-md'
                  prepend={info.prepend}
                  digits={info.digits}
                />
              )}
              <FormError formError={errors?.[info.title]?.message as string} />
            </div>
          ))}
        </div>
        <div className='w-full min-w-max flex gap-6'>
          {['transport', 'overnight'].map((option, index) => (
            <div key={option} className='flex gap-2'>
              <RadioButtonMulti
                control={control}
                register={register}
                name={option}
                // reg_name={`roles.${saved.length}.transport`}
                reg_name={`roles.${saved.length}.${option}`}
                options={selectOptions}
                // checked={checked}
                // setChecked={setChecked}
              />

              {/* <span className='label-text'>{option}</span> */}
              {!['Provided', 'Not Provided'].includes(
                // roles?.[saved.length]?.transport as string
                roles?.[saved.length]?.[option] as string
              ) && (
                <div key={'amount_num'} className='form-control self-end'>
                  <label className='label gap-2 cursor-pointer'>
                    <Controller
                      // name='transport'
                      name={`roles.${saved.length}.transport`}
                      control={control}
                      defaultValue={400}
                      render={({ field }) => (
                        // <TextInput
                        //   // name={info.title}

                        //   name=''
                        //   // reg_name={`roles.${saved.length}.${info.title}`}
                        //   reg_name=''
                        //   // reg_name={`roles.${saved.length}.email`}
                        //   defaultValue={200}
                        //   // register={register}
                        //   label={true}
                        //   className={{
                        //     input: `input-sm`,
                        //     wrapper_div: `input-sm`,
                        //     label_span: 'self-center',
                        //   }}
                        //   prepend='$$'
                        //   digits={4}
                        // />
                        // <label
                        //   className={`label w-full text-center flex flex-col whitespace-nowrap `}>
                        //   <span className={`label-text self-start mb-3`}>Amount</span>
                        <div
                          className='tooltip tooltip-info tooltip-left w-full text-xs'
                          data-tip={'Input amount'}>
                          <div
                            className={`input input-sm input-bordered flex focus-within:[border:1px_solid_black] px-0 max-w-sm`}>
                            <span className='text-xs bg-gray-200 h-full flex items-center justify-center px-2 my-auto'>
                              $$
                            </span>
                            <input
                              defaultValue={200}
                              step={50}
                              onChange={e => {
                                field.onChange(e.target.value);
                                // setChecked('Amount');
                              }}
                              type='number'
                              className='input text-xs w-20 mx-auto focus:outline-none focus:border-accent flex-1 text-center h-auto focus:border-none px-0 '
                            />
                          </div>
                        </div>
                        // </label>
                      )}
                    />
                  </label>
                </div>
              )}
            </div>
          ))}

          <div className='self-start'>
            <TextInput
              name={formArrayEventRoles[6].title}
              reg_name={`roles.${saved.length}.${formArrayEventRoles[6].title}`}
              defaultValue={formArrayEventRoles[6].defaultValue}
              register={register}
              label={true}
              className={{ input: `input-sm`, wrapper_div: `input-sm`, label_span: 'self-center' }}
              prepend={formArrayEventRoles[6].prepend}
            />
            <FormError formError={errors?.[formArrayEventRoles[6].title]?.message as string} />
          </div>
        </div>
        <div className='self-center flex justify-center gap-4'>
          <ActionButton
            onClick={() => onAddRole(saved.length)}
            text='Add Role'
            className='btn-sm max-w-[10rem]'
          />
          <ActionButton
            onClick={() => onRemoveRole(saved.length)}
            text='Cancel'
            className='btn-sm max-w-[10rem] btn-error'
          />
        </div>
      </div>

      {saved.length ? (
        <div className='card w-full bg-base-200 shadow-xl text-sm mt-8'>
          <div className='overflow-x-auto'>
            <table className='table w-full'>
              <thead>
                <tr>
                  {Object.keys(fields[0]).map((key: string) => {
                    return key === 'id' ? null : (
                      <th key={key} className='text-center'>
                        {getAttributes(key)._short_label || getAttributes(key)._label}
                      </th>
                    );
                  })}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {fields
                  .slice(0, saved.length)
                  .map((field: IeventRoleSchema & { id: string }, index: any) => (
                    <tr key={field + index}>
                      {Object.entries(field).map(([key, value]: [string, any]) => {
                        return key === 'id' ? null : (
                          <th
                            key={key}
                            className={`text-center ${
                              key === 'role_description' ? 'truncate max-w-[4rem]' : ''
                            }`}>
                            {value}
                          </th>
                        );
                      })}
                      <th className='flex gap-2 justify-center items-center'>
                        <button className='' onClick={() => onRemoveRole(index)}>
                          <BiEdit className='text-2xl text-info' />
                        </button>
                        <button className='' onClick={() => onUpdateRole(index)}>
                          <BiTrash className='text-2xl text-error' />
                        </button>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </>
  ) : (
    <LoaderSpinner />
  );
};
