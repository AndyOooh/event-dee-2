import React, { useCallback, useMemo, useRef, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { Places } from './Places';

type Props = {};
type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

export const MapLocation = (props: Props) => {
  // const [office, setOffice] = useState<LatLngLiteral>();
  const [office, setOffice] = useState<any>();
  console.log('🚀  file: MapLocation.tsx:11  office:', office);
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

  const onload = useCallback(map => {
    mapRef.current = map;
  }, []);

  return (
    <div className='w-4/5 h-[40rem] mx-auto flex flex-col'>
      <div className='w-full'>Hej Hej Hej</div>
      <div className='input'>
        {/* <div className='first:bg-yellow-400 first-of-type:bg-cyan-400 p-5 border border-cyan-200 [&>input]:bg-yellow-400 [&>input]:first-of-type:bg-cyan-400'> */}
        <Places
          setOffice={position => {
            setOffice(position);
            mapRef.current?.panTo(position);
          }}
        />
        {/* </div> */}
      </div>
      {/* <GoogleMap zoom={12} center={bangkokCords} mapContainerClassName='map' options={options} /> */}
      <GoogleMap zoom={12} center={bangkokCords} mapContainerClassName='map' options={options} />
    </div>
  );
};
