'use client';

// https://codesandbox.io/s/searchable-dropdown-forked-9nt7n9?file=/src/SearchableDropdown.js:0-1920

import { useEffect, useRef, useState, ChangeEvent } from 'react';
import { toTitleCase } from '../utils/helpers';

type Props = {
  name: string;
  register: any;
  defaultValue?: string;
  label?: boolean;
  tooltip?: string;
  className: string;
  options: string[];
  value?: string;
  maxW?: string;
  id: string;
  selectedVal: string;
  handleChange: (val: string | null) => void;
};

export const SearchableSelect2 = ({
  name,
  value,
  label = false,
  tooltip,
  options,
  defaultValue,
  register,
  className,
  maxW = 'max-w-sm',
  id,
  selectedVal,
  handleChange,
}: Props) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  console.log('🚀  file: SearchableSelect2.tsx:24  isOpen:', isOpen);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    document.addEventListener('click', toggle as EventListener);
    return () => document.removeEventListener('click', toggle as EventListener);
  }, []);

  const selectOption = (option: string) => {
    setQuery('');
    handleChange(option);
    setIsOpen(isOpen => !isOpen);
  };

  const toggle = (e: any) => {
    setIsOpen(e.target === inputRef.current);
  };

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal;
    return '';
  };

  const filter = (options: string[]) => {
    return options.filter(option => option.toLowerCase().indexOf(query.toLowerCase()) > -1);
  };

  const _value = value || name;
  const _label = toTitleCase(_value);

  let Select = (
    <>
      <div className='dropdown w-full mx-auto'>
        <input
          ref={inputRef}
          type='text'
          value={getDisplayValue()}
          name='searchTerm'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
            handleChange(null);
          }}
          onClick={toggle}
          defaultValue={defaultValue}
          className={`input input-bordered w-full mx-auto focus:outline-none focus:border-accent ${maxW} ${className}`}
        />
        <div className={`arrow ${isOpen ? 'open' : ''}`}></div>

        <select
          {...register(name)}
          className={`${
            isOpen ? 'open' : ''
          } select select-bordered w-full mx-auto font-normal focus:outline-none focus:border-accent ${maxW} ${className}`}>
          {/* <option disabled selected>
          {defaultValue}
        </option> */}
          {/* <option className=''>
          <input
            ref={inputRef}
            type='text'
            value={getDisplayValue()}
            name='searchTerm'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setQuery(e.target.value);
              handleChange(null);
            }}
            onClick={toggle}
            defaultValue={defaultValue}
            className={`input input-bordered w-full mx-auto focus:outline-none focus:border-accent ${maxW} ${className}`}
          />
        </option> */}
          {filter(options).map(option => (
            <option key={option} onClick={() => selectOption(option)} className='font-normal'>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* <div className={`options ${isOpen ? 'open' : ''}`}>
        {filter(options).map((option: string, index: number) => (
          <div
          key={option}
          onClick={() => selectOption(option)}
          className={`option ${option === selectedVal ? 'selected' : ''}`}>
          {isOpen && option}
          </div>
          ))}
        </div> */}
      {/* </div> */}
    </>
  );

  if (tooltip) {
    Select = (
      <div className='tooltip tooltip-info tooltip-left w-full text-xs' data-tip={tooltip}>
        {Select}
      </div>
    );
  }

  if (label) {
    Select = (
      <>
        <label className='label w-full flex flex-col'>
          <span className='label-text self-start mb-3'>{_label}</span>
          {Select}
        </label>
      </>
    );
  }

  return Select;
};
