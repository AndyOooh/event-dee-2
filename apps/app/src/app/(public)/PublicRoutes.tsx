'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LoaderSpinner } from '__components/ui/LoaderSpinner';
import { auth } from '__firebase/clientApp';

export const PublicRoutes = ({ children }: { children: React.ReactNode }) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await user?.getIdTokenResult();
      console.log('🚀  file: PublicRoutes.tsx:19  token:', token);
      !loading && token?.claims.basic_info_done && router.push('/');
    };

    fetchToken();
  }, [user, router, loading]);

  return loading || !user ? <LoaderSpinner /> : <div>{children}</div>;
};
