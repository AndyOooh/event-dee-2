import Link from 'next/link';
import React from 'react';
import { CreateEventForm } from './form';

type Props = {};

export default function CreateEvent({}: Props) {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <h1 className='text-3xl'>Create a new event</h1>
      <div className='flex flex-col'>
        <CreateEventForm />
      </div>
    </div>
  );
}
