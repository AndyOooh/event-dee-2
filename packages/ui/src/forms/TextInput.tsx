import React from 'react';

type Props = {
  type?: 'text' | 'email' | 'password';
  name?: string;
  placeholder?: string;
  autoComplete?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
  tooltip?: string;
};

export const TextInput = ({
  type = 'text',
  name,
  placeholder,
  autoComplete,
  handleChange,
  className,
  label,
  tooltip,
}: Props) => {
  const _name = name || type;
  const _placeholder = placeholder || _name.charAt(0).toUpperCase() + _name.slice(1);
  const _autoComplete = autoComplete || type;

  let inputElement = (
    <input
      type={type}
      name={_name}
      placeholder={_placeholder}
      autoComplete={_autoComplete}
      onChange={handleChange}
      className={`${className} input input-bordered w-full focus:outline-none focus:border-accent`}
    />
  );

  if (tooltip) {
    inputElement = (
      <div className='tooltip tooltip-info tooltip-left w-full text-xs' data-tip={tooltip} >
        {inputElement}
      </div>
    );
  }

  if (label) {
    inputElement = (
      <label className='label w-full flex flex-col'>
        <span className='label-text self-start mb-3'>{label}</span>
        {inputElement}
      </label>
    );
  }

  return inputElement;
};
