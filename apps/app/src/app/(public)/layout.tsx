'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { LoaderSpinner } from '../../components/ui/LoaderSpinner';

// TODO import children of PublicRoutes to avoid them being loaded in the client. Or what?

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push('/');
    }
  }, [user, loading]);

  return loading || user ? <LoaderSpinner /> : <div>{children}</div>;
}
