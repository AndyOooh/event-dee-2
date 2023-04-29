import React from 'react';
import { ColoredDiv } from 'ui';
import { Colors } from './Colors';

import { Gruppo, Barlow_Condensed } from 'next/font/google';

type Props = {};

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

function LoginLeft({}: Props) {
  return (
    <div className='w-1/2 p-4 bg-accent/40 overflow-hidden'>
      <a
        className={`btn btn-ghost normal-case text-3xl
        ${barlowCondensed.className}
        `}>
        Event<span className={`text-accent font-extrabold`}>Dee</span>
      </a>

      <Colors />
    </div>
  );
}

export default LoginLeft;
