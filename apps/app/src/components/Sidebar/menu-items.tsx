import { BiHome, BiSearchAlt, BiDollarCircle, BiCalendarCheck, BiCog } from 'react-icons/bi';

export const iconSize = '1.4rem';

export const menuItems = [
  {
    icon: <BiHome size={iconSize} />,
    title: 'Home',
    link: '/',
  },
  {
    icon: <BiSearchAlt size={iconSize} />,
    title: 'Search',
    link: '/search',
  },
  {
    icon: <BiCalendarCheck size={iconSize} />,
    title: 'Events',
    link: '/events',
  },
  {
    icon: <BiDollarCircle size={iconSize} />,
    title: 'Payments',
    link: '/payments',
  },
  {
    icon: <BiCog size={iconSize} />,
    title: 'Settings',
    link: '/settings',
  },
];
