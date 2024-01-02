import React from 'react';
import { MapLocation } from './MapLocation';
import { UseFormRegister } from 'react-hook-form';
import { useLoadScript } from '@react-google-maps/api';
import { LoaderSpinner } from '__components/ui/LoaderSpinner';

type Props = {
  register: UseFormRegister<any>;
  // errors: FieldErrors<IeventDetailsSchema>;
  // errors: any;
};

type Library = 'places';

const libraries: Library[] = ['places'];

export const EventLocation = ({ register }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    libraries: libraries,
  });

  return isLoaded ? (
    <div>
      <MapLocation />
    </div>
  ) : (
    <>
      Map
      <LoaderSpinner />
    </>
  );
};
