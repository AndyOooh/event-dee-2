'use client';

import { GoogleMap, Marker } from '@react-google-maps/api';
import React, { useCallback, useMemo, useRef } from 'react';
import { BiPurchaseTag } from 'react-icons/bi';

type Props = {
  events: any[];
};

type MapOptions = google.maps.MapOptions;

const jobAttributes = [
  'role_type',
  'days',
  'hours_per_day',
  'number_workers',
  'hourly',
  // 'role_description',
];

export const EventsLala = ({ events }: Props) => {
  console.log('events', events);
  console.log('🚀  file: Events.tsx:8  events:', events);

  const mapRef = useRef<GoogleMap>();
  const onLoad = useCallback(map => (mapRef.current = map), []);
  const options = useMemo<MapOptions>(
    () => ({
      mapId: 'b34786d7e100891b',
      disableDefaultUI: true,
      zoomControl: true,
    }),
    []
  );

  return events ? (
    events.map(event => {
      const { location, roles } = event;
      return (
        <div key={event.id} className='card w-4/5 bg-base-100 shadow-xl'>
          <div className='card-body'>
            <div className='flex justify-between'>
              <h2 className='card-title'>{event.event_header}!</h2>
              <div className='badge badge-info gap-2'>
                <BiPurchaseTag />
                {event.event_type}
              </div>
            </div>
            <h3>
              <span className='text-primary font-semibold'>{event.event_name}</span>,{' '}
              <span className='text-base-content'>{location.name}</span>
            </h3>
            <div className='divider my-2' />
            <p>{event.description}</p>

            <p>{location.place_id}</p>

            {/* const bangkokCords = useMemo<LatLngLiteral>(() => ({ lat: 13.736717, lng: 100.523186 }), []); */}

            <div className='w-32 h32'>
              <GoogleMap
                zoom={16}
                center={location.coords}
                mapContainerClassName='map'
                options={options}
                onLoad={onLoad}
              >
                {/* <Marker
                  key={`lalalalla`}
                  position={location.coords}
                  icon={{
                    // url: `/bear.svg`,
                    url: `/logo/logo-d-trans.png`,
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                    // scaledSize: new window.google.maps.Size(30, 30),
                    scaledSize: new window.google.maps.Size(50, 50),
                  }}
                /> */}
              </GoogleMap>
            </div>

            <h3 className='text-lg font-semibold'>Jobs</h3>
            {/* table of roles */}
            {roles?.length && (
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
      );
    })
  ) : (
    <div>loading...</div>
  );
};
