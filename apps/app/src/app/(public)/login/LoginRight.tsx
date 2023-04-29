import React from 'react';
import { LoginForm } from './LoginForm';

type Props = {};

function LoginRight({}: Props) {
  return (
    <div className='flex-center w-1/2 p-4 bg-secondary'>
      <div className='w-3/4 flex flex-col gap-8'>
        <h1 className='text-7xl font-semibold '>Welcome back!</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginRight;
