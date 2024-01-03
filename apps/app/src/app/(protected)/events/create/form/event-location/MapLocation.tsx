import React, { useCallback, useMemo, useRef, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { Places } from './Places';
import { IcreateEventSchema } from '../validation';
import { UseFormSetValue } from 'react-hook-form';

type Props = {
  setValue: UseFormSetValue<IcreateEventSchema>;
};
type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

export const MapLocation = ({ setValue }: Props) => {
  // const [office, setOffice] = useState<LatLngLiteral>();
  const [pin, setPin] = useState<any>();
  // console.log('🚀  file: MapLocation.tsx:11  office:', office);
  const mapRef = useRef<GoogleMap>();
  // const bangkokCords = useMemo(() => ({ lat: 40, lng: -80 }), []);
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
      {/* <div className='input'> */}
      {/* <div className='first:bg-yellow-400 first-of-type:bg-cyan-400 p-5 border border-cyan-200 [&>input]:bg-yellow-400 [&>input]:first-of-type:bg-cyan-400'> */}
      <Places
        setValue={setValue}
        setOffice={position => {
          setPin(position);
          mapRef.current?.panTo(position);
        }}
      />
      {/* </div> */}
      {/* </div> */}
      {/* <GoogleMap zoom={12} center={bangkokCords} mapContainerClassName='map' options={options} /> */}
      <GoogleMap
        zoom={12}
        center={bangkokCords}
        mapContainerClassName='map'
        options={options}
        onLoad={onLoad}
      />
    </div>
  );
};
