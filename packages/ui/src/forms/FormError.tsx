import React from 'react';
import { FIREBASE_ERRORS } from '../utils/firebaseErrors';

import { MdErrorOutline } from 'react-icons/md';
import { RiErrorWarningLine } from 'react-icons/ri';

type Props = {
  formError?: string;
  authError?: any;
};

export const FormError = ({ formError, authError }: Props) => {
  return formError || authError ? (
    // <p className='text-xs text-red-500 px-2'>
    <p className='text-xs text-error px-2'>
      {formError || FIREBASE_ERRORS[authError?.message as keyof typeof FIREBASE_ERRORS]}
    </p>
    // <div className='alert alert-error shadow-lg p-2 text-xs'>
    //   <div>
    //     <RiErrorWarningLine />
    //     <span>
    //       {formError || FIREBASE_ERRORS[authError?.message as keyof typeof FIREBASE_ERRORS]}
    //     </span>
    //   </div>
    // </div>
  ) : null;
};
