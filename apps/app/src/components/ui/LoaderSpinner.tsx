'use client' // Not sure if this is needed

import React from 'react';
import { HashLoader } from 'react-spinners';

import GridLoader from 'react-spinners/GridLoader';
import { ColoredDiv, colorMap } from 'ui';

type Props = {};

export const LoaderSpinner = (props: Props) => {
  return (
    <div className='flex-center min-h-screen w-full bg-base-300 absolute z-10 top-0'>
      <ColoredDiv
        color='pink'
        direction='top'
        height={12}
        width={28}
        rotateZ={45}
        className='absolute z-20 right-[5%] top-1/4'
      />
      <ColoredDiv
        color='blue'
        direction='bottom'
        height={15}
        width={15}
        // rotateZ={45}
        className='absolute z-20 left-12 top-[20%] rounded-full'
      />
      <ColoredDiv
        color='purple'
        direction='bottom'
        height={10}
        width={16}
        className='absolute z-20 bottom-1/4 left-1/4'
      />
      <ColoredDiv
        color='orange'
        direction='top'
        height={32}
        width={10}
        rotateZ={15}
        className='absolute z-20 bottom-8 right-1/4'
      />
      <GridLoader
        color={colorMap.green}
        // color={'red'}
        size={30}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};
