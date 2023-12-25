'use client';

import { auth } from '../../../firebase/clientApp';
import Image from 'next/image';
import facebookLogo from '/public/images/facebooklogo.png';
import googleLogo from '/public/images/googlelogo.png';
import { MouseEvent, useState } from 'react';
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
  useAuthState,
} from 'react-firebase-hooks/auth';
import { FormError } from 'ui';
import { UserCredential, signOut } from 'firebase/auth';

export type Providers = 'google' | 'facebook';

type Props = {
  // setSelected?: (provider: Providers) => void;
  setSelected?: any;
  selected?: Providers | 'email';
  isSignUp?: boolean;
};

export const OAuthButtons = ({ selected, setSelected, isSignUp = false }: Props) => {
  const [authUser, authLoading, authError] = useAuthState(auth);
  const [signInWithGoogle, _userG, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook, _userFb, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
  const [error, setError] = useState(null);

  const onClick = (provider: Providers) => async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      console.log('🚀  file: OAuthButtons.tsx:28  provider:', provider);

      // const cusParams: CustomParameters = {
      //   tlalallallay: 'UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU',
      // };

      // const scopes = ['email', 'profile', 'testtttttttttttttttttttttttttttttttttttttttt'];
      // const creds: UserCredential =
      //   provider === 'google' ? await signInWithGoogle([], cusParams) : await signInWithFacebook();
      // console.log('🚀  file: OAuthButtons.tsx:49  creds:', creds);

      const creds: UserCredential =
        // provider === 'google' ? await signInWithGoogle([], cusParams) : await signInWithFacebook();
        provider === 'google' ? await signInWithGoogle() : await signInWithFacebook();
      console.log('🚀  file: OAuthButtons.tsx:49  creds:', creds);

      const token = await creds.user.getIdTokenResult(true);
      console.log('🚀  file: OAuthButtons.tsx:51  token:', token);

      // const token = await authUser?.getIdTokenResult(true);
      // console.log('🚀  file: OAuthButtons.tsx:53  token:', token);

      // const checkEmailExists = getCloudFunction('checkEmailExists'); // Our custom function
      // const emailExists = (await checkEmailExists(creds.user.email)).data;
      if (isSignUp && token?.claims.basic_info_done) {
        console.log('😒😒😒😒😒😒😒😒😒😒😒');
        /* race condition with PublicRoutes. Can't get this error message to ui as we redirect to / and then to /login */
        // await signOut(auth);
        setError({ message: 'Email already exists' });
        return;
      } else if (!isSignUp && !token?.claims.basic_info_done) {
        /* this works work */
        console.log('❤️❤️❤️❤️❤️❤️❤️❤️');
        setError({ message: 'Email does not exist' });
        return;
      }

      setSelected && setSelected('provider', provider);
    } catch (error) {
      console.log('🚀  file: OAuthButtons.tsx:75  error:', error);
    }
  };

  if (errorGoogle) console.log('🚀  file: OAuthButtons.tsx:55  errorGoogle:', errorGoogle);

  return (
    <div className='w-full flex-center flex-col gap-4'>
      <div className='w-full flex-center gap-4'>
        {selected !== 'google' && (
          <button
            type='button'
            className='btn btn-sm btn-circle relative border-none bg-transparent hover:bg-transparent hover:scale-110'
            onClick={onClick('facebook')}>
            <Image src={facebookLogo} alt='facebook' fill={true} sizes='3rem' />
          </button>
        )}
        {selected !== 'facebook' && (
          <button
            type='button'
            className='btn btn-sm btn-circle relative border-none bg-transparent hover:bg-transparent hover:scale-110'
            // onClick={() => onClick('google')}
            onClick={onClick('google')}>
            <Image src={googleLogo} alt='google' fill={true} sizes='3rem' />
          </button>
        )}
      </div>
      {errorGoogle && <FormError formError={errorGoogle.message} />}
      {errorFacebook && <FormError formError={errorFacebook.message} />}
      {error && <FormError formError={error.message} />}
    </div>
  );
};
