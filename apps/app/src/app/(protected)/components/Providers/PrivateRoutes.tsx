'use client';

import { LoaderSpinner } from '__components/ui/LoaderSpinner';
import { auth } from '__firebase/clientApp';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await user?.getIdTokenResult(true);
      console.log('🚀  PrivateRoutes, token:', token);
      !loading && !token?.claims.basic_info_done && router.push('/login');
    };

    fetchToken();
  }, [user, router, loading]);

  return loading || !user ? <LoaderSpinner /> : <div>{children}</div>;
};
