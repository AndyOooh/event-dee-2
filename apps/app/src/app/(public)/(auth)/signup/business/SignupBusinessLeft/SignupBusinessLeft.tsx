import React from 'react';
// import { freelancerBenefits } from '../freelancerbenefits';
import { ColoredDiv } from 'ui';
import { LeftSide } from '../../../components/LeftSide';
import { businessBenefits } from '../businessBenefits';

type Props = {};

export const SignupBusinessLeft = (props: Props) => {
  return (
    <LeftSide color='error/20'>
      <div className='relative flex flex-col gap-8 w-5/6 mx-auto'>
        {businessBenefits.map((benefit, index) => (
          <div key={index} className='flex gap-12 w-full'>
            <div className=''>{benefit.icon3}</div>
            <div className='flex flex-col gap-2 w-[22rem]'>
              <p className='text-xl'>{benefit.title}</p>
              <p className='text-sm'>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
      <ColoredDiv
        color='purple'
        direction='top'
        height={20}
        width={50}
        rotateZ={-35}
        className='absolute -bottom-10 z-20 rounded-[4rem]'
      />
    </LeftSide>
  );
};
