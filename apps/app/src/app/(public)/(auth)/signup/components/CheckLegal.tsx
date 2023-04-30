import Link from 'next/link';
import React from 'react';
import { HandleChange } from '../freelancer/SignupMemberRight/SignupMemberRight';

type Props = {
  handleChange: HandleChange;
};

export const CheckLegal = ({ handleChange }: Props) => {
  return (
    <div className='flex-center text-[0.625rem] gap-2 w-full'>
      <input
        type='checkbox'
        name='checkbox'
        onChange={handleChange}
        className='checkbox checkbox-xs bg-white'
      />
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
        .
      </p>
    </div>
  );
};
