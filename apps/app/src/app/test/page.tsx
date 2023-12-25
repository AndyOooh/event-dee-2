'use client';

import { auth, getCloudFunction } from '__firebase/clientApp';
import React, { MouseEvent, useEffect, useState } from 'react';
import { useAuthState, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';

function Test() {
  const [signInWithGoogle, _userG, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);
  const [_loading, _setLoading] = useState(true);
  const router = useRouter();

  //   auth.onAuthStateChanged(async user => {
  //     console.log('onAuthStateChanged called!!!!!!!!!');
  //     // _setLoading(true);
  //     if (user) {
  //       const token = await user.getIdTokenResult(true);
  //       console.log('🤣  onAuthStateChanged:', token);
  //       if (token.claims.basic_info_done) {
  //         router.push('/test-success');
  //       }
  //     } else {
  //       console.log('🤣  onAuthStateChanged: user is null');
  //     }
  //     // _setLoading(false);
  //   });

  useEffect(() => {
    console.log('useEffect called!!!!!!!!!');
    _setLoading(true);
    const fetchToken = async () => {
      const token = await user?.getIdTokenResult();
      console.log('🚀  file: page.tsx:11  user:', user);
      console.log('🚀  file: PublicRoutes.tsx:19  token:', token);
      token?.claims?.basic_info_done ? router.push('/test-success') : _setLoading(false);
    };

    fetchToken();
  }, [user, router]);

  //   useEffect(() => {
  //     console.log('useEffect called!!!!!!!!!');
  //   }, []);

  //   useEffect(() => {
  //     console.log('useEffect called 222222222222');
  //   }, [user]);

  const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      const succes = await signInWithGoogle();
    } catch (error) {
      console.log('🚀  file: page.tsx:13  error:', error);
    }
  };

  const onClick2 = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      const setCustomClaims = getCloudFunction('setCustomClaims'); // Our custom function
      const resSetCC = await setCustomClaims({
        uid: user?.uid,
        payload: { basic_info_done: true },
      });
      console.log('🚀  file: page.tsx:55  resSetCC:', resSetCC);
      const token = await user.getIdTokenResult(true);
      if (token.claims.basic_info_done) {
        // router.push('/test-success');
        router.push('/');
      } else {
        console.log('🚀  claims.basic_info_done fdlse:', token);
      }

      //   const lala = user.getIdToken(true);
      //   user.
    } catch (error) {
      console.log('🚀  file: page.tsx:13  error:', error);
    }
  };
  const onClick3 = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      const token = await user.getIdTokenResult(true);
      console.log('🚀  file: page.tsx:75  token:', token);
    } catch (error) {
      console.log('🚀  file: page.tsx:77  error:', error);
    }
  };

  return loading || _loading ? (
    <div>loading...</div>
  ) : (
    <div className='w-full flex flex-col justify-center items-center gap-10'>
      <h1>Testing Oauth and auth object</h1>
      {user && <h2>user displayName: {user?.displayName}</h2>}
      <div>
        <button onClick={onClick} className='btn'>
          G Sign in/up
        </button>
      </div>
      <div>
        <button onClick={onClick2} className='btn'>
          Update user
        </button>
      </div>
      <div>
        <button onClick={onClick3} className='btn'>
          Get token
        </button>
      </div>
    </div>
  );
}

export default Test;
