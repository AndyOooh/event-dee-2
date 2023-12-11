'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import LoginLeft from './left/LoginLeft';
import LoginRight from './LoginRight';
import { auth } from '../../../../firebase/clientApp';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoaderSpinner } from '../../../../components/ui/LoaderSpinner';
import { DividedPage } from '../components/DividedPage';

type Props = {};

function Login({}: Props) {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      console.log('user: ', user);
      router.push('/');
    }
  }, [user]);

  return loading || user ? (
    <LoaderSpinner />
  ) : (
    <>
      <DividedPage
        left={<LoginLeft />}
        right={<LoginRight />}
        leftColor='secondary'
        // rightText='Welcome back!'
      />
    </>
  );
}

export default Login;
