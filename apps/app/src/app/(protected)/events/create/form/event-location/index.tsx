import React from 'react';
import { MapLocation } from './MapLocation';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useLoadScript } from '@react-google-maps/api';
import { LoaderSpinner } from '__components/ui/LoaderSpinner';
import { info } from 'console';
import { TextInput, FormError } from 'ui';
// import { formArrayEventDetails } from './form-data';
import { IeventLocationSchema } from './validation';
import { IcreateEventSchema } from '../validation';

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<IcreateEventSchema>;
  setValue: UseFormSetValue<IcreateEventSchema>;
  address?: string;
};
type Library = 'places';

const libraries: Library[] = ['places']; // have to do it outside of the component

export const EventLocation = ({ register, errors, setValue, address }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    libraries: libraries,
  });

  return isLoaded ? (
    <div>
      <MapLocation setValue={setValue} address={address} />
      <div>
        <TextInput
          name='location_description'
          // defaultValue={currentUser && currentUser[info.title]}
          register={register}
          label={true}
          maxW='max-w-md'
          tooltip='Describe the location of the event.'
          // prepend={info.prepend}
        />

        <FormError formError={errors?.location?.description?.message as string} />
      </div>
    </div>
  ) : (
    <LoaderSpinner />
  );
};
