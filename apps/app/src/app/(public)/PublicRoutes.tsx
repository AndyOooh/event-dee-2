'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LoaderSpinner } from '__components/ui/LoaderSpinner';
import { auth } from '__firebase/clientApp';
// force workflow test 3

export const PublicRoutes = ({ children }: { children: React.ReactNode }) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await user?.getIdTokenResult(true);
      !loading && token?.claims.basic_info_done && router.push('/');
    };

    fetchToken();
  }, [user, router, loading]);

  return loading ? <LoaderSpinner /> : <div>{children}</div>;
};
