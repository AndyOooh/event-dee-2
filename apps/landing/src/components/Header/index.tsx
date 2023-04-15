import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import NavBar from './NavBar';

type Props = {};

function index({}: Props) {
  return (
    <header className='bg-primary'>
      <nav className='navbar w-11/12 mx-auto px-2'>
        <HeaderLeft />
        <NavBar />
        <HeaderRight />
      </nav>
    </header>
  );
}

export default index;
