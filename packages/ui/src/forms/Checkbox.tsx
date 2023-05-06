import React from 'react';

type Props = {
  name: string;
  register: any;
  className: string;
  value?: string;
  label?: string;
};

export const Checkbox = ({ name, value, label, register, className }: Props) => {
  const _value = value || name;
  const _label = label || _value;
  return (
    // <label htmlFor={_label} className='label cursor-pointer flex/center gap-2'>
    <label htmlFor={_label} className='label cursor-pointer flex/center gap-2'>
      <input
        {...register(name)}
        id={_label}
        value={_value}
        type='checkbox'
        className={`${className} checkbox checkbox-sm`}
      />
      <span className='label-text'>{_label}</span>
    </label>
  );
};
