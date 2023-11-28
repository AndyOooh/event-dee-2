import React from 'react';
import { toTitleCase } from '../utils/helpers';

type Props = {
  name: string;
  register: any;
  defaultValue?: string;
  label?: boolean;
  tooltip?: string;
  className: string;
  options: any[];
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
    <>
      <select
        {...register(name)}
        className={`select select-bordered w-full mx-auto font-normal focus:outline-none focus:border-accent ${maxW} ${className} text-inherit`}>
        {/* <option disabled selected> */}
        <option>{defaultValue}</option>
        {options.map(option => (
          <option key={option.label} className='text-inherit'>
            {option.label}
          </option>
        ))}
      </select>
    </>
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
