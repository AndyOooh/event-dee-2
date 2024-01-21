'use client';

import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthCardUser } from './AuthCardUser';
import { MdArrowDropDown } from 'react-icons/md';
import { BsBellFill, BsFillChatFill } from 'react-icons/bs';
import { auth } from '../../firebase/clientApp';
import { useSignOut } from 'react-firebase-hooks/auth';
import { BiLogOut, BiUser, BiUserCheck, BiCog } from 'react-icons/bi';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';

// TODO: Error and loading state

export const AuthCard = () => {
  const { currentUser } = useContext(CurrUserContext);
  const [signOut, loading_signout, error_signout] = useSignOut(auth);
  const router = useRouter();
  // const [deleteUser, loading_delete, error_delete] = useDeleteUser(auth);

  const onSignOut = async () => {
    const succes = await signOut();
    if (succes) router.push('/');
  };

  // const onDeleteUser = async (password?: string) => {
  //   router.push('/settings');
  // };

  const menuData = [
    {
      type: 'link',
      label: 'My Profile',
      href: `/freelancers/${currentUser?.displayName}`,
      icon: <BiUser size='1.5rem' color='black' />,
    },
    {
      type: 'link',
      label: 'Edit Profile',
      href: '/profile',
      icon: <BiUserCheck size='1.5rem' color='black' />,
    },
    {
      type: 'link',
      label: 'Account settings',
      href: '/settings',
      icon: <BiCog size='1.5rem' color='black' />,
    },
    {
      type: 'button',
      label: 'Log out',
      onClick: async () => await onSignOut(),
      icon: <BiLogOut size='1.5rem' color='black' />,
    },
    // {
    //   type: 'button',
    //   label: 'Delete Account',
    //   onClick: async () => await onDeleteUser(),
    //   icon: <BiEraser size='1.5rem' color='black' />,
    // },
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
          </div>
        </div>
      </div>
    </div>
  );
};
