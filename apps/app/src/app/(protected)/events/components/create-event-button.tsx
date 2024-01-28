'use client';

import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import Link from 'next/link';
import React, { useContext } from 'react';

export const CreateEventButton = () => {
  const { currentUser } = useContext(CurrUserContext);
  return currentUser?.customClaims.type === 'business' ? (
    <Link href={'/events/create'} className='btn btn-neutral'>
      Create Event
    </Link>
  ) : null;
};
