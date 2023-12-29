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
      const token = await user?.getIdTokenResult(true);
      console.log('🚀  file: PublicRoutes.tsx:19  token:', token);
      !loading && token?.claims.basic_info_done && router.push('/');
    };

    fetchToken();
  }, [user, router, loading]);

  // useEffect(() => {
  //   console.log('🚀  file: PublicRoutes.tsx:11  user:', user);
  //   const fetchTokenWithDelay = async () => {
  //     // Add a delay of 1 second before fetching the token
  //     setTimeout(async () => {
  //       if (!user) return;
  //       console.log('🚀  file: PublicRoutes.tsx:33  user:', user);
  //       const token = await user?.getIdTokenResult(true);
  //       console.log('🚀  file: PublicRoutes.tsx:19  token:', token);
  //       !loading && token?.claims.basic_info_done && router.push('/');
  //     }, 1000); // Delay for 1 second (adjust as needed)
  //   };

  //   if (!user) return;

  //   fetchTokenWithDelay();
  // }, [user, router, loading]);

  return loading ? <LoaderSpinner /> : <div>{children}</div>;
};
