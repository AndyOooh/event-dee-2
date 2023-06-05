import React from 'react';
import { ColoredDiv } from 'ui';
import { ProfileLeft } from './ProfileLeft';
import { ProfileRight } from './ProfileRight';

type Props = {};

export const ProfilePageFreelancerPrivate = (props: Props) => {
  return (
    <div className='w-full'>
      <div className='relative mx-auto'>
        <ColoredDiv color='green' direction='right' height={10.5} className='z-10 -top-10' />
      </div>
      <div className='flex gap-8 static'>
        <ProfileLeft />
        <ProfileRight />
      </div>
    </div>
  );
};

// AuthFreelancerProfile
