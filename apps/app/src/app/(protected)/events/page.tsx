import 'server-only';

import { getCloudFunction } from '__firebase/clientApp';
import Link from 'next/link';
import { EventsLala } from './Events';

type Props = {};

export default async function Events({}: Props) {
  const fetchDocs = getCloudFunction('fetchDocs');
  const { data } = await fetchDocs({ collectionName: 'events' });

  return (
    <div className='flex flex-col gap-4 w-full'>
      <h1 className='text-3xl'>Upcoming Events</h1>
      <div className='flex flex-col'></div>
      <div className='btn'>
        <Link href='/events/create'>Create New Event</Link>
      </div>
      <EventsLala events={data as any[]} />
    </div>
  );
}
