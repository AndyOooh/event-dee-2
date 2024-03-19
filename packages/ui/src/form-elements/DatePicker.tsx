'use client';

import { IAttributes, getAttributes } from './attributesMap';

type Props = {
  name: string;
  register: any;
  registeroptions?: any;
  defaultValue?: string | Date;
  label?: boolean;
  tooltip?: string;
  className?: string;
  maxW?: string;
  // prepend?: string;
  extraProps?: any;
};

/*
 * Takes maxW bc unable to overwrite max-w with tailwind. This is weird as other styles can be overwritten
 * Update: above is prob bc tw favors the more restricted of the two
 * NB: This could be merged with TextInput, but I'm not sure if it's worth it.
 * NB2: Could use extraProps more and in other components as well. First implemented here.
 */

export const DatePicker = ({
  name,
  register,
  registeroptions,
  defaultValue,
  label = false,
  tooltip,
  className,
  maxW = 'max-w-sm',
  extraProps,
}: // prepend,
Props): JSX.Element => {
  const {
    _type,
    _label,
    _placeholder,
    _autocomplete: _autocmplete,
    _rows,
    _maxLenght,
  }: IAttributes = getAttributes(name);

  let Input = (
    <>
      <input
        {...register(name, registeroptions)}
        type='date'
        placeholder={_placeholder}
        autoComplete={_autocmplete}
        defaultValue={defaultValue}
        className={`input input-bordered w-full mx-auto focus:outline-none focus:border-accent ${maxW} ${className}`}
        maxLength={_maxLenght}
        // max={new Date().toISOString().split('T')[0]}
        {...extraProps}
      />
    </>
  );

  // if (prepend) {
  //   Input = (
  //     // <div className='input input-bordered flex gap-2 w-full focus-within:[border:1px_solid_black] pl-0'>
  //     <div
  //       className={`input input-bordered flex gap-2 w-full focus-within:[border:1px_solid_black] pl-0 ${maxW}`}>
  //       <span className='text-sm bg-gray-200 h-full flex items-center justify-center px-2 my-auto'>
  //         {prepend}
  //       </span>
  //       {Input}
  //     </div>
  //   );
  // }

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
