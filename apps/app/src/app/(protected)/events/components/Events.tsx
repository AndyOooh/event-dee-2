import { MemoizedEvent } from './Event';

type Props = {
  events: any[];
};

export const Events = ({ events }: Props) => {
  return events.map(event => <MemoizedEvent key={event.id} event={event} />);
};
