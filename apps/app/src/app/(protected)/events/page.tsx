import { getCloudFunction } from '__firebase/clientApp';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default async function Events({}: Props) {
  console.log('in EVnts!#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
  const fetchDocsByQuery = getCloudFunction('fetchDocsByQuery');
  const events = await fetchDocsByQuery('events');
  console.log('🚀  file: page.tsx:25  events:', events);
  return (
    <div className='flex flex-col gap-4 w-full'>
      <h1 className='text-3xl'>Upcoming Events</h1>
      {/* <div>{events[0].description} </div> */}
      <div className='flex flex-col'></div>
      <div className='btn'>
        <Link href='/events/create'>Create New Event</Link>
      </div>
    </div>
  );
}
