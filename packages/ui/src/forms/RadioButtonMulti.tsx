'use client';

import { Controller, Control, UseFormRegister } from 'react-hook-form';

type Props = {
  control: Control;
  register: UseFormRegister<any>;
  name: string;
  options: string[];
};

export const RadioButtonMulti = ({ control, register, name, options }: Props) => {
  const title = name.replace(/_/g, ' ');

  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <label className='label flex-col'>
        {title}
        <div className='flex'>
          {options.map(option => (
            <div key={option} className='form-control'>
              <label className='label gap-2 cursor-pointer'>
                <span className='label-text'>{option}</span>
                <Controller
                  name={name}
                  control={control}
                  defaultValue={option}
                  render={({ field }) => (
                    <input
                      type='radio'
                      {...field}
                      value={option}
                      className='radio-xs checked:bg-red-500'
                    />
                  )}
                />
              </label>
            </div>
          ))}
        </div>
      </label>
    </div>
  );
};
