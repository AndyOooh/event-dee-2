import { styles } from '__styles/styles';
import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { AuthCard } from './AuthCard';

type Props = {
  children: React.ReactNode
};

export const PageWithAuthCard = ({ children }: Props) => {
  return (
    <div className='bg-base-300 w-full p-8'>
      <div className='flex justify-between mb-8'>
        <BiMenu size='2.5rem' className='lg:invisible' />
        <AuthCard />
      </div>
      <div className={`${styles.innerWidth} flex gap-4`}>{children}</div>
    </div>
  );
};
