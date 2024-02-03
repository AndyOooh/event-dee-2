import Link from 'next/link';
import Image from 'next/image';
import { RiArrowDropDownLine } from 'react-icons/ri';

import { menuItems } from './menuItems';
import logoMint from '../../../public/logo/combi_mint.png';

function NavBar() {
  return (
    <>
      <Link
        href={'/'}
        className='relative flex md:hidden items-center justify-center w-full min-w-fit h-8 min-h-[2rem] hover:scale-105 hover:bg-base-300'>
        <Image src={logoMint} alt='logo' width={800} height={800} className='h-4 w-fit' />
      </Link>
      <nav className='navbar-center hidden md:flex'>
        <ul className='menu menu-horizontal items-center  px-1'>
          {menuItems.map(item =>
            item.subItems ? (
              <li tabIndex={0} key={item.title} className='dropdown dropdown-hover'>
                <a tabIndex={0} role='button'>
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
    </>
  );
}

export default NavBar;
