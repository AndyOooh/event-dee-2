import React from 'react';
import { ProfileCard } from './profileCard/ProfileCard';
import { TopMembers } from './topMembers/TopMembers';

export const HomeRight = () => {
  return (
    <div className='w-1/3 flex flex-col gap-8 p-5'>
      <ProfileCard />
      <TopMembers />
    </div>
  );
};
