import React from 'react';

import { RiCheckboxCircleFill } from 'react-icons/ri';
import { colorMap } from './utils/brandColors';

type Props = {
  image: React.ReactNode;
  name: string;
  title: string;
  textLocation: 'left' | 'right';
  className?: string;
};

export const ImageWithtext = ({ image, name, title, textLocation = 'left', className }: Props) => {
  return (
    <div className={`${className} relative z-20`}>
      {/* <div className='relative'> */}
        <div className='rounded-3xl overflow-hidden'>{image}</div>
        {/* <div className="badge">neutral</div> */}

        {/* <div className='relative'> */}
        {/* <div className='absolute bottom-0 right-1/2 flex gap-4 bg-primary px-2 py-1 rounded'> */}
        <div
          className={`absolute bottom-0 ${textLocation}-1/2 flex gap-4 bg-base-200 px-2 py-1 rounded`}>
          {/* className={`absolute bottom-0 left-1/2 flex gap-4 bg-primary px-2 py-1 rounded`}> */}
          <div className='flex flex-col justify-center'>
            <span className='text-sm font-semibold'>{name}</span>{' '}
            <span className='text-sm whitespace-nowrap'>{title}</span>
          </div>
          <RiCheckboxCircleFill color='green' size={'1rem'} />
        </div>
      {/* </div> */}
    </div>
  );
};
