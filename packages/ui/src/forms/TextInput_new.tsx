'use client';

import { IAttributes, getAttributes } from './attributesMap';

export type TextInputClassNames = {
  input?: string;
  label?: string;
  label_span?: string;
  wrapper_div?: string;
};

type Props = {
  name: string;
  reg_name?: string;
  register: any;
  registeroptions?: any;
  defaultValue?: string;
  label?: boolean;
  tooltip?: string;
  className?: TextInputClassNames;
  maxW?: string;
  prepend?: string;
  digits?: number;
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
  tooltip,
  className,
  maxW = 'max-w-sm',
  prepend,
  digits = 3, // useed with type='number' to set width
}: Props): JSX.Element => {
  const { _type, _label, _placeholder, _autocomplete, _rows, _maxLenght, _step }: IAttributes =
    getAttributes(name);

  const register_string = reg_name || name;
  const isNumber = _type === 'number';
  const numRem = digits + 2;
  const numberTypeWidthRem = `w-${numRem * 4}`;

  let Input =
    _type === 'textarea' ? (
      <>
        <textarea
          {...register(register_string, registeroptions)}
          type={_type}
          placeholder={_placeholder}
          autoComplete={_autocomplete}
          defaultValue={defaultValue}
          className={`textarea textarea-bordered w-full mx-auto focus:outline-none w- focus:border-accent ${maxW} ${className?.input}`}
          rows={_rows}
          maxLength={_maxLenght}
        />
      </>
    ) : (
      <>
        <input
          {...register(register_string, registeroptions)}
          type={_type}
          placeholder={_placeholder}
          autoComplete={_autocomplete}
          defaultValue={defaultValue}
          // max={isNumber ? '100' : undefined}
          // maxlength='4'
          // size={digits}
          step={_step}
          className={`${
            isNumber
              ? `flex-1 text-center h-auto focus:border-none ${
                  prepend ? 'px-0' : 'pr-0'
                } ${numberTypeWidthRem}`
              : `input-bordered w-full ${maxW}`
          } input mx-auto focus:outline-none focus:border-accent ${className?.input}`}
          maxLength={_maxLenght}></input>
      </>
    );

  if (isNumber) {
    Input = (
      <div
        className={`input input-bordered flex focus-within:[border:1px_solid_black] px-0 ${maxW} ${className?.wrapper_div}`}>
        {prepend && (
          <span className='text-sm bg-gray-200 h-full flex items-center justify-center px-2 my-auto'>
            {prepend}
          </span>
        )}
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
        <label
          className={`label w-full text-center flex flex-col whitespace-nowrap ${className?.label}`}>
          <span className={`label-text self-start mb-3 ${className?.label_span}`}>{_label}</span>
          {Input}
        </label>
      </>
    );
  }
  return Input;
};
