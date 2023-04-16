'use client';

import { authModalState, ModalView } from '../../atoms/authModalAtom';
import { auth } from '../../firebase/clientApp';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import AuthModal from '../modals/auth';
import Usermenu from './Usermenu';

type Props = {};

function HeaderRight({}: Props) {
  const [modalState, setModalState] = useRecoilState(authModalState);
  console.log('🚀  file: HeaderRight.tsx:12  modalState:', modalState);
  const [user, loading, error] = useAuthState(auth);

  const handleClick = (view: ModalView) => {
    console.log('handleClick!!!!');
    setModalState({
      open: true,
      view: view,
    });
  };

  return (
    <>
      <AuthModal />
      {user ? (
        <Usermenu />
        // <Menu />
      ) : (
        <div className='flex gap-2 navbar-end'>
          <button className='btn btn-outline' onClick={() => handleClick('login')}>
            Log In
          </button>
          <button className='btn' onClick={() => handleClick('signup')}>
            Sign Up
          </button>
        </div>
      )}
    </>
  );
}

export default HeaderRight;
