'use client';

import { IAttributes, getAttributes } from './attributesMap';

type Props = {
  name: string;
  register: any;
  defaultValue?: string;
  label?: boolean;
  tooltip?: string;
  className?: string;
  maxW?: string;
};

/* Takes maxW bc unable to overwrite max-w with tailwind. This is weird as other styles can be overwritten */
/* Update: above is prob bc tw favors the more restricted of the two */
export const TextInput = ({
  name,
  register,
  defaultValue,
  label = false,
  tooltip,
  className,
  maxW = 'max-w-sm',
}: Props): JSX.Element => {
  const { _type, _label, _placeholder, _autocmplete }: IAttributes = getAttributes(name);

  let Input =
    _type === 'textarea' ? (
      <>
        <textarea
          {...register(name)}
          type={_type}
          placeholder={_placeholder}
          autoComplete={_autocmplete}
          defaultValue={defaultValue}
          className={`textarea textarea-bordered w-full mx-auto focus:outline-none focus:border-accent ${maxW} ${className}`}
        />
      </>
    ) : (
      <>
        <input
          {...register(name)}
          type={_type}
          placeholder={_placeholder}
          autoComplete={_autocmplete}
          defaultValue={defaultValue}
          className={`input input-bordered w-full mx-auto focus:outline-none focus:border-accent ${maxW} ${className}`}
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
