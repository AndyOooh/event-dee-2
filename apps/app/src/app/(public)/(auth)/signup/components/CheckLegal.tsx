'use client';

import React from 'react';
import Link from 'next/link';

import { FormError } from 'ui';

type Props = {
  name: string;
  register: any;
  error?: string;
};

export const CheckLegal = ({ name, register, error }: Props) => {
  const CheckBoxWIthText = (
    <div className='flex-center text-[0.625rem] gap-2 w-full'>
      <input {...register(name)} type='checkbox' className='checkbox checkbox-xs bg-white' />
      <p>
        <span>By signing up you agree to the </span>
        <Link href={'terms-and-conditions'} className='link'>
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href={'privacy-policy'} className='link'>
          {' '}
          Privacy Statement
        </Link>
      </p>
    </div>
  );
  return CheckBoxWIthText;
};

// export const MyCheckLegal = React.forwardRef<HTMLInputElement, Props>(CheckLegal);
