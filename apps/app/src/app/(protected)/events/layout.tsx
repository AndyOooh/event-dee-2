import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Dee - Events',
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <div className='w-full'>{children}</div>;
}
