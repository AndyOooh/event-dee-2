import React from 'react';
import { FreelancerCard } from './FreelancerCard';
import { ColoredDiv } from 'ui';

type Props = {};

export const FreelancerLeft = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 w-1/3 relative -top-28 p-4'>
      <FreelancerCard />
      {/* <ColoredDiv color='orange' direction='right' height={6} className='z-10' /> */}
    </div>
  );
};
