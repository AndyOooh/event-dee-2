import React from 'react';
import { toTitleCase } from '../utils/helpers';

type Props = {
  name: string;
  register: any;
  defaultValue?: string;
  label?: boolean;
  tooltip?: string;
  className: string;
  options: string[];
  value?: string;
  maxW?: string;
};

export const Select = ({
  name,
  value,
  label = false,
  tooltip,
  options,
  defaultValue,
  register,
  className,
  maxW = 'max-w-sm',
}: Props) => {
  const _value = value || name;
  const _label = toTitleCase(_value);

  let Select = (
    // <label className='label w-full p-0'>
    <>
      <select
        {...register(name)}
        className={`select select-bordered w-full mx-auto font-normal focus:outline-none focus:border-accent ${maxW} ${className}`}>
        <option disabled selected>
          {defaultValue}
        </option>
        {options.map(option => (
          <option key={option} className='font-normal'>
            {option}
          </option>
        ))}
      </select>
    </>
    // </label>
  );

  if (tooltip) {
    Select = (
      <div className='tooltip tooltip-info tooltip-left w-full text-xs' data-tip={tooltip}>
        {Select}
      </div>
    );
  }

  if (label) {
    Select = (
      <>
        <label className='label w-full flex flex-col'>
          <span className='label-text self-start mb-3'>{_label}</span>
          {Select}
        </label>
      </>
    );
  }

  return Select;
};
