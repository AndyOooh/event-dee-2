import Link from 'next/link';

export const SwitchToLogin = () => {
  return (
    <div className='flex gap-2 w-fit mx-auto'>
      Have an account?
      <Link href={'/login'} className='font-bold' onClick={() => console.log('login')}>
        Log In
      </Link>
    </div>
  );
};
