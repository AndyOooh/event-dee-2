'use client';

import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { LoaderSpinner } from '__components/ui/LoaderSpinner';
import { auth } from '__firebase/clientApp';

export const PublicRoutes = ({ children }: { children: React.ReactNode }) => {
  const [user, loading, error] = useAuthState(auth);
  const { currentUser } = useContext(CurrUserContext);
  const router = useRouter();
  console.log('🚀  file: PublicRoutes.tsx:16  currentUser:', currentUser);

  useEffect(() => {
    if (currentUser?.basic_info_done && !loading) {
      router.push('/');
    }
  }, [user, currentUser, loading, router]);

  return loading ? <LoaderSpinner /> : <div>{children}</div>;
};
