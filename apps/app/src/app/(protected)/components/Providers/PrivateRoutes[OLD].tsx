'use client';

import { LoaderSpinner } from '__components/ui/LoaderSpinner';
import { auth } from '__firebase/clientApp';
import loading from 'app/loading';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CurrUserContext } from './CurrentUserProvider';
import { fetchUser } from '__firebase/utilities';

export const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  const [user, loading, error] = useAuthState(auth);
  console.log('🚀  file: PrivateRoutes.tsx:14  user:', user);
  // const { currentUser } = useContext(CurrUserContext);
  const router = useRouter();

  

  // useEffect(() => {
  //   console.log('🚀  file: PrivateRoutes.tsx:15  currentUser:', currentUser);
  //   if (currentUser && !currentUser?.basic_info_done && !loading) {
  //     router.push('/login');
  //   }
  // }, [user, currentUser, loading, router]);

  useEffect(() => {
    const fetchData = async () => {
      const { currentUser } = await fetchUser(user?.uid);
      console.log('🚀  file: PublicRoutes.tsx:32  currentUser:', currentUser);
      if ((!currentUser?.basic_info_done || !user) && !loading) {
        console.log('REDIRECTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIING');
        router.push('/login');
        // router.push('/');
      }
    };
    
    if (user) {
      fetchData(); // Call the async function
    } else if (!loading) {
      console.log('REDIRECTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIING 22');
      router.push('/login');
    }
  }, [user]);

  // useEffect(() => {
  //   if (!user && !loading) {
  //     router.push('/login');
  //   }
  // }, [loading, user]);

  // return loading ? <LoaderSpinner /> : <div>{children}</div>;
  return user && !loading ? <div>{children}</div> : <LoaderSpinner />;
};
