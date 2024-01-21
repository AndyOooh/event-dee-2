import { Event } from './Event';

type Props = {
  events: any[];
};

export const EventsLala = ({ events }: Props) => {
  return events.map(event => <Event key={event.id} event={event} />);
};
