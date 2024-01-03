import { getCloudFunction } from '__firebase/clientApp';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default async function Events({}: Props) {
  console.log('in EVnts!#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');

  const checkEmailExists = getCloudFunction('checkEmailExists');
  const emExi = await checkEmailExists('oo@oo.oo');
  console.log('🚀  file: page.tsx:12  emExi:', emExi);

  const checkEmailExists2 = getCloudFunction('checkEmailExists2');
  const emExi2 = await checkEmailExists2('oo@oo.oo');
  console.log('🚀  file: page.tsx:12  emExi:', emExi);

  // const fetchDocs2 = getCloudFunction('fetchDocs2');
  // const eve = await fetchDocs2('sadasdasdds');
  // console.log('🚀  file: page.tsx:16  eve:', eve)

  // const fetchDocs = getCloudFunction('fetchDocs');
  // console.log('🚀  file: page.tsx:15  fetchDocs:', fetchDocs);
  // const events = await fetchDocs('events');
  // console.log('🚀  file: page.tsx:25  events:', events);

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
