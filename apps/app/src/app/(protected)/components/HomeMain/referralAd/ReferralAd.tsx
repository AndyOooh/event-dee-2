import React from 'react';
import { ColoredDiv } from 'ui';

type Props = {};

export const ReferralAd = (props: Props) => {
  return (
    <div className='card w-full bg-warning/30 shadow-xl overflow-hidden'>
      {/* <figure>
        <img src='/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' alt='Shoes' />
      </figure> */}
      <ColoredDiv
        color='orange'
        direction='top'
        height={12}
        width={28}
        rotateZ={45}
        className='absolute z-10 -right-12'
      />
      <ColoredDiv
        color='orange'
        direction='bottom'
        height={10}
        width={10}
        // rotateZ={45}
        className='absolute z-10 left-16 bottom-1/2 rounded-full'
      />
      <div className='card-body'>
        <h2 className='card-title'>Refer a company and earn rewards!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-warning'>Read the guide</button>
        </div>
      </div>
    </div>
  );
};
