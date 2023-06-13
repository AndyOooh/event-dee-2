'use client';

import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';

type SearchableSelectProps = {
  optionsProp: string[];
};

export const SearchableSelect = ({ optionsProp }: SearchableSelectProps) => {
  const [options, setOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOptions(optionsProp);
  }, [optionsProp]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value.toLowerCase());
  };

  return (
    <div className='w-72 font-medium h-80'>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          !selected && 'text-gray-700'
        }`}>
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + '...'
            : selected
          : 'Select Country'}
        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
      </div>
      <ul className={`bg-white mt-2 overflow-y-auto ${open ? 'max-h-60' : 'max-h-0'}`}>
        <div className='flex items-center px-2 sticky top-0 bg-white'>
          <AiOutlineSearch size={18} className='text-gray-700' />
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter country name'
            className='placeholder:text-gray-700 p-2 outline-none'
          />
        </div>
        {options?.map((country: string) => (
          <li
            key={country}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${country?.toLowerCase() === selected?.toLowerCase() && 'bg-sky-600 text-white'}
            ${country?.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
            onClick={() => {
              if (country?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country);
                setOpen(false);
                setInputValue('');
              }
            }}>
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
};
