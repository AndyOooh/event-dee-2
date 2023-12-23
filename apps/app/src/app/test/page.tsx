'use client';

import { auth } from '__firebase/clientApp';
import React, { MouseEvent } from 'react';
import { useAuthState, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

type Props = {};

function Test() {
  const [signInWithGoogle, _userG, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [updateProfile, loadingUpdate, errorUpdate] = useUpdateProfile(auth);
  const [user, loading, error] = useAuthState(auth);
  console.log('🚀  file: page.tsx:12  user:', user);
  console.log('🚀  file: page.tsx:9  _userG:', _userG);

  const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      const succes = await signInWithGoogle();
      console.log('🚀  file: page.tsx:12  user:', user);
      console.log('🚀  file: page.tsx:14  succes:', succes);
    } catch (error) {
      console.log('🚀  file: page.tsx:13  error:', error);
    }
  };

  const onClick2 = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      const succes = await updateProfile({
        displayName: 'LQQQQQQQQQQQQQQQQQQQQQQQQPPL',
      });
      console.log('🚀  file: page.tsx:12  user:', user);
    } catch (error) {
      console.log('🚀  file: page.tsx:13  error:', error);
    }
  };

  return (
    <div className='w-full h-48 flex flex-col justify-center items-center gap-10'>
      <h1>Testing Oauth and auth object</h1>
      <div>
        <button onClick={onClick} className='btn'>
          G Sign in/up
        </button>
      </div>
      <div>
        <button onClick={onClick2} className='btn'>
          Update user
        </button>
      </div>
    </div>
  );
}

export default Test;
