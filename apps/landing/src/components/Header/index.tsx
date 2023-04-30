import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import NavBar from './NavBar';
import { container } from '../../styles/styles';

type Props = {};

function index({}: Props) {
  return (
    <header className='bg-base-200 fixed z-50 top-0 left-0 w-full'>
      <nav className={`navbar w-5/6 mx-auto px-0 font-semibold ${container}`} >
        <HeaderLeft />
        <NavBar />
        <HeaderRight />
      </nav>
    </header>
  );
}

export default index;
