'use client';

import React, { useEffect, useState } from 'react';
import { SignupMemberLeft } from './SignupMemberLeft';
import { SignupMemberRight } from './SignupMemberRight/SignupMemberRight';
import { LoaderSpinner } from '../../../../../components/ui/LoaderSpinner';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../../firebase/clientApp';
import { DividedPage } from '../../../../../components/DividedPage';

type Props = {};

function Signup({}: Props) {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const [page, setPage] = useState(1);

  const rightText = page === 1 ? 'Become a member' : 'Create your profile';

  useEffect(() => {
    if (user) {
      console.log('user: ', user);
      router.push('/');
    }
  }, [user]);

  return loading || user ? (
    <LoaderSpinner />
  ) : (
    <>
      <DividedPage
        left={<SignupMemberLeft />}
        right={<SignupMemberRight page={page} setPage={setPage} />}
        leftColor='secondary'
        rightText={rightText}
        paginationText={`Sign up ${page}/2`}
      />
    </>
  );
}

export default Signup;
