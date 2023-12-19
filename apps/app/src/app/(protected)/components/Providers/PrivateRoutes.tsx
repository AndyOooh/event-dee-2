'use client';

import { LoaderSpinner } from '__components/ui/LoaderSpinner';
import { auth } from '__firebase/clientApp';
import loading from 'app/loading';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CurrUserContext } from './CurrentUserProvider';
import { fetchUser } from '__firebase/utilities';

// export const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
//   // const [user, loading, error] = useAuthState(auth);
//   const { currentUser } = useContext(CurrUserContext);
//   console.log('🚀  file: PrivateRoutes.tsx:14  currentUser:', currentUser)
//   const router = useRouter();

//   useEffect(() => {
//     if (!currentUser?.basic_info_done && !loading) {
//       router.push('/login');
//     }
//   }, [loading, currentUser]);

//   return loading || !currentUser ? <LoaderSpinner /> : <div>{children}</div>;
// };


export const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  const [user, loading, error] = useAuthState(auth);
  console.log('🚀  file: PrivateRoutes.tsx:29  user:', user)
  const router = useRouter();

  useEffect(() => {
  const fetchData = async () => {
    const { currentUser } = await fetchUser(user?.uid);
    console.log('🚀  file: PublicRoutes.tsx:32  currentUser:', currentUser);
    if (!currentUser?.basic_info_done && !loading) {
      console.log('REDIRECTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIING');
      router.push('/login');
      // router.push('/');
    }
  };

  if (user) {
    fetchData(); // Call the async function
  }
}, [user]);

  // useEffect(() => {
  //   if (!user && !loading) {
  //     router.push('/login');
  //   }
  // }, [loading, user]);

  return loading || !user ? <LoaderSpinner /> : <div>{children}</div>;
};


