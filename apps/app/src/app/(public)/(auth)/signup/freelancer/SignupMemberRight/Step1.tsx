import React from 'react';
import { OnChange } from './SignupMemberRight';
import { ActionButton } from '../../components/ActionButton';
import { FormError, TextInput } from 'ui';

type Props = {
  handleChange: OnChange;
  onClick: () => void;
  formError?: string;
};

export const Step1 = ({ handleChange, onClick, formError }: Props) => {
  return (
    <>
      <div className='flex flex-col items-center gap-4 w-full'>
        <TextInput type='email' handleChange={handleChange} />
        <TextInput type='password' autoComplete='new-password' handleChange={handleChange} />
        <TextInput
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          autoComplete='new-password'
          handleChange={handleChange}
        />
      </div>
      {/* <CheckLegal handleChange={handleChange} /> */}
      <FormError formError={formError} />
      <ActionButton text='Step 2' onClick={onClick} />
      <div className='flex gap-2 w-fit mx-auto'>
        Have an account?
        <button className='font-bold' onClick={() => console.log('login')}>
          Log In
        </button>
      </div>
    </>
  );
};
