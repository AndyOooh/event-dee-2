'use client';

import { auth, db } from '__firebase/clientApp';
import { doc, collection, query, where } from 'firebase/firestore';
import { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  useCollection,
  useCollectionData,
  useDocument,
  useDocumentData,
} from 'react-firebase-hooks/firestore';
import { usePathname, useParams, useRouter } from 'next/navigation';

type UserContextType = {
  user: any;
  updateUser: () => void;
  loading?: boolean;
  error?: any;
};

const initUserContext: UserContextType = {
  user: null,
  updateUser: () => {},
};

export const UserContext = createContext<UserContextType>(initUserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // const [user, loadingState, errorState] = useAuthState(auth);
  const [_user, setUser] = useState<any>(null);
  const displayName = useParams().username;

  /* experimental */
  const [userDoc, loadingDoc, errorDoc] = useCollectionData(
    query(collection(db, 'users'), where('displayName', '==', displayName))
  );
  console.log('🚀  file: UserProvider.tsx:39  userDoc:', userDoc);

  // const [userDoc, loadingDoc, errorDoc] = useDocument(doc(db, 'users', user?.uid), {});
  // console.log('🚀  file: UserProvider.tsx:37  userDoc:', userDoc)

  // const userDocRef = doc(db, 'users.displayName', user?.uid);
  // const [userDoc, loadingDoc, errorDoc] = useDocumentData(doc(db, 'users', user?.uid), {});
  // console.log('🚀  file: UserProvider.tsx:37  userDoc:', userDoc)

  // ---------------------------------- New ----------------------------------

  useEffect(() => {
    if (userDoc) {
      console.log('user detected..........');
      setUser(userDoc[0]);
    }
  }, [userDoc]);

  // Just for logging
  // useEffect(() => {
  //   if (loadingState) {
  //     console.log('Fetching user from AuthState..........');
  //   }
  //   if (loadingDoc) {
  //     console.log('Fetching user from Firestore..........');
  //   }
  // }, [loadingState, loadingDoc]);

  /* Alternative not using firestore hooks. Function not finished */
  // const fetchUser = async (userId: string) => {
  //   const userDocRef = doc(db, 'users', userId as string);
  //   console.log('🚀  file: PrivateRoutesContextProvider.tsx:45  userDoc:', userDocRef);
  //   // setUser(userDoc.converter.fromFirestore());
  // };

  const updateUser = useCallback(() => {}, []);
  // const loading = loadingState && loadingDoc;
  // const error = errorState || errorDoc;
  const loading = loadingDoc;
  const error = errorDoc;

  // const testContext = useMemo(
  const testContext: UserContextType = useMemo(
    () => ({
      user: _user,
      updateUser,
      loading,
      error,
    }),
    [_user, updateUser, loading, error]
  );
  return <UserContext.Provider value={testContext}>{children}</UserContext.Provider>;
};
