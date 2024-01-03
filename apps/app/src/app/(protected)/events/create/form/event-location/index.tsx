import React from 'react';
import { MapLocation } from './MapLocation';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useLoadScript } from '@react-google-maps/api';
import { LoaderSpinner } from '__components/ui/LoaderSpinner';
import { info } from 'console';
import { TextInput, FormError } from 'ui';
import { formArrayEventDetails } from './form-data';
import { IeventLocationSchema } from './validation';
import { IcreateEventSchema } from '../validation';

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<IcreateEventSchema>;
  setValue: UseFormSetValue<IcreateEventSchema>;
};
type Library = 'places';

const libraries: Library[] = ['places']; // have to do it outside of the component

export const EventLocation = ({ register, errors, setValue }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    libraries: libraries,
  });

  return isLoaded ? (
    <div>
      <div>
        {formArrayEventDetails.map(info => (
          <div key={info.title}>
            <TextInput
              name={info.title}
              // defaultValue={currentUser && currentUser[info.title]}
              register={register}
              label={true}
              maxW='max-w-md'
              // prepend={info.prepend}
            />
            <FormError formError={errors?.[info.title]?.message as string} />
          </div>
        ))}
      </div>
      <MapLocation setValue={setValue} />
    </div>
  ) : (
    <LoaderSpinner />
  );
};
