'use client';

import { ModalView } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import Image from 'next/image';
import facebookLogo from 'public/images/facebooklogo.png';
import googleLogo from 'public/images/googlelogo.png';
import { MouseEvent, MouseEventHandler, useEffect } from 'react';
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
  useAuthState,
} from 'react-firebase-hooks/auth';

type Providers = 'google' | 'facebook';

type Props = {
  // setSelected?: (provider: Providers) => void;
  setSelected?: any;
  selected?: Providers | 'email';
};

function OAuthButtons({ selected, setSelected }: Props) {
  console.log('🚀  file: OAuthButtons.tsx:24  selected:', selected)
  const [signInWithGoogle, _userG, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook, _userFb, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);

  const onClick = (provider: Providers) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('🚀  file: OAuthButtons.tsx:28  provider:', provider);
    setSelected('provider', provider)
    // setSelected
    //   ? // ? setSelected({ provider: provider })
    //     setSelected('provider', provider)
    //   : provider === 'google'
    //   ? signInWithGoogle()
    //   : signInWithFacebook();
  };

  return (
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
      {errorGoogle && <p>{errorGoogle.message}</p>}
      {errorFacebook && <p>{errorFacebook.message}</p>}
    </div>
  );
}

export default OAuthButtons;
