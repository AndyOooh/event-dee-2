'use client';

import { useState } from 'react';
import { Controller, Control, UseFormRegister } from 'react-hook-form';
import { startCase } from 'lodash';

type Props = {
  control: Control;
  register: UseFormRegister<any>;
  name: string;
  reg_name: string;
  options: string[];
};

/* Default checked is options[0] */
export const RadioButtonMulti = ({ control, register, name, reg_name, options }: Props) => {
  //   const title = name.replace(/_/g, ' ');
  const title = startCase(name);

  const [checked, setChecked] = useState<string>(options[0]);

  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <label className='label flex-col'>
        {title}
        <div className='flex-col'>
          {options.map((option, index) => (
            <div key={option} className='form-control'>
              <label className='label gap-2 cursor-pointer'>
                <Controller
                  //   name={name}
                  name={reg_name}
                  control={control}
                  defaultValue={option}
                  render={({ field }) => (
                    <input
                      type='radio'
                      onClick={() => setChecked(option)}
                      {...field}
                      value={option}
                      className='radio-xs checked:bg-red-500'
                      checked={checked === option}
                    />
                  )}
                />
                <span className='label-text w-full'>{option}</span>
              </label>
            </div>
          ))}
        </div>
      </label>
    </div>
  );
};
