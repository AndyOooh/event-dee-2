'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { LoaderSpinner } from '../../components/ui/LoaderSpinner';

export const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [loading, user]);

  return loading || !user ? <LoaderSpinner /> : <div>{children}</div>;
};