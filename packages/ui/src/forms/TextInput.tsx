'use client';

import { IAttributes, getAttributes } from './attributesMap';

type Props = {
  name: string;
  register: any;
  registeroptions?: any
  defaultValue?: string;
  label?: boolean;
  tooltip?: string;
  className?: string;
  maxW?: string;
  prepend?: string;
};

/* Takes maxW bc unable to overwrite max-w with tailwind. This is weird as other styles can be overwritten */
/* Update: above is prob bc tw favors the more restricted of the two */
export const TextInput = ({
  name,
  register,
  registeroptions,
  defaultValue,
  label = false,
  tooltip,
  className,
  maxW = 'max-w-sm',
  prepend,
}: Props): JSX.Element => {
  const { _type, _label, _placeholder, _autocmplete, _rows, _maxLenght }: IAttributes =
    getAttributes(name);

    if (name === 'dob') {
      console.log('_type, _label, _placeholder, _autocmplete, _rows, _maxLenght: ', _type, _label, _placeholder, _autocmplete, _rows, _maxLenght);
    }

  let Input =
    _type === 'textarea' ? (
      <>
        <textarea
          {...register(name, registeroptions)}
          type={_type}
          placeholder={_placeholder}
          autoComplete={_autocmplete}
          defaultValue={defaultValue}
          className={`textarea textarea-bordered w-full mx-auto focus:outline-none focus:border-accent ${maxW} ${className}`}
          rows={_rows}
          maxLength={_maxLenght}
        />
      </>
    ) : (
      <>
        <input
          {...register(name, registeroptions)}
          type={_type}
          placeholder={_placeholder}
          autoComplete={_autocmplete}
          defaultValue={defaultValue}
          className={`${
            prepend ? 'flex-1 pl-0 h-auto focus:border-none' : `input-bordered ${maxW}`
          } input w-full mx-auto focus:outline-none focus:border-accent ${className}`}
          maxLength={_maxLenght}></input>
      </>
    );

  if (prepend) {
    Input = (
      // <div className='input input-bordered flex gap-2 w-full focus-within:[border:1px_solid_black] pl-0'>
      <div
        className={`input input-bordered flex gap-2 w-full focus-within:[border:1px_solid_black] pl-0 ${maxW}`}>
        <span className='text-sm bg-gray-200 h-full flex items-center justify-center px-2 my-auto'>
          {prepend}
        </span>
        {Input}
      </div>
    );
  }

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
