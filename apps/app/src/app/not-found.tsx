import type { Metadata } from 'next';
import Link from 'next/link';
import { ColoredDiv } from 'ui';

export const metadata: Metadata = {
  title: '404 - Not Found',
};

export default function NotFound() {
  return (
    <div className='flex-center min-h-screen w-full bg-base-300 absolute z-10 top-0'>
      <div className='flex flex-col gap-6 items-center justify-center'>
        <h2 className='text-4xl'>404 Not Found</h2>
        <p className='text-xl'>We are sorry but the requested page could not be found.</p>
        <Link href='/' className='btn btn-neutral'>
          Return Home
        </Link>
      </div>
      <ColoredDiv
        color='pink'
        direction='top'
        height={12}
        width={28}
        rotateZ={45}
        className='absolute z-20 right-[5%] top-1/4'
      />
      <ColoredDiv
        color='blue'
        direction='bottom'
        height={15}
        width={15}
        className='absolute z-20 left-12 top-[20%] rounded-full'
      />
      <ColoredDiv
        color='purple'
        direction='bottom'
        height={10}
        width={16}
        className='absolute z-20 bottom-1/4 left-1/4'
      />
      <ColoredDiv
        color='orange'
        direction='top'
        height={32}
        width={10}
        rotateZ={15}
        className='absolute z-20 bottom-8 right-1/4'
      />
    </div>
  );
}
