import React from 'react';
import { appUrl } from '../../../consts';

type Props = {};

export const HeroLeft = (props: Props) => {
  return (
    <div className=' lg:w-1/2'>
      <h1 className='text-7xl font-semibold '>
        Hire event
        <br />
        professionals
        <br />
        hassle-free
      </h1>
      <div className='divider' />
      {/* add endpoint to this link: signup/company */}
      <a
        href={`${appUrl}`}
        className='btn btn-neutral hover:text-accent-content hover:bg-gradient-to-tr from-accent/80 to-primary hover:border-none'>
        Get Started
      </a>
      <p className='py-6 text-sm'>
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
  );
};
