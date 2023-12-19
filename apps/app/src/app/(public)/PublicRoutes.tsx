'use client';

import { LoaderSpinner } from '__components/ui/LoaderSpinner';
import { auth, db } from '__firebase/clientApp';
import { fetchUser } from '__firebase/utilities';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useAuthState, useDeleteUser } from 'react-firebase-hooks/auth';
import { useDocument } from 'react-firebase-hooks/firestore';

export const PublicRoutes = ({ children }: { children: React.ReactNode }) => {
  const [user, loading, error] = useAuthState(auth);
  // const [loadingDoc, setLoadingDoc] = useState(false);
  // const [userDoc, loadingDoc, errorDoc] = useDocument(doc(db, 'users', user?.uid), {});
  const router = useRouter();
  const [deleteUser, loadingDelete, errorDelete] = useDeleteUser(auth);


  // useEffect(() => {
  //   if (userDoc) {
  //     console.log('user detected..........');
  //     setCurrentUser(userDoc.data());
  //   }
  // }, [userDoc]);

  useEffect(() => {
    // setLoadingDoc(true);
    const fetchData = async () => {
      const { currentUser } = await fetchUser(user?.uid);
      // setLoadingDoc(false);
      console.log('🚀  file: PublicRoutes.tsx:32  currentUser:', currentUser);
      if (currentUser?.basic_info_done && !loading) {
        console.log('REDIRECTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIING');
        router.push('/');
      } else {
        await deleteUser();
        // delete auth user and give messaage that they dont exist
        console.log('User does not exist');


      }
    };

    if (user) {
      fetchData(); // Call the async function
    }
  }, [user]);

  return loading || user ? <LoaderSpinner /> : <div>{children}</div>;
  // return loading || user ? <h1>Heloooooooo</h1> : <div>{children}</div>;
  // return loading || currentUser?.basic_info_done ? <LoaderSpinner /> : <div>{children}</div>;
  // return loading ? <LoaderSpinner /> : <div>{children}</div>;
};
