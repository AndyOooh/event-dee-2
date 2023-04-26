import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import NavBar from './NavBar';

type Props = {};

function index({}: Props) {
  return (
    <header className='bg-primary fixed z-10 top-0 left-0 w-full'>
      <nav className='navbar w-5/6 mx-auto px-2 font-semibold'>
        <HeaderLeft />
        <NavBar />
        <HeaderRight />
      </nav>
    </header>
  );
}

export default index;
