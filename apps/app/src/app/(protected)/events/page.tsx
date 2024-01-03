import Link from 'next/link';
import React from 'react';

type Props = {};

async function getData() {
  const res = await fetch('https://api.example.com/...');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Events({}: Props) {
  const data = await getData();
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
