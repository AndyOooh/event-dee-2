import 'server-only';

import { getCloudFunction } from '__firebase/clientApp';
import { EventsLala } from './Events';
import { CreateEventButton } from './components/create-event-button';

type Props = {};

export default async function Events({}: Props) {
  const fetchDocs = getCloudFunction('fetchDocs');
  const { data } = await fetchDocs({ collectionName: 'events' });

  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex justify-between'>
        <h1 className='text-3xl'>Upcoming Events</h1>
        <CreateEventButton />
      </div>
      <div className='flex flex-col'></div>

      <div className='w-full flex flex-col items-center justify-center gap-6'>
        <EventsLala events={data as any[]} />
      </div>
    </div>
  );
}
