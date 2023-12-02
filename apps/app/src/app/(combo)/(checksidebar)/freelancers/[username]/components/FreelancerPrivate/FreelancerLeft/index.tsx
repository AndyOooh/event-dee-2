import React from 'react';
import { FreelancerCard } from './components/FreelancerCard';
import { ColoredDiv } from 'ui';
import { FreelancerStatsCard } from './components/FreelancerStatsCard';

type Props = {};

export const FreelancerLeft = (props: Props) => {
  const sections = [
    {
      title: 'Stats',
      element: <FreelancerStatsCard />,
    },
  ];

  return (
    <div className='flex flex-col gap-10 w-1/3 relative -top-28 p-4'>
      <FreelancerCard />
      {sections.map(section => (
        <div key={section.title} className='flex flex-col gap-2'>
          <h2 className='text-xl pl-4'>{section.title}</h2>
          {section.element}
        </div>
      ))}
    </div>
  );
};
