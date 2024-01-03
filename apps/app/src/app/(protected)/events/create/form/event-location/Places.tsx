import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import { UseFormSetValue } from 'react-hook-form';
import { IcreateEventSchema } from '../validation';

type PlacesProps = {
  // setOffice: (position: google.maps.LatLngLiteral) => void;
  setOffice: (position: any) => void;
  // setFormValue: UseFormSetValue<IcreateEventSchema>;
  setValue: any;
};

type GeocoderResult = google.maps.GeocoderResult;

export const Places = ({ setOffice, setValue: setFormValue }: PlacesProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val: string) => {
    console.log('🚀  file: places.tsx:25  val:', val);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    // setFormValues(results[0]);
    console.log('🚀  file: places.tsx:30  results:', results);
    // setFormValue('street_name', results[0].address_components[1].long_name);
    setFormValue('street_name', results[0].formatted_address);
    const { lat, lng } = getLatLng(results[0]);
    console.log('🚀  file: Places.tsx:45  lat:', lat);
    setOffice({ lat, lng });
    // setOffice(val);
  };

  return (
    <Combobox
      onSelect={handleSelect}
      // style={{ width: '100%' }}
    >
      <ComboboxInput
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={!ready}
        className='w-full p-2'
        placeholder='Search office address'
        // style={{ borderRadius: '0.5rem' }}
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
