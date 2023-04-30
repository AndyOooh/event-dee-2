import React from 'react';
import { freelancerBenefits } from './freelancerbenefits';
import { ColoredDiv } from 'ui';

type Props = {};

export const SignupMemberLeft = (props: Props) => {
  return (
    <>
      <div className='relative flex flex-col gap-8 w-5/6 mx-auto'>
        {freelancerBenefits.map((benefit, index) => (
          <div key={index} className='flex gap-12 w-full'>
            <div className=''>{benefit.icon3}</div>
            <div className='flex flex-col gap-2 w-[22rem]'>
              <p className='text-2xl'>{benefit.title}</p>
              <p className=''>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
      <ColoredDiv
        color='orange'
        direction='bottom'
        height={20}
        width={50}
        rotateZ={-35}
        className='absolute -bottom-10 -z-10 rounded-[4rem]'
      />
    </>
  );
};
