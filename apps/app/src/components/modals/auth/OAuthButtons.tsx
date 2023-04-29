'use client';

import { ModalView } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import Image from 'next/image';
import facebookLogo from 'public/images/facebooklogo.png';
import googleLogo from 'public/images/googlelogo.png';
import { useEffect } from 'react';
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
  useAuthState,
} from 'react-firebase-hooks/auth';

type OAuthButtonsProps = {
  view: ModalView;
};

function OAuthButtons({ view }: OAuthButtonsProps) {
  const [signInWithGoogle, _userG, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook, _userFb, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);

  const [user, loading, error] = useAuthState(auth);

  const handFbLogin = () => {
    console.log('user before: ', user);
    try {
      signInWithFacebook();
      console.log('user after: ', user);
    } catch (error) {
      console.log('🚀  file: OAuthButtons.tsx:32  error:', error);
    }
  };

  useEffect(() => {
    console.log('user: ', user);
    if (error) {
      console.log('error: ', error);
    }
  }, [user, error]);

  return (
    <div className='w-full flex-center gap-4 mb-4'>
      <button
        className='btn btn-sm btn-circle relative border-none bg-transparent hover:bg-transparent hover:scale-110'
        onClick={() => signInWithFacebook()}>
        {/* onClick={handFbLogin}> */}
        <Image src={facebookLogo} alt='facebook' fill={true} sizes='3rem' />
      </button>
      <button
        className='btn btn-sm btn-circle relative border-none bg-transparent hover:bg-transparent hover:scale-110'
        onClick={() => signInWithGoogle()}>
        <Image src={googleLogo} alt='google' fill={true} sizes='3rem' />
      </button>
      {errorGoogle && <p>{errorGoogle.message}</p>}
      {errorFacebook && <p>{errorFacebook.message}</p>}
    </div>
  );
}

export default OAuthButtons;
