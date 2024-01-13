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
  setPin: (position: any) => void;
  // setFormValue: UseFormSetValue<IcreateEventSchema>;
  setValue: any;
  setZoom: any;
};

type GeocoderResult = google.maps.GeocoderResult;

export const Places = ({ setPin, setValue: setFormValue, setZoom }: PlacesProps) => {
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
    console.log('🚀  file: places.tsx:30  results:', results);
    const { formatted_address, place_id, address_components } = results[0];
    const { lat, lng } = getLatLng(results[0]);
    setFormValue('location.address', formatted_address);
    setFormValue('location.place_id', place_id);
    setFormValue('location.coords', { lat, lng });
    setFormValue('location.name', address_components[0].short_name);

    setPin({ lat, lng });
    setZoom(18);
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
