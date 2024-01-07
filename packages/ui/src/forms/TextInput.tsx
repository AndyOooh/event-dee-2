'use client';

import { IAttributes, getAttributes } from './attributesMap';

type Props = {
  name: string;
  reg_name?: string;
  register: any;
  registeroptions?: any;
  defaultValue?: string;
  label?: boolean;
  labelClassName?: string;
  tooltip?: string;
  className?: string;
  maxW?: string;
  prepend?: string;
  prependClassName?: string;
};

/* Takes maxW bc unable to overwrite max-w with tailwind. This is weird as other styles can be overwritten */
/* Update: above is prob bc tw favors the more restricted of the two */
export const TextInput = ({
  name,
  reg_name,
  register,
  registeroptions,
  defaultValue,
  label = false,
  labelClassName,
  tooltip,
  className,
  maxW = 'max-w-sm',
  prepend,
  prependClassName,
}: Props): JSX.Element => {
  const { _type, _label, _placeholder, _autocomplete, _rows, _maxLenght, _step }: IAttributes =
    getAttributes(name);

  const register_string = reg_name ? reg_name : name;

  let Input =
    _type === 'textarea' ? (
      <>
        <textarea
          {...register(register_string, registeroptions)}
          type={_type}
          placeholder={_placeholder}
          autoComplete={_autocomplete}
          defaultValue={defaultValue}
          className={`textarea textarea-bordered w-full mx-auto focus:outline-none focus:border-accent ${maxW} ${className}`}
          rows={_rows}
          maxLength={_maxLenght}
        />
      </>
    ) : (
      <>
        <input
          // {...register(name, registeroptions)}
          {...register(register_string, registeroptions)}
          type={_type}
          placeholder={_placeholder}
          autoComplete={_autocomplete}
          defaultValue={defaultValue}
          step={_step}
          className={`${
            _type ? 'flex-1 pl-0 h-auto focus:border-none' : `input-bordered ${maxW}`
          } input w-full mx-auto focus:outline-none focus:border-accent ${className}`}
          maxLength={_maxLenght}></input>
      </>
    );

  if (prepend) {
    Input = (
      // <div className='input input-bordered flex gap-2 w-full focus-within:[border:1px_solid_black] pl-0'>
      <div
        className={`input input-bordered flex gap-2 w-full focus-within:[border:1px_solid_black] pl-0 ${maxW} ${prependClassName}`}>
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
        {/* <label className='label w-full flex flex-col'> */}
        <label className={`label w-full flex flex-col ${labelClassName}`}>
          <span className='label-text self-start mb-3'>{_label}</span>
          {Input}
        </label>
      </>
    );
  }
  return Input;
};
