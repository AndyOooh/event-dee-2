'use client'

import { auth } from '__firebase/clientApp';
import Image from 'next/image';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

type Props = {};

export const ProfileCard2 = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className='card h-[36rem] bg-base-100 shadow-xl'>
      <figure className=''>
        <Image
          src={user.photoURL}
          alt='avatar'
          width={1000}
          height={1000}
          // fill={true}
          sizes='300'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {user.displayName}
          <div className='badge badge-secondary'>Rating: 4.6</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Fashion</div>
          <div className='badge badge-outline'>Products</div>
        </div>
      </div>
    </div>
  );
};
