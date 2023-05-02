import React from 'react';
import { OnChange } from './SignupMemberRight';
import { ActionButton } from '../../components/ActionButton';
import { FormError, TextInput } from 'ui';

type Props = {
  handleChange: OnChange;
  onClick: () => void;
  formError?: string;
};

export const Step2 = ({ handleChange, onClick, formError }: Props) => {
  return (
    <>
      <div className='flex flex-col items-center gap-2 w-full'>
        <TextInput
          name='name or nickname'
          handleChange={handleChange}
          // label='Name or Nickname'
          tooltip='Real name looks more professional and could result in more job opportunitues.'
        />
        <TextInput
          name='last name'
          handleChange={handleChange}
          // label='Last Name'
          tooltip='This is only for official use and will not be public.'
        />
      </div>
      <FormError formError={formError} />
      <ActionButton text='Step 3' onClick={onClick} />
      <div className='flex gap-2 w-fit mx-auto'>
        Have an account?
        <button className='font-bold' onClick={() => console.log('login')}>
          Log In
        </button>
      </div>
    </>
  );
};
