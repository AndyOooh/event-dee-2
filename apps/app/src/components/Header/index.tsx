import React from 'react';
import Headercenter from './Headercenter';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

function Header() {
  return (
    <header className='bg-green-600/40'>
      <nav className='navbar bg-base-100 w-11/12 mx-auto px-2'>
        <HeaderLeft />
        <Headercenter />
        <HeaderRight />
      </nav>
    </header>
  );
}

export default Header;
