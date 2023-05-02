import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import combi_mint from '/public/logo/combi/combi_mint.png';

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
  leftColor?: string;
  rightText?: string;
  rightContentWidth?: string;
  paginationText?: string;
};

// some issues with leftColor - doesnt render every time

export const DividedPage = ({
  left,
  right,
  leftColor,
  rightText,
  rightContentWidth = '3/4',
  paginationText, // could chnage this to a jsx element: step from daisyui
}: Props) => {
  return (
    // <div className='flex h-screen w-full'>
    <div className='flex w-full'>
      {/* <div className={`w-1/2 p-4 bg-${leftColor}/40 overflow-hidden`}> */}
      <div className={`w-1/2 p-4 bg-${leftColor}/50 overflow-hidden`}> 
        {/* sometijg weird going on with styling this link */}
        <Link href={'/'} className='p-4'>
          <Image src={combi_mint} alt='logo' width={800} height={800} className='w-40' />
        </Link>
        <div className='relative flex-center flex-col h-full'>{left}</div>
      </div>
      <div className='relative flex-center w-1/2 p-4 bg-base-300'>
          <p className='absolute top-5 left-5 font-extrabold'>{paginationText}</p>
          <div className={`w-${rightContentWidth} flex flex-col gap-8`}>
            {rightText ? (
              <>
                <h1 className='text-6xl font-semibold'>{rightText}</h1>
                {right}
              </>
            ) : null}
          </div>
      </div>
    </div>
  );
};
