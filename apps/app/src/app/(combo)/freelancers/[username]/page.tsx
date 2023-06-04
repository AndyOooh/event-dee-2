'use client';

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase/clientApp';
import { LoaderSpinner } from '../../../../components/ui/LoaderSpinner';
import { AuthFreelancerProfile } from './components/AuthFreelancerProfile';
import { PublicFreelancerProfile } from './components/PublicFreelancerProfile';

type Props = {};

// Check if logged in and show page based on that similar to fb!

export default function FreelancerProfile(props: Props) {
  const [user, loading, error] = useAuthState(auth);

  return loading ? (
    <LoaderSpinner />
  ) : user ? (
    <AuthFreelancerProfile />
  ) : (
    <PublicFreelancerProfile />
  );
}
