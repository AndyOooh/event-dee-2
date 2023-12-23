'use client';

import { ModalView } from '../../../atoms/authModalAtom';
import { auth, getCloudFunction } from '../../../firebase/clientApp';
import Image from 'next/image';
import facebookLogo from '/public/images/facebooklogo.png';
import googleLogo from '/public/images/googlelogo.png';
import { MouseEvent, MouseEventHandler, useEffect } from 'react';
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
  useAuthState,
} from 'react-firebase-hooks/auth';
import { is } from 'date-fns/locale';
import { FormError } from 'ui';
import { AuthCredential, AuthError, CustomParameters, UserCredential } from 'firebase/auth';
import { signInWithCredential } from 'firebase/auth';

export type Providers = 'google' | 'facebook';

type Props = {
  // setSelected?: (provider: Providers) => void;
  setSelected?: any;
  selected?: Providers | 'email';
};

export const OAuthButtons = ({ selected, setSelected }: Props) => {
  // const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, _userG, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook, _userFb, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);

  // const lala: AuthError = {
  //   code: 'auth/invalid-email',
  //   message: 'The email address is badly formatted.',
  // };

  // useEffect(() => {
  //   if (user) {
  //     console.log('🚀  file: OAuthButtons.tsx:38  user:', user);
  //     setSelected && setSelected('provider', provider);
  //   }
  // }, [user]);

  const onClick = (provider: Providers) => async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      console.log('🚀  file: OAuthButtons.tsx:28  provider:', provider);

      const cusParams: CustomParameters = {
        tlalallallay: 'UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU',
      };

      // const scopes = ['email', 'profile', 'testtttttttttttttttttttttttttttttttttttttttt'];
      // const creds: UserCredential =
      //   provider === 'google' ? await signInWithGoogle([], cusParams) : await signInWithFacebook();
      // console.log('🚀  file: OAuthButtons.tsx:49  creds:', creds);

      const creds: UserCredential =
        provider === 'google' ? await signInWithGoogle([], cusParams) : await signInWithFacebook();
      setSelected && setSelected('provider', provider);
      // setSelected('oAuthCreds', { ...creds });

      // const authCreds: AuthCredential = creds.providerId;

      // await signInWithCredential(auth, authCreds);
    } catch (error) {
      console.log('🚀  file: OAuthButtons.tsx:51  error:', error.message);
      console.log('🚀  file: OAuthButtons.tsx:51  error:', error);
      console.log('Error google: ', errorGoogle);
    }
  };

  // const onClick = (provider: Providers) => (e: MouseEvent<HTMLButtonElement>) => {
  //   try {
  //     e.preventDefault();
  //     console.log('🚀  file: OAuthButtons.tsx:28  provider:', provider);

  //     // setSelected('provider', provider);
  //     setSelected
  //       ? // ? setSelected({ provider: provider })
  //         setSelected('provider', provider)
  //       : provider === 'google'
  //       ? signInWithGoogle()
  //       : signInWithFacebook();
  //   } catch (error) {
  //     console.log('🚀  file: OAuthButtons.tsx:51  error:', error.message);
  //     console.log('🚀  file: OAuthButtons.tsx:51  error:', error);
  //     console.log('Error google: ', errorGoogle);
  //   }
  // };

  if (errorGoogle) console.log('🚀  file: OAuthButtons.tsx:55  errorGoogle:', errorGoogle);
  // if (errorGoogle) console.log('🚀  file: OAuthButtons.tsx:40  errorGoogle:', errorGoogle.);
  if (errorGoogle) console.log('🚀  file: OAuthButtons.tsx:57  message:', errorGoogle.message);
  if (errorGoogle) console.log('🚀  file: OAuthButtons.tsx:58  code:', errorGoogle.code);
  if (errorGoogle)
    console.log('🚀  file: OAuthButtons.tsx:60  customData:', errorGoogle.customData);

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
      {/* <FormError formError={errors?.[info.title]?.message} /> */}
      {errorGoogle && <FormError formError={errorGoogle.message} />}
      {errorFacebook && <FormError formError={errorFacebook.message} />}
      {/* {errorGoogle && <p>{errorGoogle.message}</p>} */}
      {/* {errorFacebook && <p>{errorFacebook.message}</p>} */}
    </div>
  );
};
