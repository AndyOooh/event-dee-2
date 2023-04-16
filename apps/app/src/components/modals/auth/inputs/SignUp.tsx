'use client';

import { auth } from '../../../../firebase/clientApp';
import { FIREBASE_ERRORS } from '../../../../firebase/errors';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

type Props = { toggleView: (view: string) => void };

function SignUp({ toggleView }: Props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formError, setFormError] = useState('');
  const [createUserWithEmailAndPassword, user, loading, authError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formError) setFormError('');
    // improve this validation
    if (!form.email.includes('@')) {
      return setFormError('Please enter a valid email');
    }
    if (form.password !== form.confirmPassword) {
      return setFormError('Passwords do not match');
    }
    // Valid form inputs
    createUserWithEmailAndPassword(form.email, form.password);
  };

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
      {/* <form> */}
      <div className='flex flex-col items-center gap-4 w-full'>
        <input
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
          className='input input-bordered input-primary w-full max-w-xs'
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
          className='input input-bordered input-primary w-full max-w-xs'
        />
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
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
        Sign Up
      </button>
      <div className='flex gap-2 w-fit mx-auto'>
        Have an account?
        <button className='font-bold' onClick={() => toggleView('login')}>
          Log In
        </button>
      </div>
    </form>
  );
}

export default SignUp;
