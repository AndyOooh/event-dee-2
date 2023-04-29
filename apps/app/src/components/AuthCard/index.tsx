import React from 'react';
import { AuthCardUser } from './AuthCardUser';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';
import { BsBellFill, BsFillChatFill } from 'react-icons/bs';

type Props = {};

export const AuthCard = (props: Props) => {
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
      <MdArrowDropDown size='1.5rem' />
    </div>
  );
};
