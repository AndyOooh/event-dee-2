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

export const EventRoles = ({ register, control, errors }: Props) => {
  const { currentUser } = useContext(CurrUserContext);
  const [saved, setSaved] = useState<number[]>([]);
  const selectOptions = ['Not Provided', 'Provided', 'Amount'];
  const { fields, append, remove } = useFieldArray({
    name: 'roles',
    control,
  });
  const roles = useWatch({ name: 'roles', control });
  const radioFields: ('transport' | 'overnight')[] = ['transport', 'overnight'];

  useEffect(() => {
    remove();
    append(baseValues);
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

  const onAddRole = (index: number) => {
    setSaved(prev => [...prev, index]);
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
      {saved.length ? (
        <div className='card w-full bg-base-200 shadow-xl text-sm mb-8'>
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
                {roles
                  ?.slice(0, saved.length)
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
                        <button type='button' className='' onClick={() => onUpdateRole(index)}>
                          <BiEdit className='text-2xl text-info' />
                        </button>
                        <button type='button' className='' onClick={() => onRemoveRole(index)}>
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
      {saved.length < fields.length ? (
        <div className={styles.form}>
          <div className='flex justify-between'>
            <div>
              <div className='w-full flex gap-6'>
                {formArrayEventRoles.slice(0, 3).map(info => (
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
                        className={{
                          input: `input-sm`,
                          wrapper_div: `input-sm`,
                          label_span: 'self-center',
                        }}
                        prepend={info.prepend}
                        digits={info.digits}
                      />
                    )}
                    <FormError formError={errors?.[info.title]?.message as string} />
                  </div>
                ))}
              </div>
              <div className='w-full flex gap-6'>
                {formArrayEventRoles.slice(3, 6).map(info => (
                  <div key={info.title}>
                    <TextInput
                      name={info.title}
                      reg_name={`roles.${saved.length}.${info.title}`}
                      defaultValue={info.defaultValue}
                      register={register}
                      label={true}
                      className={{
                        input: `input-sm`,
                        wrapper_div: `input-sm`,
                        label_span: 'self-center',
                      }}
                      prepend={info.prepend}
                      digits={info.digits}
                    />
                    <FormError formError={errors?.[info.title]?.message as string} />
                  </div>
                ))}
              </div>
            </div>
            {radioFields.map((option) => (
              <div key={option} className='flex gap-2'>
                <RadioButtonMulti
                  control={control}
                  register={register}
                  name={option}
                  reg_name={`roles.${saved.length}.${option}`}
                  options={selectOptions}
                />

                {!['Provided', 'Not Provided'].includes(
                  roles?.[saved.length]?.[option] as string
                ) && (
                  <div key={'amount_num'} className='form-control self-end'>
                    <label className='label gap-2 cursor-pointer'>
                      <Controller
                        name={`roles.${saved.length}.${option}`}
                        control={control}
                        defaultValue={400}
                        render={({ field }) => (
                          <div
                            className='tooltip tooltip-info tooltip-left w-full text-xs'
                            data-tip={'Input amount'}>
                            <div
                              className={`input input-sm input-bordered flex focus-within:[border:1px_solid_black] px-0 max-w-sm`}>
                              <span className='text-xs bg-gray-200 h-full flex items-center justify-center px-2 my-auto'>
                                $$
                              </span>
                              <input
                                defaultValue={'0'}
                                step={50}
                                onChange={e => {
                                  console.log('🚀  e:', e, typeof e);
                                  field.onChange(e.target.value);
                                }}
                                type='number'
                                className='input text-xs w-20 mx-auto focus:outline-none focus:border-accent flex-1 text-center h-auto focus:border-none px-0 '
                              />
                            </div>
                          </div>
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
                className={{
                  input: `input-lg`,
                  wrapper_div: `input-sm`,
                  label_span: 'self-center',
                }}
                prepend={formArrayEventRoles[6].prepend}
              />
              <FormError formError={errors?.[formArrayEventRoles[6].title]?.message as string} />
            </div>
          </div>

          {/* <div className='w-full min-w-max flex gap-6'> */}

          {/* </div> */}

          <div className='self-center flex justify-center gap-4'>
            <ActionButton
              onClick={() => onAddRole(saved.length)}
              text='Add'
              className='btn-sm max-w-[10rem]'
            />
            <ActionButton
              onClick={() => onRemoveRole(saved.length)}
              text='Cancel'
              className='btn-sm max-w-[10rem] btn-error'
            />
          </div>
        </div>
      ) : (
        <ActionButton onClick={() => append(baseValues)} text='Add Role' />
      )}
    </>
  ) : (
    <LoaderSpinner />
  );
};
