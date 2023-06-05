// 'use client';

import { AuthCard } from '../../components/AuthCard';
import { HomeMain } from './components/HomeMain/HomeMain';
import { HomeRight } from './components/HomeRight/HomeRight';
import { BiMenu } from 'react-icons/bi';

export default function Home() {
  return (
    <div className='w-full p-4'>
      {/* Extreact this into component taking children? BiMenu should set visibility of sideBar further up, how? */}
      <div className='flex justify-between mb-8'>
        <BiMenu size='2.5rem' className='lg:invisible' />
        <AuthCard />
      </div>
      {/* This should prob go into styles.ts file */}
      {/* <div className='border border-info'> */}
      <div className='flex gap-4 p-8 max-w-7xl mx-auto'>
        <HomeMain />
        <HomeRight />
      </div>
    </div>
  );
}
