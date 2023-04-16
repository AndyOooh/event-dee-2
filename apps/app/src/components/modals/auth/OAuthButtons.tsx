'use client';

import { ModalView } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import Image from 'next/image';
import facebookLogo from 'public/images/facebooklogo.png';
import googleLogo from 'public/images/googlelogo.png';
import { useSignInWithGoogle, useSignInWithFacebook } from 'react-firebase-hooks/auth';

type OAuthButtonsProps = {
  view: ModalView;
};

function OAuthButtons({ view }: OAuthButtonsProps) {
  const [signInWithGoogle, _userG, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook, _userFb, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);

  return (
    <div className='w-full flex flex-col gap-4'>
      <button className='btn btn-primary' onClick={() => signInWithGoogle()}>
        <div className='flex gap-2 justify-center items-center'>
          <Image src={googleLogo} alt='google' width={20} height={20} />
          {view === 'login' ? 'Log in' : 'Sign up'} with Google
        </div>
      </button>
      <button className='btn btn-primary' onClick={() => signInWithFacebook()}>
        <div className='flex gap-2 justify-center items-center'>
          <Image src={facebookLogo} alt='google' width={20} height={20} />
          {view === 'login' ? 'Log in' : 'Sign up'} with Facebook
        </div>
      </button>
      {errorGoogle && <p>{errorGoogle.message}</p>}
      {errorFacebook && <p>{errorFacebook.message}</p>}
    </div>
  );
}

export default OAuthButtons;
