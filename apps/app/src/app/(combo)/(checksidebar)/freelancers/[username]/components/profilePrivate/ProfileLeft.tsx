import React from 'react';
import { ProfileCard } from './ProfileCard';
import { ColoredDiv } from 'ui';

type Props = {};

export const ProfileLeft = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 w-1/3 relative -top-28 p-4'>
      <ProfileCard />
      {/* <ColoredDiv color='orange' direction='right' height={6} className='z-10' /> */}
    </div>
  );
};
