'use client';

import { auth } from '__firebase/clientApp';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Image from 'next/image';
import { Badge } from '__components/Badge';
import { BiLocationPlus } from 'react-icons/bi';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { ProfileCompletedDetails } from './ProfileCompletedDetails';

type Props = {};

export const ProfileCard = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='flex-center flex-col gap-3 rounded-3xl bg-base-100 p-4'>
      {/* Avatar */}
      <div className='avatar'>
        <div className='w-32'>
          <Image
            src={user.photoURL}
            alt='avatar'
            fill={true}
            sizes='500'
            className='rounded-3xl'
          />
        </div>
      </div>
      {/* get user from firestor and display first + last */}
      <p className='text-xl font-bold'>{user.displayName}</p>
      <Badge />
      <div className='flex-center'>
        {' '}
        <BiLocationPlus /> Bangkok, Thailand
      </div>
      {/* <Socials />  */}
      <div className='flex-center'>
        <AiOutlineInstagram size={'2rem'} />
        <AiOutlineFacebook size={'2rem'} />
      </div>
      <ProfileCompletedDetails />
      {/* This buttion has too much custom. Cant use base-300 for button is a problem */}
      <button className='btn border-none bg-base-300 text-neutral font-bold w-full'>
        Complete profile
      </button>
    </div>
  );
};
