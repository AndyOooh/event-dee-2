import React from 'react';
import Headercenter from './Headercenter';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

type Props = {};

function Header({}: Props) {
  return (
    <header className='bg-primary'>
      <nav className='navbar bg-base-100 w-11/12 mx-auto px-2'>
        <HeaderLeft />
        <Headercenter />
        <HeaderRight />
      </nav>
    </header>
  );
}

export default Header;
