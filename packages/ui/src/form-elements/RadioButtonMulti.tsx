"use client";

import { startCase } from "lodash";
import { useState } from "react";
import { Controller } from "react-hook-form";

type Props = {
  // control: Control;
  control: any;
  name: string;
  reg_name: string;
  options: string[];
};

/* Default checked is options[0] */
export const RadioButtonMulti = ({ control, name, reg_name, options }: Props) => {
  const title = startCase(name);

  const [checked, setChecked] = useState<string>(options[0]);

  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <label className='label flex-col'>
        {title}
        <div className='flex-col'>
          {options.map((option, index) => (
            <div key={option} className='form-control'>
              <label className='label gap-2 cursor-pointer'>
                <Controller
                  name={reg_name}
                  control={control}
                  defaultValue={option}
                  render={({ field }) => (
                    <input
                      type='radio'
                      onClick={() => setChecked(option)}
                      {...field}
                      value={option}
                      className='radio-xs checked:bg-red-500'
                      checked={checked === option}
                    />
                  )}
                />
                <span className='label-text w-full'>{option}</span>
              </label>
            </div>
          ))}
        </div>
      </label>
    </div>
  );
};
