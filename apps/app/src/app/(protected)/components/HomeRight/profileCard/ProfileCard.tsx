'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import { Badge } from '__components/Badge';
import { BiLocationPlus } from 'react-icons/bi';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { CurrUserContext } from '../../Providers/CurrentUserProvider';
import { ProfileStatusList } from './ProfileStatusList';

export const ProfileCard = () => {
  const { currentUser } = useContext(CurrUserContext);
  const cardHeight = 'h-[56.125rem]';

  return currentUser ? (
    <div className={`${cardHeight} flex-center flex-col gap-3 rounded-3xl bg-base-100 p-4`}>
      <div className='avatar'>
        <div className='w-32 relative'>
          <Image
            src={currentUser.photoURL}
            alt='avatar'
            fill={true}
            sizes='500'
            className='rounded-3xl'
            priority={true}
          />
        </div>
      </div>
      <p className='text-xl font-bold'>{currentUser?.displayName}</p>
      <Badge />
      <div className='flex-center'>
        {' '}
        <BiLocationPlus /> {`${currentUser?.province}, Thailand`}
      </div>
      <div className='flex-center'>
        <AiOutlineInstagram size={'2rem'} />
        <AiOutlineFacebook size={'2rem'} />
      </div>
      <ProfileStatusList />
      <button className='btn border-none bg-base-300 text-neutral font-bold w-full'>
        Complete profile
      </button>
    </div>
  ) : (
    <div className={`${cardHeight} skeleton w-full`}></div>
  );
};
