'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { FIREBASE_ERRORS } from 'ui/src/utils/firebaseErrors';
import { OAuthButtons } from '__components/modals/auth/OAuthButtons';
import { auth } from '__firebase/clientApp';
import { styles } from '__styles/styles';

type Props = {};

export const LoginForm = (props: Props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState('');

  const [signInWithEmailAndPassword, _, loading, authError] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (formError) setFormError('');
      if (!form.email.includes('@')) {
        return setFormError('Please enter a valid email');
      }
      // Valid form inputs
      signInWithEmailAndPassword(form.email, form.password);
    } catch (error) {
      console.log('🚀  file: LoginForm.tsx:32  error:', error);
    }
  };

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    // <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-4 w-3/4 max-w-xs mx-auto'>
    <form onSubmit={handleSubmit} className={styles.formSmall}>
      {/* <form> */}
      <div className='flex flex-col items-center gap-4 w-full'>
        <input
          type='text'
          name='email'
          placeholder='email'
          onChange={handleChange}
          className='input input-bordered w-full max-w-xs focus:outline-none focus:border-accent'
        />

        <input
          type='password'
          name='password'
          autoComplete='on'
          placeholder='password'
          onChange={handleChange}
          className='input input-bordered w-full max-w-xs focus:outline-none focus:border-accent'
        />
        {formError || authError ? (
          <p className='text-xs text-red-500'>
            {formError || FIREBASE_ERRORS[authError?.message as keyof typeof FIREBASE_ERRORS]}
          </p>
        ) : null}
        <button className='btn w-full max-w-xs' type='submit'>
          Log in
        </button>
      </div>
      <div className='flex gap-2 w-fit mx-auto text-[0.625rem]'>
        <Link className='underline' href={'/reset-password'}>
          <p className=''>Forgot your password?</p>
        </Link>
      </div>
      <div className='divider'>Or login with</div>
      <OAuthButtons />

      <div className='flex flex-col items-center justify-center gap-2 w-fit mx-auto'>
        <p className='text-sm'>
          New here? <span className=' font-bold'>Sign up:</span>
        </p>
        <Link href={'/signup/business'} className='hover:scale-110'>
          as <span className='text-warning/80 font-bold underline'>Business</span>
        </Link>
        <Link href={'/signup/freelancer'} className='hover:scale-110'>
          as <span className='text-warning/80 font-bold underline'>Freelancer</span>
        </Link>
      </div>
    </form>
  );
};
