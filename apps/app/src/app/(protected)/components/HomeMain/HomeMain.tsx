import React from 'react';
import { Stats } from './stats/Stats';
import { ReferralAd } from './referralAd/ReferralAd';

type Props = {};

export const HomeMain = (props: Props) => {
  return (
    // <div className='flex-1 bg-green-200/20'>
    <div className='flex-1 flex flex-col gap-8 p-5'>
      <Stats />
      <ReferralAd />
    </div>
  );
};
