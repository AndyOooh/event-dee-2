// Use the client directive for using usePathname hook.
'use client';

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '__firebase/clientApp';
import { PageWithAuthCard } from '__components/PageWithAuthCard';
import { CurrentUserProvider } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { LoaderSpinner } from '__components/ui/LoaderSpinner';

type Props = {
  privatePage: React.ReactNode;
  publicPage: React.ReactNode;
  sideBar: React.ReactNode;
};

// Check if logged in and show page based on that, similar to facebook!

export const ComboSidebarLayoutProvider = ({ privatePage, publicPage, sideBar }: Props) => {
  const [user, loading, error] = useAuthState(auth);

  return loading ? (
    <LoaderSpinner />
  ) : user ? (
    // Most of this is copy/paste from (protected)/page.tsx and layout.tsx.
    // Create a component?
    <section className="flex">
      <CurrentUserProvider>
        {sideBar}
        <PageWithAuthCard>{privatePage}</PageWithAuthCard>
      </CurrentUserProvider>
    </section>
  ) : (
    <>{publicPage}</>
  );
};
