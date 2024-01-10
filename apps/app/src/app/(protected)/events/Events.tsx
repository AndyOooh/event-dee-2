import React from 'react';

type Props = {
  events: any[];
};

export const EventsLala = ({ events }: Props) => {
  console.log('🚀  file: Events.tsx:8  events:', events);
  return events ? (
    events.map(event => (
      <div key={event.id} className='card w-4/5 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <div className='flex justify-between'>
            <h2 className='card-title'>{event.event_header}!</h2>
            <div className='badge badge-info gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-4 h-4 stroke-current'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'></path>
              </svg>
              info
            </div>
          </div>
          <p>{event.description}</p>
          <h1>{event.event_name}</h1>
          <h2>{event.event_type}</h2>
          <p>{event.address}</p>
          <p>{event.location_description}</p>
          <p>{event.coords.lng}</p>
          <p>{event.coords.lat}</p>
          <p>{event.place_id}</p>
          {event.roles?.map((role, idx) => (
            <div key={idx} className='flex gap-2'>
              <p>{role.role_type}</p>
              <p>{role.hours_per_day}</p>
              <p>{role.number_workers}</p>
              <p>{role.hourly}</p>
            </div>
          ))}

          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div>loading...</div>
  );
};
