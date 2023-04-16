import React from 'react';

import { MdEventNote } from 'react-icons/md';
import {
  RiExchangeDollarLine,
  RiCalendarEventLine,
  RiCalendarFill,
  RiCalendarEventFill,
  RiSettings5Line,
  RiSettings5Fill,
} from 'react-icons/ri';

type Props = {};

function Sidebar({}: Props) {
  const iconSize = '1.5rem';
  const menuItems = [
    {
      icon: <MdEventNote size={iconSize} />,
      title: 'Events',
      link: '/events',
    },
    {
      icon: <RiExchangeDollarLine size={iconSize} />,
      title: 'Payments',
      link: '/payments',
    },
    {
      icon: <RiSettings5Line size={iconSize} />,
      title: 'Settings',
      link: '/settings',
    },
  ];

  return (
    <ul className='menu bg-base-100 w-56 p-2 rounded-box'>
      <li>
        {menuItems.map(item => (
          <a key={item.title} href={item.link}>
            <span className='icon'>{item.icon}</span>
            <span className='title'>{item.title}</span>
          </a>
        ))}
      </li>
    </ul>
  );
}

export default Sidebar;
