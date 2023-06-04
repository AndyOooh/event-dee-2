import React from 'react';
import { OnChange } from './SignupMemberRight';
import { ActionButton } from '../../components/ActionButton';
import { FormError, TextInputHRF } from 'ui';
import OAuthButtons from '../../../../../../components/modals/auth/OAuthButtons';
import { CheckLegal } from '../../components/CheckLegal';

type Props = {
  handleChange: OnChange;
  onClick: () => void;
  formError?: string;
  onSelectProvider: (provider: 'google' | 'facebook' | 'email') => void;
  selectedProvider: 'google' | 'facebook' | 'email';
};

export const Step1 = ({
  handleChange,
  onClick,
  formError,
  onSelectProvider,
  selectedProvider,
}: Props) => {
  return (
    <>
      {selectedProvider === 'email' ? (
        <>
          <div className='flex flex-col items-center gap-4 w-full'>
            <TextInputHRF type='email' handleChange={handleChange} />
            <TextInputHRF type='password' autoComplete='new-password' handleChange={handleChange} />
            <TextInputHRF
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              autoComplete='new-password'
              handleChange={handleChange}
            />
          </div>
          <CheckLegal handleChange={handleChange} />
          <FormError formError={formError} />
          <div className='divider'>Or sign up with</div>
          <OAuthButtons onClick={onSelectProvider} selected={selectedProvider} />
          <div className='flex gap-2 w-fit mx-auto'>
            Have an account?
            <button className='font-bold' onClick={() => console.log('login')}>
              Log In
            </button>
          </div>
        </>
      ) : (
        <>
          {/* <p className=''>Signing up with {selectedProvider} account</p> */}
          <p className=''>Signing up with</p>
          <OAuthButtons onClick={onSelectProvider} selected={selectedProvider} />
          <CheckLegal handleChange={handleChange} />
          <FormError formError={formError} />
        </>
      )}
      <ActionButton text='Step 2' onClick={onClick} />
    </>
  );
};
