import { SiBentley, SiBmw, SiLamborghini, SiMercedes, SiPorsche } from 'react-icons/si';

import bmw from '../../../public/carPngs/bmw.png';
import bentley from '../../../public/carPngs/bentley.png';
import jaguar from '../../../public/carPngs/jaguar.png';
import lamborghini from '../../../public/carPngs/lamborghini.png';
import mercedes from '../../../public/carPngs/mercedes2.png';
import porsche from '../../../public/carPngs/porsche.png';
import Image from 'next/image';

// import hero from '../../public/hero/yeshi-kangrang-iuqxv7kFj64-unsplash.jpg';

type Props = {};

export const SocialProof = (props: Props) => {
  console.log('🚀  props:', props);
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
      imgUrl: mercedes,
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
          <div key={company.name} className='relative h-12 md:h-16 lg:h-20 w-full'>
            <Image
              src={company.imgUrl}
              // src={porsche}
              alt={company.name}
              fill={true}
              // width={100}
              // height={200}
              // className='h-12 md:h-16 lg:h-20'
              className='object-contain'
            />
          </div>
        );
      })}
    </div>
  );
};
