import React from 'react';

import { RiArrowDropDownLine } from 'react-icons/ri';
import { menuItems } from './menuItems';
import Link from 'next/link';
import { appUrl } from '../../consts';

type Props = {};

function NavBar({}: Props) {
  return (
    <nav className='navbar-center hidden md:flex'>
      <ul className='menu menu-horizontal px-1'>
        {menuItems.map(item =>
          item.subItems ? (
            <li tabIndex={0} key={item.title} className='dropdown dropdown-hover'>
              <a tabIndex={0} role='button' className='btn m-1'>
                {item.title} <RiArrowDropDownLine />
              </a>
              <ul
                tabIndex={0}
                className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
                {item.subItems.map(subItem => (
                  <li key={subItem.title}>
                    <Link href={subItem.link}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.title}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
