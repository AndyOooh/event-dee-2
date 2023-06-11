// Use the client directive for using usePathname hook.
'use client';

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Sidebar from '__components/Sidebar/Sidebar';
import { LoaderSpinner } from '__components/ui/LoaderSpinner';
import { auth } from '__firebase/clientApp';
import { PageWithAuthCard } from '__components/PageWithAuthCard';

type Props = {
  privatePage: React.ReactNode;
  publicPage: React.ReactNode;
};

// Check if logged in and show page based on that, similar to facebook!

export const ComboSidebarLayoutProvider = ({ privatePage, publicPage }: Props) => {
  const [user, loading, error] = useAuthState(auth);

  return loading ? (
    <LoaderSpinner />
  ) : user ? (
    // Most of this is copy/paste from (protected)/page.tsx and layout.tsx.
    // Create a component?
    <div className='flex'>
      <Sidebar />
      <PageWithAuthCard>{privatePage}</PageWithAuthCard>
    </div>
  ) : (
    <>{publicPage}</>
  );
};
