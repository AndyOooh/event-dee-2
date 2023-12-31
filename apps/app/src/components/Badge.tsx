'use client';

import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { useContext } from 'react';
import { BiStar } from 'react-icons/bi';

export const Badge = () => {
  const { currentUser } = useContext(CurrUserContext);

  return (
    // <div className='flex gap-2 justify-between rounded-3xl bg-secondary/40 border-2 border-secondary p-2 px-4 w-32'>
    <div className='flex gap-2 justify-between rounded-3xl bg-secondary/40 border-2 border-secondary p-2 px-4'>
      <p className='text-secondary-content text-sm'>{currentUser.profession}</p>
      <p className='flex-center text-secondary-content text-sm'>
        <BiStar /> {currentUser.rating || 4.1}
      </p>
    </div>
  );
};
