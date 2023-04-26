import Image from 'next/image';
import React from 'react';

// import profilePic from '../../../public/logo/logo-d-trans.png';
import profilePic from '../../../public/logo/logo-pink-trans.png';
// import profilePic from '/logo/logo-d-trans.png';

import { Gruppo, Barlow_Condensed } from 'next/font/google';

const gruppo = Gruppo({
  weight: ['400'],
  subsets: ['latin'],
});

// If loading a variable font, you don't need to specify the font weight
const barlowCondensed = Barlow_Condensed({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

type Props = {};

function HeaderLeft({}: Props) {
  return (
    <div className='navbar-start'>
      <div className='dropdown'>
        <label tabIndex={0} className='btn btn-ghost md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h8m-8 6h16'
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a className='justify-between'>
              Parent
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'>
                <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
              </svg>
            </a>
            <ul className='p-2'>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <a
        // className={`btn btn-ghost normal-case text-2xl font-extrabold ${barlowCondensed.className}`}>
        className={`btn btn-ghost normal-case text-3xl ${barlowCondensed.className}`}>
        Event<span className='text-emerald-600/80 font-extrabold'>Dee</span> 
        {/* <Image
          src={profilePic}
          alt='logo'
          width={70}
          height={70}
          // fill={true}
        /> */}
        {/* <Image src='/logo/logo-d-trans.png' width={50} height={50} alt='logo' /> */}
      </a>
    </div>
  );
}

export default HeaderLeft;
