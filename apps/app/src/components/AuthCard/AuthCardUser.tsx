import React from 'react';

import chomPortait from '../../../public/talent/chom_white_12_17.jpg';
import Image from 'next/image';

type Props = {};

export const AuthCardUser = (props: Props) => {
  return (
    <div className='flex gap-1'>
      <div className='avatar'>
        <div className='relative w-8 rounded-full'>
          <Image src={chomPortait.src} alt='avatar' fill={true} sizes='6rem' />
        </div>
      </div>
      <div className='flex flex-col '>
        <span className='font-semibold text-xs'>Chompuu</span>
        <span className='text-[0.5rem]'>Model</span>
      </div>
    </div>
  );
};
