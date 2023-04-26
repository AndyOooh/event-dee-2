import React from 'react';
import { SiBentley, SiBmw, SiLamborghini, SiMercedes, SiPorsche } from 'react-icons/si';

type Props = {};

export const SocialProof = (props: Props) => {
  const logoSize = '4rem';
  const companies = [
    {
      name: 'BMW',
      logo: <SiBmw size={logoSize} />,
    },
    {
      name: 'Lamborghini',
      logo: <SiLamborghini size={logoSize} />,
    },
    {
      name: 'Bentley',
      logo: <SiBentley size={logoSize} />,
    },
    {
      name: 'Mercedes',
      logo: <SiMercedes size={logoSize} />,
    },
    {
      name: 'Porsche',
      logo: <SiPorsche size={logoSize} />,
    },
  ];
  return (
    <div className='flex w-full justify-around'>
      {companies.map(company => {
        return (
          <div key={company.name} className='flex flex-col items-center justify-center gap-4'>
            {company.logo}
          </div>
        );
      })}
    </div>
  );
};
