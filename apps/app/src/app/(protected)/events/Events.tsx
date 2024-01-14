'use client';

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import React, { useCallback, useMemo, useRef } from 'react';
import { BiPurchaseTag } from 'react-icons/bi';

type Props = {
  events: any[];
};

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const jobAttributes = ['', 'days', 'hours_per_day', 'number_workers', 'hourly'];

export const EventsLala = ({ events }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  const mapRef = useRef<GoogleMap>();
  const options = useMemo<MapOptions>(
    () => ({
      mapId: 'b34786d7e100891b',
      disableDefaultUI: true,
      zoomControl: true,
    }),
    []
  );

  const onLoad = useCallback(map => (mapRef.current = map), []);

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
            <div className='flex justify-around border border-pink-300'>
              <p>{event.description}</p>

              {isLoaded ? (
                <div className='w-1/2 h-60 border border-pink-300'>
                  <GoogleMap
                    zoom={12}
                    center={location.coords}
                    mapContainerClassName='map'
                    options={options}
                    onLoad={onLoad}>
                    <Marker
                      key='event_position'
                      position={location.coords}
                      icon={{
                        url: `/pin_pink_trans.png`,
                        scaledSize: new google.maps.Size(70, 70),
                      }}
                    />
                  </GoogleMap>
                </div>
              ) : (
                <div className='text-emerald-500 text-2xl'>Not loaded</div>
              )}
            </div>

            <p>{location.place_id}</p>
            <p>{location.place_id}</p>

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
