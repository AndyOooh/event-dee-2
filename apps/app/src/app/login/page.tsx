'use client';

import { authModalState } from '../../atoms/authModalAtom';
import React from 'react';
import { useRecoilState } from 'recoil';
import LoginLeft from './LoginLeft';
import LoginRight from './LoginRight';

type Props = {};

function Login({}: Props) {
  const [modalState, setModalState] = useRecoilState(authModalState);
  console.log('🚀  file: page.tsx:9  modalState:', modalState);

  const handleClick = () => {
    setModalState({ ...modalState, open: false });
  };

  return (
    <div className='flex flex-col lg:flex-row w-full'>
      <LoginLeft />
      <LoginRight />
      <button onClick={handleClick}>change state</button>
    </div>
  );
}

export default Login;
