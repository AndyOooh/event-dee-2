import { Direction, ThemeColors } from 'event-dee-types';

type Benefits = {
  title: string;
  text: string;
  color: ThemeColors;
  direction: Direction;
};

export const benefits: Benefits[] = [
  {
    title: 'Low effort',
    text: 'Find and hire talented event professionals with minimal effort. Our platform streamlines the process for you!',
    color: 'blue',
    direction: 'right',
  },
  {
    title: 'No legal hassle',
    text: 'Hire event talent worry-free. Our platform ensures all legalities are taken care of, so you can focus on your event.',
    color: 'green',
    direction: 'left',
  },
  {
    title: 'No paperwork',
    text: 'Say goodbye to tedious paperwork. Our platform simplifies the hiring process, saving you time and hassle.',
    color: 'pink',
    direction: 'bottom',
  },
  {
    title: 'Fast and flexible',
    text: 'In a time crunch? Our platform makes hiring event talent a breeze with fast and flexible solutions.',
    color: 'orange',
    direction: 'right',
  },
  {
    title: 'Seamless communication',
    text: 'Efficient communication is key to successful events. Our platform provides a seamless experience for all parties involved.',
    color: 'purple',
    direction: 'top',
  },
  {
    title: 'Reliable',
    text: 'Count on our platform for top-notch event talent. We provide a reliable service that you can trust.',
    color: 'red',
    direction: 'bottom',
  },

];
