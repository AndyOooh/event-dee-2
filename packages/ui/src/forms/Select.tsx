import React from 'react';
import { toTitleCase } from '../utils/helpers';
import { SelectOptions } from 'event-dee-types';

type Props = {
  name: string;
  reg_name?: string;
  register: any;
  defaultValue?: string;
  label?: boolean;
  tooltip?: string;
  className?: string;
  options: SelectOptions
  value?: string;
  maxW?: string;
};

export const Select = ({
  name,
  reg_name,
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

  const register_string = reg_name ? reg_name : name;

  let Select = (
    <>
      <select
        {...register(register_string)}
        className={`select select-bordered w-full mx-auto font-normal focus:outline-none focus:border-accent ${maxW} ${className} text-inherit`}>
        {/* <option disabled selected> */}
        <option>{defaultValue}</option>
        {options.map(opt => {
          const isString = typeof opt === 'string';
          const value = isString ? opt : opt.value;
          // const label = isString ? opt : opt.label || opt.value;
          const label = isString ? opt : opt.label;
          return (
            <option key={value} value={value} className='text-inherit'>
              {label}
            </option>
          );
        })}
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
