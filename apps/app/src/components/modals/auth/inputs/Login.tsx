'use client';

import { auth } from '../../../../firebase/clientApp';
import { FIREBASE_ERRORS } from '../../../../firebase/errors';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

type Props = {
  toggleView: (view: string) => void;
};

function Login({ toggleView }: Props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState('');

  const [signInWithEmailAndPassword, _, loading, authError] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formError) setFormError('');
    if (!form.email.includes('@')) {
      return setFormError('Please enter a valid email');
    }

    // Valid form inputs
    signInWithEmailAndPassword(form.email, form.password);
  };

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-4 w-full'>
      {/* <form> */}
      <div className='flex flex-col items-center gap-4 w-full'>
        <input
          type='text'
          name='email'
          placeholder='email'
          onChange={handleChange}
          className='input input-bordered input-primary w-full max-w-xs'
        />

        <input
          type='password'
          name='password'
          placeholder='password'
          onChange={handleChange}
          className='input input-bordered input-primary w-full max-w-xs'
        />
      </div>
      {formError || authError ? (
        <p className='text-xs text-red-500'>
          {formError || FIREBASE_ERRORS[authError?.message as keyof typeof FIREBASE_ERRORS]}
        </p>
      ) : null}
      <button className='btn' type='submit'>
        Log in
      </button>
      <div className='flex gap-2 w-fit mx-auto text-[0.625rem]'>
        <p className=''>Forgot your password?</p>
        <button className='underline' onClick={() => toggleView('resetPassword')}>
          Reset
        </button>
      </div>
      <div className='flex gap-2 w-fit mx-auto'>
        New here?
        <button className='font-bold' onClick={() => toggleView('signup')}>
          Sign up
        </button>
      </div>
    </form>
  );
}

export default Login;
