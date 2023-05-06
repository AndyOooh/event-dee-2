'use client';

import { toTitleCase } from '../utils/helpers';

type Props = {
  name?: string;
  register: any;
  // error?: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  autoComplete?: string;
  className?: string;
  label?: string;
  tooltip?: string;
};

export const TextInput = ({
  name,
  register,
  // error,
  type = 'text',
  placeholder,
  autoComplete,
  label,
  tooltip,
  className,
}: Props): JSX.Element => {

  const _name = name || type;
  const _placeholder = placeholder || toTitleCase(_name);
  const _autoComplete = autoComplete || type;

  let Input = (
    <>
      <input
        {...register(_name)}
        type={type}
        placeholder={_placeholder}
        autoComplete={_autoComplete}
        className={`${className} input input-bordered w-full focus:outline-none focus:border-accent`}
      />
    </>
  );

  if (tooltip) {
    Input = (
      <div className='tooltip tooltip-info tooltip-left w-full text-xs' data-tip={tooltip}>
        {Input}
      </div>
    );
  }

  if (label) {
    Input = (
      <>
        <label className='label w-full flex flex-col'>
          <span className='label-text self-start mb-3'>{label}</span>
          {Input}
        </label>
      </>
    );
  }
  return Input;
};
