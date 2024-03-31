'use client';

import { authModalState } from '../../../atoms/authModalAtom';
import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToggleView } from '.';

import { BsDot, BsReddit } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';
import { auth } from '../../../firebase/clientApp';
import { ActionCodeSettings } from 'firebase/auth';

type Props = {
  toggleView: ToggleView;
};

export const ResetPassword = ({ toggleView }: Props) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  const handleSubmitReset = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const actionCodeSettings: ActionCodeSettings = {
        url: 'http://localhost:3000', // should be set in .env and depends on the environment
        handleCodeInApp: true,
      };
      const isSent = await sendPasswordResetEmail(email, actionCodeSettings);
      setSuccess(true);
    } catch (error) {
      console.error('🚫 handleSubmitReset error: ', error);
    }
  };

  return (
    <div className='flex flex-col gap-4 items-center w-full'>
      <BsReddit size={'3rem'} />
      {success ? (
        <p>Check your email.</p>
      ) : (
        <>
          <p className='text-sm text-center'>
            Enter the email associated with your account and we will send you a reset link
          </p>
          <form onSubmit={handleSubmitReset} className='w-full flex flex-col gap-4 items-center'>
            <input
              required
              type='email'
              name='email'
              placeholder='Email'
              onChange={event => setEmail(event.target.value)}
              className='input input-bordered input-primary w-full max-w-xs'
            />
            {error ? <p className='text-xs text-red-500'>{error.message}</p> : null}
            <button className='btn' type='submit' disabled={sending}>
              Reset Password
            </button>
          </form>
          <div>
            Back to{' '}
            <button onClick={() => toggleView('login')} className='underline'>
              Login
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ResetPassword;
