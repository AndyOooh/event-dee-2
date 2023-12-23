'use client';

import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CurrUserContext } from './CurrentUserProvider';
import { LoaderSpinner } from '__components/ui/LoaderSpinner';
import { auth } from '__firebase/clientApp';

export const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  const [user, loading, error] = useAuthState(auth);
  const { currentUser } = useContext(CurrUserContext);
  const router = useRouter();

  useEffect(() => {
    if (currentUser && !currentUser?.basic_info_done && !loading) {
      router.push('/login');
    }
  }, [user, currentUser, loading, router]);

  return loading ? <LoaderSpinner /> : <div>{children}</div>;
};
