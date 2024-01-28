import { Metadata } from 'next';
import { CreateEventForm } from './form';

export const metadata: Metadata = {
  title: 'Create Event',
};

export default function CreateEvent() {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <h1 className='text-3xl'>Create a new event</h1>
      <div className='flex flex-col w-full'>
        <CreateEventForm />
      </div>
    </div>
  );
}
