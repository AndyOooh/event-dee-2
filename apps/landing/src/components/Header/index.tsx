import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import NavBar from './NavBar';
import { containerHeader } from '../../styles/styles';

type Props = {};

function index({}: Props) {
  return (
    <header className='bg-base-300 fixed z-50 top-0 left-0 w-full'>
      <nav className={`navbar px-0 gap-4 font-semibold ${containerHeader}`}>
        <HeaderLeft />
        <NavBar />
        <HeaderRight />
      </nav>
    </header>
  );
}

export default index;
