import React from 'react';

import { RiArrowDropDownLine } from 'react-icons/ri';

type Props = {};

function Headercenter({}: Props) {
  const menuItems = [
    {
      title: 'Dashboard',
      link: '/',
    },
    {
      title: 'Models',
      link: '/models',
      subItems: [
        {
          title: 'Search',
          link: '/search',
        },
        {
          title: 'Profile',
          link: '/profile',
        },
      ],
    },
    {
      title: 'Clients',
      link: '/clients',
    },
  ];
  return (
    <nav className='navbar-center hidden lg:flex'>
      <ul className='menu menu-horizontal px-1'>
        {menuItems.map(item =>
          item.subItems ? (
            <li tabIndex={0} key={item.title}>
              <a>
                {item.title} <RiArrowDropDownLine />
              </a>
              <ul className='p-2 bg-base-100'>
                {item.subItems.map(subItem => (
                  <li key={subItem.title}>
                    <a>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.title}>
              <a>{item.title}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Headercenter;
