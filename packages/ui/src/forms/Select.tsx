import React from 'react';
import { toTitleCase } from '../utils/helpers';

type Props = {
  name: string;
  register: any;
  className: string;
  value?: string;
  label?: string;
  options: string[];
  text?: string;
};

export const Select = ({ name, value, label, options, text, register, className }: Props) => {
  const _value = value || name;
  const _label = label ? toTitleCase(label) : toTitleCase(_value);

  return (
    <>
      <label className='label w-full p-0'>
        <select {...register(name)} className='select w-full max-w-xs mx-auto font-normal'>
          <option disabled selected>
            {text}
          </option>
          {options.map(option => (
            <option key={option} className='font-normal'>
              {option}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};
