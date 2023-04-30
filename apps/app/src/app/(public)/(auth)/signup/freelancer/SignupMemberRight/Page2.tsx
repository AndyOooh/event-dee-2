import React from 'react';
import { HandleChange } from './SignupMemberRight';
import { FIREBASE_ERRORS } from '../../../../../../firebase/errors';
import { ActionButton } from '../../components/ActionButton';
import { CheckLegal } from '../../components/CheckLegal';
import { FormError, TextInput } from 'ui';

type Props = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: HandleChange;
  formError?: string;
  authError?: any;
  loading: boolean;
};

// NB: authError and loading are nor neccessary anymore, as request isn only sent on page2
// NB 2: handlesumbit shouod be refactored inot hanldesubmitpage1 and handlesubmitpage2 or similar, where subitpage2 gablds the request

export const Page2 = ({ handleSubmit, handleChange, formError, authError, loading }: Props) => {
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full max-w-xs mx-auto'>
      {/* <form> */}
      <div className='flex flex-col items-center gap-4 w-full'>
        <TextInput name='nickname' handleChange={handleChange} />
        <TextInput name='last-name' handleChange={handleChange} />
        <label className='label flex flex-col'>
          {/* <div className='flex flex-col'> */}
          <span className='label-text'>Choose a profile photo</span>
          <input
            type='file'
            className='file-input file-input-bordered file-input-sm w-full max-w-xs'
          />
          {/* </div> */}
        </label>
      </div>
      <CheckLegal handleChange={handleChange} />
      <FormError formError={formError} authError={authError} />
      <ActionButton loading={loading} />
      <div className='flex gap-2 w-fit mx-auto'>
        Have an account?
        <button className='font-bold' onClick={() => console.log('login')}>
          Log In
        </button>
      </div>
    </form>
  );
};
