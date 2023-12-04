'use client';

import { auth, db } from '__firebase/clientApp';
import { doc } from 'firebase/firestore';
import { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocument } from 'react-firebase-hooks/firestore';

type CurrentUserContextType = {
  currentUser: any;
  updateCurrentUser: () => void;
  loading?: boolean;
  error?: any;
};

const initCurrentUserContext: CurrentUserContextType = {
  currentUser: null,
  updateCurrentUser: () => {},
};

export const CurrUserContext = createContext<CurrentUserContextType>(initCurrentUserContext);

export const CurrentUserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, loadingState, errorState] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userDoc, loadingDoc, errorDoc] = useDocument(doc(db, 'users', user?.uid), {});

  // ---------------------------------- New ----------------------------------

  useEffect(() => {
    if (userDoc) {
      console.log('user detected..........');
      setCurrentUser(userDoc.data());
    }
  }, [userDoc]);

  // Just for logging
  useEffect(() => {
    if (loadingState) {
      console.log('Fetching user from AuthState..........');
    }
    if (loadingDoc) {
      console.log('Fetching user from Firestore..........');
    }
  }, [loadingState, loadingDoc]);

  /* Alternative not using firestore hooks. Function not finished */
  // const fetchCurrentUser = async (userId: string) => {
  //   const userDocRef = doc(db, 'users', userId as string);
  //   console.log('🚀  file: PrivateRoutesContextProvider.tsx:45  userDoc:', userDocRef);
  //   // setCurrentUser(userDoc.converter.fromFirestore());
  // };

  const updateCurrentUser = useCallback(() => {}, []);
  const loading = loadingState && loadingDoc;
  const error = errorState || errorDoc;

  // const testContext = useMemo(
  const testContext: CurrentUserContextType = useMemo(
    () => ({
      currentUser,
      updateCurrentUser,
      loading,
      error,
    }),
    [currentUser, updateCurrentUser, loading, error]
  );
  return <CurrUserContext.Provider value={testContext}>{children}</CurrUserContext.Provider>;
};
