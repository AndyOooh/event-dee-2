'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';

export const AuthCardUser = () => {
  const { currentUser } = useContext(CurrUserContext);

  return currentUser ? (
    <div className='flex gap-1'>
      <div className='avatar'>
        <div className='relative w-8 rounded-full'>
          <Image src={currentUser?.photoURL} alt='avatar' fill={true} sizes='6rem' />
        </div>
      </div>
      <div className='flex flex-col font-semibold'>
        <span className='text-xs'>{currentUser?.displayName || currentUser?.email} </span>
        <span className='text-[0.625rem] text-info'>{currentUser?.customClaims?.type}</span>
      </div>
    </div>
  ) : null;
};
