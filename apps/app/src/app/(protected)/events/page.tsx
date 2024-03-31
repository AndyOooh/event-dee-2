import 'server-only';

import { getCloudFunction } from '__firebase/clientApp';
import { Events as EventComp } from './components/Events';
import { CreateEventButton } from './components/create-event-button';
import { cache } from 'react';
import { FetchDocsWithQueryParams } from 'event-dee-types';

export const revalidate = 3600; // revalidate the data at most every hour

const getEvents = cache(async () => {
  const fetchDocsWithQuery = getCloudFunction<FetchDocsWithQueryParams>('fetchDocsWithQuery');
  const data = await fetchDocsWithQuery({
    collectionName: 'events',
    orderBy: {
      field: 'createdAt',
      direction: 'desc',
    },
  });
  return data;
});

export default async function Events() {
  const events = await getEvents();

  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex justify-between'>
        <h1 className='text-3xl'>Events</h1>
        <CreateEventButton />
      </div>
      <div className='flex flex-col'></div>

      <div className='w-full flex flex-col items-center justify-center gap-6'>
        <EventComp events={events as any[]} />
      </div>
    </div>
  );
}
