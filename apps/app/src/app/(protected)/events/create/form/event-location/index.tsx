import React from 'react';
import { MapLocation } from './MapLocation';
import { UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<any>;
  // errors: FieldErrors<IeventDetailsSchema>;
  // errors: any;
};

export const EventLocation = ({ register }: Props) => {
  return (
    <div>
      index
      <MapLocation />
    </div>
  );
};
