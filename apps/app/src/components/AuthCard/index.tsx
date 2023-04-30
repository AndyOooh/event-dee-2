'use client';

import React from 'react';
import { AuthCardUser } from './AuthCardUser';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';
import { BsBellFill, BsFillChatFill } from 'react-icons/bs';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/clientApp';

export const AuthCard = () => {
  return (
    <div className='flex-center gap-2 bg-white p-2 rounded-[1rem] w-fit'>
      <div className='flex-center gap-4'>
        <div className='flex-center bg-black rounded-lg w-8 h-8 p-1'>
          <BsBellFill color='white' />
        </div>
        <div className='flex-center bg-black rounded-lg w-8 h-8 p-1'>
          <BsFillChatFill color='white' />
        </div>
      </div>
      <div className='divider divider-horizontal m-0 p-0'></div>
      <AuthCardUser />

      <div className='dropdown dropdown-end'>
        <label tabIndex={0} className='btn btn-circle btn-ghost btn-xs text-info'>
          <MdArrowDropDown size='1.5rem' color='black' />
        </label>
        <div
          tabIndex={0}
          className='card compact dropdown-content shadow bg-base-100 rounded-box w-64 mt-4'>
          <div className='card-body'>
            <button onClick={() => signOut(auth)}>Log out</button>
            <p>Here is a description!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
