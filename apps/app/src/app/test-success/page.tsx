'use client';

import { auth } from '__firebase/clientApp';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

type Props = {};

function TestSuccess({}: Props) {
  const [user, loading, error] = useAuthState(auth);
  // const [_loading, _setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // _setLoading(true);
    const fetchToken = async () => {
      const token = await user?.getIdTokenResult();
      console.log('🚀  file: PublicRoutes.tsx:19  token:', token);
      // !loading && !token?.claims.basic_info_done ? router.push('/test') : _setLoading(false);
      !loading && !token?.claims.basic_info_done && router.push('/test');
    };

    fetchToken();
  }, [user, router, loading]);

  const onLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log('🚀  file: page.tsx:13  error:', error);
    }
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      SUccessfully user
      <button className='btn' onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}

export default TestSuccess;
