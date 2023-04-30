import React from 'react';
import { SiBentley, SiBmw, SiLamborghini, SiMercedes, SiPorsche } from 'react-icons/si';

import bmw from '../../../public/carPngs/bmw.png';
import bentley from '../../../public/carPngs/bentley.png';
import jaguar from '../../../public/carPngs/jaguar.png';
import lamborghini from '../../../public/carPngs/lamborghini.png';
import mercedes2 from '../../../public/carPngs/mercedes2.png';
import mercedes from '../../../public/carPngs/mercedes.png';
import porsche from '../../../public/carPngs/porsche.png';

// import hero from '../../public/hero/yeshi-kangrang-iuqxv7kFj64-unsplash.jpg';

type Props = {};

export const SocialProof = (props: Props) => {
  const logoSize = '4rem';
  const companies = [
    {
      name: 'Lamborghini',
      logo: <SiLamborghini size={logoSize} />,
      imgUrl: lamborghini,
    },
    {
      name: 'Mercedes',
      logo: <SiMercedes size={logoSize} />,
      imgUrl: mercedes2,
      // imgUrl: mercedes,
    },

    {
      name: 'Porsche',
      logo: <SiPorsche size={logoSize} />,
      imgUrl: porsche,
    },
    {
      name: 'Bentley',
      logo: <SiBentley size={logoSize} />,
      imgUrl: bentley,
    },
    {
      name: 'BMW',
      logo: <SiBmw size={logoSize} />,
      imgUrl: bmw,
    },
    {
      name: 'Jaguar',
      logo: <SiBmw size={logoSize} />,
      imgUrl: jaguar,
    },
  ];
  return (
    <div className='flex w-full justify-around items-center'>
      {companies.map(company => {
        return (
          <img key={company.name} src={company.imgUrl.src} alt={company.name} className='h-12 md:h-16 lg:h-20' />
        );
      })}
    </div>
  );
};
