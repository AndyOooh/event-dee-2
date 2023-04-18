'use client';

import Link from 'next/link';

type Props = {};

function HeaderRight({}: Props) {
  return (
    <>
      <div className='flex gap-2 navbar-end'>
        <Link role='button' href={'signup/business'} className='btn btn-sm rounded-3xl normal-case'>
          Hire Talent
        </Link>
      </div>
    </>
  );
}

export default HeaderRight;
