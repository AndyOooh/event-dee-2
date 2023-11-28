'use client';

import { useState } from 'react';
import Select from 'react-select';
import { getAttributes } from './attributesMap';

type Option = {
  value: string;
  label: string;
};

type Props = {
  name: string;
  register: any;
  defaultValue?: Option;
  label?: boolean;
  tooltip?: string;
  options: Option[];
  value?: string;
  maxW?: string;
};

export const ReactSelect = ({
  name,
  register,
  label = false,
  defaultValue,
  tooltip,
  options,
  maxW = 'max-w-sm',
}: Props): JSX.Element => {
  // console.log('🚀  file: ReactSelect.tsx:30  defaultValue:', defaultValue);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const [selectedOption, setSelectedOption] = useState(defaultValue);
  // console.log('🚀  file: ReactSelect.tsx:39  selectedOption:', selectedOption);

  const { _type, _label, _placeholder, _autocmplete } = getAttributes(name);

  const LALALALA = register(name);
  console.log('🚀  file: ReactSelect.tsx:45  LALALALA:', LALALALA)

  // console.log('LOADINGGGGG!!!!!!!!!');
  let SelectElement = (
    <div
      // className={`input input-bordered w-full mx-auto focus:outline-none focus:border-accent ${maxW} ${className}`}
      className={`flex-center p-0 input input-bordered w-full mx-auto focus:outline-none focus:border-accent max-w-md ${maxW}`}>
      {/* <input defaultValue={defaultValue?.label} className='bg-white' /> */}

      <Select
        {...register(name)}
        // name={name + 'kakaka'}
        // value={selectedOption}
        className='basic-single'
        placeholder={_placeholder}
        // defaultValue={options[0]}
        defaultValue={defaultValue}
        // defaultValue={{ value: 'chocolate', label: 'Male33333' }}
        // defaultValue={'dsfsdf'}
        isDisabled={isDisabled}
        isLoading={isLoading}
        // isRtl={isRtl}
        // isSearchable={isSearchable}
        options={options}
        // classNamePrefix='select'
        // isClearable={isClearable}
        // unstyled={true}
        styles={{
          control: (provided, state) => ({
            ...provided,
            border: 'none',
            // width: '100%',
            // backgroundColor: '',
          }),
          container: (provided, state) => ({
            ...provided,
            width: '100%',
            backgroundColor: 'lghtblue',
            // padding: '0px',
            // outline: 'none',
          }),
        }}
      />
    </div>
  );

  if (tooltip) {
    SelectElement = (
      <div className='tooltip tooltip-info tooltip-left w-full text-xs' data-tip={tooltip}>
        {SelectElement}
      </div>
    );
  }

  if (label) {
    SelectElement = (
      <>
        <label className='label w-full flex flex-col'>
          <span className='label-text self-start mb-3'>{_label}</span>
          {SelectElement}
        </label>
      </>
    );
  }
  return SelectElement;
};

{
  /* <Select
        defaultValue={selectedOption}
        onChange={() => setSelectedOption()}
        options={options}
      /> */
}
