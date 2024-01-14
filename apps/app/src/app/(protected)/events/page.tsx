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
      <Link href={'/events/create'} className='btn'>
        Create New Event
      </Link>
      <div className='w-full flex flex-col items-center justify-center gap-6'>
        <EventsLala events={data as any[]} />
      </div>
    </div>
  );
}
