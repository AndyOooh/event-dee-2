import React from 'react';
import { ProfileCard } from './profileCard/ProfileCard';
import { TopMembers } from './topMembers/TopMembers';

type Props = {};

export const HomeRight = (props: Props) => {
  return (
    // <div className='w-1/3 bg-orange-200/20 hidden xl:flex flex-col gap-8'>
    <div className='w-1/3 flex flex-col gap-8 p-5'>
      <ProfileCard />
      <TopMembers />

    </div>
  );
};
