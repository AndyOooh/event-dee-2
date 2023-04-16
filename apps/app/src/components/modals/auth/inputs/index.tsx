'use client';

import { authModalState } from '../../../../atoms/authModalAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { ToggleView } from '..';
import Login from './Login';
import SignUp from './SignUp';

type Props = {
  toggleView: ToggleView;
};

function AuthInputs({ toggleView }: Props) {
  const modalState = useRecoilValue(authModalState);
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      {modalState.view === 'login' ? (
        <Login toggleView={toggleView} />
      ) : (
        <SignUp toggleView={toggleView} />
      )}
    </div>
  );
}

export default AuthInputs;
