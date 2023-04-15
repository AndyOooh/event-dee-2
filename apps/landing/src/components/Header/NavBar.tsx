import React from 'react';

import { RiArrowDropDownLine } from 'react-icons/ri';
import { menuItems } from './menuItems';

type Props = {};

function NavBar({}: Props) {
  return (
    <nav className='navbar-center hidden md:flex'>
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

export default NavBar;
