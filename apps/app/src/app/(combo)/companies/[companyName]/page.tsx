'use client';

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase/clientApp';
import { LoaderSpinner } from '../../../../components/ui/LoaderSpinner';
import { PublicCompanyProfile } from './components/PublicCompanyProfile';
import { AuthCompanyProfile } from './components/AuthCompanyProfile';

type Props = {};

// Check if logged in and show page based on that similar to fb!

export default function CompanyProfile(props: Props) {
  const [user, loading, error] = useAuthState(auth);

  return loading ? <LoaderSpinner /> : user ? <AuthCompanyProfile /> : <PublicCompanyProfile />;
}
