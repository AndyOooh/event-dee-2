'use client';

import React, { useCallback, useMemo, useRef } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import Image from 'next/image';
import { BiPurchaseTag } from 'react-icons/bi';
import { BiEdit, BiTrash, BiBookmark, BiBookmarkHeart } from 'react-icons/bi';

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const jobAttributes = [
  {
    title: '',
    field_name: 'role_type',
  },
  {
    title: 'Days',
    field_name: 'days',
  },
  {
    title: 'Hours',
    field_name: 'hours_per_day',
  },
  {
    title: 'Qty.',
    field_name: 'number_workers',
  },
  {
    title: 'Hourly',
    field_name: 'hourly',
  },
];

export const Event = ({ event }: any) => {
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
  const { location, roles } = event;
  return false ? (
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
        <div className='flex justify-around'>
          <div className='flex flex-col'>
            <p>{event.description}</p>
            <div className='flex flex-col'>
              <p>{location.address}</p>
              <a
                className='link link-secondary'
                href={`https://www.google.com/maps/search/?api=1&query=${location.coords.lat}%2C-${location.coords.lng}&query_place_id=${location.place_id}`}
                target='_blank'
                rel='noreferrer'>
                See Map
              </a>
            </div>
          </div>

          {isLoaded ? (
            <div className='w-1/2 h-60 border border-pink-300'>
              <GoogleMap
                zoom={10}
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

        <div className='divider my-2' />

        <h3 className='text-lg font-semibold'>Jobs</h3>
        {/* table of roles */}
        {roles?.length && (
          <div className='overflow-x-auto'>
            <table className='table w-full'>
              <thead>
                <tr>
                  {jobAttributes.map((attr: any) => (
                    <th key={attr.title} className='text-center'>
                      {attr.title}
                    </th>
                  ))}

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {event.roles.map((role: any, index: any) => (
                  <tr key={role.role_type}>
                    {jobAttributes
                      .map(attr => {
                        return { name: attr.field_name, value: role[attr.field_name] };
                      })
                      .map((field: any) => {
                        return (
                          <th key={field.name} className='text-center'>
                            {field.name === 'number_workers'
                              ? `${role.accepted || 0}/${field.value}`
                              : field.value}
                          </th>
                        );
                      })}

                    {/* {Object.keys(role)
                      .filter((key: string) =>
                        jobAttributes.map(attr => attr.field_name).includes(key)
                      )
                      .map((field_name: string) => {
                        return (
                          <th key={field_name} className='text-center'>
                            {field_name === 'number_workers' ? `${role.accepted}/${role[field_name]}` : role[field_name]}
                            {field_name === 'number_workers' ? 'lalalal' : role[field_name]}
                            {field_name === 'number_workers' ? 'lalalal' : field_name}
                            {role[field_name]}
                          </th>
                        );
                      })} */}

                    <th className='flex gap-2 justify-center items-center'>
                      <button
                        type='button'
                        // className='relative h-6 w-12'
                        className='btn btn-sm btn-info w-16'
                        // onClick={() => onUpdateRole(index)}
                      >
                        Apply
                        {/* <Image
                          alt=''
                          src={'/logo/combi/logo_symbol_black.png'}
                          className='text-2xl text-info'
                          fill={true}
                          objectFit='contain'
                        /> */}
                      </button>
                      <button
                        type='button'
                        className='btn btn-sm btn-error w-16'
                        // onClick={() => onRemoveRole(index)}
                      >
                        Save
                        {/* <BiBookmarkHeart className='text-2xl text-error' /> */}
                        {/* <BiBookmark className='text-2xl text-error' /> */}
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="skeleton w-32 h-32">
        skeleton
    </div>
    // <div key={event.id} className='w-4/5 h-64 skeleton shadow-xl'>
    //     SKeleton????
    // </div>
  );
};
