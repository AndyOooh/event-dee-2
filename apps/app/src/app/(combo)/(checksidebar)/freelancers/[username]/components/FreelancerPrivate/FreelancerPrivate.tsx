import React from 'react';
import { ColoredDiv } from 'ui';
import { FreelancerLeft } from './FreelancerLeft/FreelancerLeft';
import { FreelancerRight } from './FreelancerRight/FreelancerRight';
import { CurrentUserProvider } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { UserProvider } from 'app/(protected)/components/Providers/UserProvider';

type Props = {};

export const FreelancerPrivate = (props: Props) => {
  return (
    // <CurrentUserProvider>
    <UserProvider>
      <div className='w-full'>
        <div className='relative mx-auto'>
          <ColoredDiv color='green' direction='right' height={10.5} className='z-10 -top-10' />
        </div>
        <div className='flex gap-8 static'>
          <FreelancerLeft />
          <FreelancerRight />
        </div>
      </div>
    </UserProvider>
    // </CurrentUserProvider>
  );
};

// AuthFreelancerProfile
