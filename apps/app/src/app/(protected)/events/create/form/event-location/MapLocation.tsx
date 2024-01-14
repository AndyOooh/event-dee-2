import React, { useCallback, useMemo, useRef, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { Places } from './Places';
import { IcreateEventSchema } from '../validation';
import { UseFormSetValue } from 'react-hook-form';

type Props = {
  setValue: UseFormSetValue<IcreateEventSchema>;
  address?: string;
};
type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

export const MapLocation = ({ setValue, address }: Props) => {
  // const [pin, setPin] = useState<{ lat: number; lng: number }>({ lat: 13.736717, lng: 100.523186 });
  const [pin, setPin] = useState<{ lat: number; lng: number }>(null);
  const [zoom, setZoom] = useState(12);
  const mapRef = useRef<GoogleMap>();
  const bangkokCords = useMemo<LatLngLiteral>(() => ({ lat: 13.736717, lng: 100.523186 }), []);
  const options = useMemo<MapOptions>(
    () => ({
      mapId: 'b34786d7e100891b',
      disableDefaultUI: true,
      zoomControl: true,
    }),
    []
  );

  const onLoad = useCallback(map => (mapRef.current = map), []);

  return (
    <div className='w-4/5 h-[40rem] mx-auto flex flex-col gap-4'>
      <div className='flex justify-between'>
        {/* {address && <div className='text-lg font-semibold'>{address}</div>} */}
        <div className='text-lg font-semibold'>{address}</div>
        {/* <div className='input'> */}
        {/* <div className='first:bg-yellow-400 first-of-type:bg-cyan-400 p-5 border border-cyan-200 [&>input]:bg-yellow-400 [&>input]:first-of-type:bg-cyan-400'> */}
        <Places
          setValue={setValue}
          setZoom={setZoom}
          setPin={position => {
            setPin(position);
            mapRef.current?.panTo(position);
          }}
        />
        {/* </div> */}
        {/* </div> */}
      </div>
      <GoogleMap
        zoom={zoom}
        center={bangkokCords}
        mapContainerClassName='map'
        options={options}
        onLoad={onLoad}>
        {pin && (
          <Marker
            key={`lalalalla`}
            position={pin}
            icon={{
              // url: `/logo/logo-d-trans.png`,
              url: `/pin_pink_trans.png`,
              // origin: new window.google.maps.Point(0, 0),
              // anchor: new window.google.maps.Point(15, 15),
              // scaledSize: new window.google.maps.Size(30, 30),
              scaledSize: new window.google.maps.Size(90, 90),
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};
