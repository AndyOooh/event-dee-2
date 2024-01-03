import React from 'react';

type Props = {
  events: any[];
};

export const EventsLala = ({ events }: Props) => {
  console.log('🚀  file: Events.tsx:8  events:', events);
  return events ? (
    events.map(event => (
      <div key={event.id}>
        <h1>{event.event_name}</h1>
        <h2>{event.event_type}</h2>
        <h3>{event.event_header}</h3>
        <p>{event.description}</p>
        <p>{event.address}</p>
        <p>{event.location_description}</p>
        <p>{event.coords.lng}</p>
        <p>{event.coords.lat}</p>
        <p>{event.place_id}</p>
      </div>
    ))
  ) : (
    <div>loading...</div>
  );
};
