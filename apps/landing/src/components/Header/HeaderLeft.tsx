import { Gruppo, Barlow_Condensed } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { BurgerMenu } from './BurgerMenu';
import logoMint from '../../../public/logo/combi_mint.png';
// import { colorMap } from 'ui';

// const gruppo = Gruppo({
//   weight: ['400'],
//   subsets: ['latin'],
// });

// // If loading a variable font, you don't need to specify the font weight
// const barlowCondensed = Barlow_Condensed({
//   weight: ['400', '700', '900'],
//   subsets: ['latin'],
// });

function HeaderLeft() {
  return (
    <div className='navbar-start'>
      <BurgerMenu />
      <Link
        href={'/'}
        className='relative md:flex hidden items-center w-full min-w-fit h-8 min-h-[2rem] hover:scale-105 hover:bg-base-300'>
        <Image src={logoMint} alt='logo' width={800} height={800} className='h-4 w-fit' />
      </Link>
    </div>
  );
}

export default HeaderLeft;
