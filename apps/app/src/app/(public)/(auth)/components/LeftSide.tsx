import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import combi_mint from '/public/logo/combi/combi_mint.png';

type Props = {
  children: React.ReactNode;
  color?: string;
};

export const LeftSide = ({ children, color }: Props) => {
  return (
    <div className={`w-1/2 p-4 bg-${color} overflow-hidden`}>
      <Link href={'/'} className='p-4'>
        <Image src={combi_mint} alt='logo' width={800} height={800} className='w-40' />
      </Link>
      <div className='relative flex-center flex-col h-full'>{children}</div>
    </div>
  );
};
