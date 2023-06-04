'use client';

import { IAttributes, getAttributes } from './attributesMap';

type Props = {
  name: string;
  register: any;
  label?: boolean;
  tooltip?: string;
  className?: string;

  // error?: string;
  // placeholder?: string;
  // autoComplete?: string;
  // type?: 'text' | 'email' | 'password';
};

export const TextInput = ({
  name,
  register,
  label = false,
  tooltip,
  className,

  // error,
  // type = 'text',
  // placeholder,
  // autoComplete,
}: Props): JSX.Element => {
  // const _name = name || type;
  // const _placeholder = placeholder || toTitleCase(_name);
  // const _autoComplete = autoComplete || type;

  const { _type, _label, _placeholder, _autocmplete }: IAttributes = getAttributes(name);
  const attr = getAttributes(name);
  // console.log('🚀  file: TextInput.tsx:36  attr:', attr)
  // console.log('🚀  file: TextInput.tsx:39  _type:', _type);

  let Input = (
    <>
      <input
        {...register(name)}
        type={_type}
        placeholder={_placeholder}
        autoComplete={_autocmplete}
        className={`${className} input input-bordered w-full max-w-xs mx-auto focus:outline-none focus:border-accent`}
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
          <span className='label-text self-start mb-3'>{_label}</span>
          {Input}
        </label>
      </>
    );
  }
  return Input;
};
