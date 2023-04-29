import React from 'react';

import { MdEventNote } from 'react-icons/md';
import {
  RiExchangeDollarLine,
  RiCalendarEventLine,
  RiCalendarFill,
  RiCalendarEventFill,
  RiSettings5Line,
  RiSettings5Fill,
  RiHome4Fill,
  RiHammerFill,
} from 'react-icons/ri';

import {
  BiHome,
  BiHomeSmile,
  BiSearchAlt,
  BiRun,
  BiMoney,
  BiMoneyWithdraw,
  BiDollarCircle,
  BiCalendarCheck,
  BiListPlus,
  BiListCheck,
  BiCog,
} from 'react-icons/bi';

type Props = {};

function Sidebar({}: Props) {
  const iconSize = '1.4rem';
  // const menuItems = [
  //   {
  //     icon: <MdEventNote size={iconSize} />,
  //     title: 'Events',
  //     link: '/events',
  //   },
  //   {
  //     icon: <RiExchangeDollarLine size={iconSize} />,
  //     title: 'Payments',
  //     link: '/payments',
  //   },
  //   {
  //     icon: <RiSettings5Line size={iconSize} />,
  //     title: 'Settings',
  //     link: '/settings',
  //   },
  // ];
  
  const menuItems = [
    {
      icon: <BiHome size={iconSize} />,
      title: 'Home',
      link: '/home',
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

  return (
    <ul className='gap-8 menu bg-white w-1/5 h-screen p-4'>
      <li>
        {menuItems.map(item => (
          <a key={item.title} href={item.link} className='text-xs pl-2 mb-2 hover:scale-110 hover:font-semibold'>
            <span className=''>{item.icon}</span>
            <span className='title'>{item.title}</span>
          </a>
        ))}
      </li>
    </ul>
  );
}

export default Sidebar;
