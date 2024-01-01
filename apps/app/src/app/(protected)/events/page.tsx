import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Events({}: Props) {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <h1 className='text-3xl'>Upcoming Events</h1>
      <div className='flex flex-col'></div>
      <div className='btn'>
        <Link href='/events/create'>Create New Event</Link>
      </div>
    </div>
  );
}
