import 'server-only';

import { getCloudFunction } from '__firebase/clientApp';
import { Events as EventComp } from './components/Events';
import { CreateEventButton } from './components/create-event-button';
import { cache } from 'react';

export const revalidate = 3600; // revalidate the data at most every hour

const getEvents = cache(async () => {
  const fetchDocsWithQuery = getCloudFunction('fetchDocsWithQuery');
  const { data } = await fetchDocsWithQuery({ collectionName: 'events' });
  return data;
});

export default async function Events() {
  const events = await getEvents();

  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex justify-between'>
        <h1 className='text-3xl'>Upcoming Events</h1>
        <CreateEventButton />
      </div>
      <div className='flex flex-col'></div>

      <div className='w-full flex flex-col items-center justify-center gap-6'>
        <EventComp events={events as any[]} />
      </div>
    </div>
  );
}
