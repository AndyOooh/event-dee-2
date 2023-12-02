'use client';

import React, { useContext } from 'react';

import chomPortait from '/public/talent/chom_white_12_17.jpg';
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';

type Props = {};

export const AuthCardUser = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  // const UserCtx = useContext(UserContext);
  // console.log('🚀  file: AuthCardUser.tsx:16  profCtx:', UserCtx);

  return (
    <div className='flex gap-1'>
      <div className='avatar'>
        <div className='relative w-8 rounded-full'>
          {/* <Image src={chomPortait.src} alt='avatar' fill={true} sizes='6rem' /> */}
          {/* <div className='absolute inset-0 rounded-full overflow-hidden bg-orange-400'>
            <Image src={chomPortait.src} alt='avatar' fill={true} />
          </div> */}
          <Image src={user?.photoURL || chomPortait.src} alt='avatar' fill={true} sizes='6rem' />
        </div>
      </div>
      <div className='flex flex-col font-semibold'>
        <span className='text-xs'>{user?.displayName || user?.email} </span>
        <span className='text-[0.625rem] text-info'>Model</span>
      </div>
    </div>
  );
};
