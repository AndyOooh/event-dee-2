'use client';

import React from 'react';
import { AuthCardUser } from './AuthCardUser';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';
import { BsBellFill, BsFillChatFill } from 'react-icons/bs';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/clientApp';
import { useDeleteUser, useSignOut } from 'react-firebase-hooks/auth';
import {
  BiLogOut,
  BiEraser,
  BiUser,
  BiUserPlus,
  BiUserX,
  BiUserCheck,
  BiUserCircle,
  BiCog,
} from 'react-icons/bi';

// TODO: Error and loading state

export const AuthCard = () => {
  const [signOut, loading_signout, error_signout] = useSignOut(auth);
  const [deleteUser, loading_delete, error_delete] = useDeleteUser(auth);
  console.log('🚀  file: index.tsx:17  error_delete:', error_delete);

  const onSignOut = async () => {
    const succes = await signOut();
    console.log('🚀  file: index.tsx:20  succes:', succes);
  };
  const onDeleteUser = async () => {
    const succes = await deleteUser();
    console.log('🚀  file: index.tsx:24  succes:', succes);
  };

  const menuData = [
    {
      type: 'link',
      label: 'My Profile',
      href: '/freelancers/dasdas',
      icon: <BiUser size='1.5rem' color='black' />,
    },
    {
      type: 'link',
      label: 'Edit Profile',
      href: '/profile',
      icon: <BiUserCheck size='1.5rem' color='black' />,
      // icon: <BiUserPlus size='1.5rem' color='black' />,
    },
    {
      type: 'link',
      label: 'Account settings',
      href: '/account/settings',
      icon: <BiCog size='1.5rem' color='black' />,
      // icon: <BiUserPlus size='1.5rem' color='black' />,
    },
    {
      type: 'button',
      label: 'Log out',
      onClick: async () => await onSignOut(),
      icon: <BiLogOut size='1.5rem' color='black' />,
    },
    {
      type: 'button',
      label: 'Delete Account',
      onClick: async () => await onDeleteUser(),
      icon: <BiEraser size='1.5rem' color='black' />,
    },
  ];

  return (
    <div className='flex-center gap-2 bg-white p-4 rounded-[1rem] w-fit'>
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
            {menuData.map((item, index) => {
              return item.type === 'link' ? (
                <a
                  key={item.label}
                  href={item.href}
                  className='flex gap-2 items-center p-2 rounded-md hover:bg-base-200'>
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className='flex gap-2 items-center p-2 rounded-md hover:bg-base-200'>
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* <button onClick={async () => await onSignOut()}>Log out</button>
             <button onClick={async () => await onDeleteUser()}>Delete Account</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
