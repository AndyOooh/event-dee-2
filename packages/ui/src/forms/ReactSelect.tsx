'use client';

import { useState } from 'react';
import Select from 'react-select';

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
  label = false,
  defaultValue,
  tooltip,
  options,
  maxW = 'max-w-sm',
}: Props) => {
  console.log('🚀  file: ReactSelect.tsx:30  defaultValue:', defaultValue);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);
  const options2: Option[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div
      // className={`input input-bordered w-full mx-auto focus:outline-none focus:border-accent ${maxW} ${className}`}
      className={`flex-center p-0 input input-bordered w-full mx-auto focus:outline-none focus:border-accent max-w-md ${maxW}`}>
      <Select
        className='basic-single'
        // name={name}
        defaultValue={defaultValue}
        // defaultValue={{ value: 'chocolate', label: 'dsff' }}
        // defaultValue={options[0]}
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
};

{
  /* <Select
        defaultValue={selectedOption}
        onChange={() => setSelectedOption()}
        options={options}
      /> */
}
