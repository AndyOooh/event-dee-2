import React from 'react';
import { OnChange } from './SignupMemberRight';
import { ActionButton } from '../../components/ActionButton';
import { CheckLegal } from '../../components/CheckLegal';
import { FormError } from 'ui';
import { ImageUpload } from './ImageUpload';

type Props = {
  // handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: OnChange;
  formError?: string;
  authError?: any;
  loading: boolean;
  imageUploadProps;
};

// NB: authError and loading are nor neccessary anymore, as request isn only sent on page2
// NB 2: handlesumbit shouod be refactored inot hanldesubmitpage1 and handlesubmitpage2 or similar, where subitpage2 gablds the request

export const Step3 = ({ handleChange, formError, authError, loading, imageUploadProps }: Props) => {
  return (
    <>
      <div className='flex flex-col items-center gap-2 w-full'>
        <ImageUpload {...imageUploadProps} />
      </div>
      <CheckLegal handleChange={handleChange} />
      <FormError formError={formError} authError={authError} />
      <ActionButton loading={loading} text='Sign up' />
      {/* <div className='flex gap-2 w-fit mx-auto'>
        Have an account?
        <button className='font-bold' onClick={() => console.log('login')}>
          Log In
        </button>
      </div> */}
    </>
  );
};
