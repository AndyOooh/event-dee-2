'use client';

import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { AuthCard } from '../../components/AuthCard';
import { auth } from '../../firebase/clientApp';

export default function Home() {
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const onClick = async () => {
    const res = await updateProfile({ displayName: 'Tommyyyyyy' });
    console.log('🚀  file: page.tsx:12  res:', res)
  };
  return (
    <div className='w-full p-4'>
      <div className='flex justify-end'>
        <AuthCard />
      </div>
      <button className='btn' onClick={onClick}>
        Button
      </button>
    </div>
  );
}
