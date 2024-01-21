import 'server-only';

import { getCloudFunction } from '__firebase/clientApp';
import { EventsLala } from './Events';
import { CreateEventButton } from './components/create-event-button';
import { cache } from 'react';

type Props = {};

// import { cache } from 'react'

// export const getItem = cache(async (id: string) => {
//   const item = await db.item.findUnique({ id })
//   return item
// })

const getEvents = cache(async () => {
  const fetchDocsWithQuery = getCloudFunction('fetchDocsWithQuery');
  const { data } = await fetchDocsWithQuery({ collectionName: 'events' });
  return data;
});

export default async function Events({}: Props) {
  // const fetchDocsWithQuery = getCloudFunction('fetchDocsWithQuery');
  // const { data } = await fetchDocsWithQuery({ collectionName: 'events' });

  const events = await getEvents();

  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex justify-between'>
        <h1 className='text-3xl'>Upcoming Events</h1>
        <CreateEventButton />
      </div>
      <div className='flex flex-col'></div>

      <div className='w-full flex flex-col items-center justify-center gap-6'>
        <EventsLala events={events as any[]} />
      </div>
    </div>
  );
}
