'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import combi_mint from '/public/logo/combi/combi_mint.png';

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
  leftColor?: string;
};

// some issues with leftColor - doesnt render every time

export const DividedPage = ({ left, right, leftColor }: Props) => {
  return (
    <div className='flex h-screen w-full'>
      <div className={`w-1/2 p-4 bg-${leftColor}/50 overflow-hidden`}>
        <Link href={'/'} className='p-4'>
          <Image src={combi_mint} alt='logo' width={800} height={800} className='w-40' />
        </Link>
        <div className='relative flex-center flex-col h-full'>{left}</div>
      </div>
      <div className='relative flex-center w-1/2 p-4 bg-base-300'>


        {right}
      </div>
    </div>
  );
};
