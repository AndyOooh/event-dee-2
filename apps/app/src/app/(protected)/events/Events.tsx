import React from 'react';
import { BiPurchaseTag } from 'react-icons/bi';

type Props = {
  events: any[];
};

const jobAttributes = [
  'role_type',
  'days',
  'hours_per_day',
  'number_workers',
  'hourly',
  // 'role_description',
];

export const EventsLala = ({ events }: Props) => {
  console.log('🚀  file: Events.tsx:8  events:', events);
  return events ? (
    events.map(event => (
      <div key={event.id} className='card w-4/5 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <div className='flex justify-between'>
            <h2 className='card-title'>{event.event_header}!</h2>
            <div className='badge badge-info gap-2'>
              <BiPurchaseTag />
              {event.event_type}
            </div>
          </div>
          <p>{event.description}</p>
          <h1>{event.event_name}</h1>
          <p>{event.address}</p>
          {/* <p>{event.location_description}</p> */}
          <p>{event.coords.lng}</p>
          <p>{event.coords.lat}</p>
          <p>{event.place_id}</p>
          <h3 className='text-lg font-semibold'>Jobs</h3>
          {/* table of roles */}
          {event.roles?.length && (
            <div className='overflow-x-auto'>
              <table className='table w-full'>
                <thead>
                  <tr>
                    {jobAttributes.map((key: string) => (
                      <th key={key} className='text-center'>
                        {key}
                      </th>
                    ))}

                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {event.roles.map((role: any, index: any) => (
                    <tr key={role.role_type}>
                      {Object.keys(role)
                        .filter((key: string) => jobAttributes.includes(key))
                        .map((_key: string) => (
                          <th key={_key} className='text-center'>
                            {role[_key]}
                          </th>
                        ))}
                      {/* <th className='flex gap-2 justify-center items-center'>
                        <button type='button' className='' 
                        onClick={() => onUpdateRole(index)}
                        >
                          <BiEdit className='text-2xl text-info' />
                        </button>
                        <button type='button' className='' onClick={() => onRemoveRole(index)}>
                          <BiTrash className='text-2xl text-error' />
                        </button>
                      </th> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    ))
  ) : (
    <div>loading...</div>
  );
};
