'use client';

import React from 'react';
import { Stats } from './stats/Stats';
import { ReferralAd } from './referralAd/ReferralAd';
import { createDocument } from '__firebase/utilities';

export const HomeMain = () => {
  const submitHandler = async () => {
    try {
      console.log('submitHandler');
      await createDocument('emul-test', { id: 123, test: 'it works' });
    } catch (error) {
      console.log('🚀  file: HomeMain.tsx:17  error:', error);
    }
  };

  return (
    <div className='flex-1 flex flex-col gap-8 p-5'>
      <Stats />
      <ReferralAd />

      {process.env.NEXT_PUBLIC_EMULATORS_ON === 'true' && (
        <button className='btn' onClick={submitHandler}>
          Test Emulator
        </button>
      )}
    </div>
  );
};
