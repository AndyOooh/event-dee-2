import React from 'react';
import Image from 'next/image';

import { ColoredDiv, ImageWithtext } from '@repo/ui';
import motorshowMerc from '../../../../public/events/motorshow_mercedes.jpeg';
import chomPortait from '../../../../public/talent/chom_white_12_17.jpg';
import photographerPortrait from '../../../../public/talent/photographer1_1point4.jpg';

// TODO: make colored divs responsive size: give them with and height in %? Maybe scales work for them. NB: scale does not work for images with text as it also scales the text

export const HeroRight = () => {
  const components = [
    {
      name: 'model',
      comp: (
        <ImageWithtext
          image={
            <Image src={chomPortait.src} alt="model" height={900} width={900} priority={true} />
          }
          name="Chompuu"
          title="Model"
          // textLocation='right'
          className="w-[110%] -top-[10%] left-0"
          textClassName="left-2/3 top-3 md:-right-1/3 md:top-4"
        />
      ),
    },
    {
      name: 'pink rect',
      comp: (
        <ColoredDiv
          color="pink"
          direction="top"
          height={12}
          width={24}
          rotateZ={45}
          className="relative -z-10 right-[15%]"
        />
      ),
    },

    {
      name: 'blue circle',
      comp: (
        <ColoredDiv
          color="blue"
          direction="bottom"
          height={10}
          width={10}
          className="relative -z-10 left-12 -top-6 rounded-full"
        />
      ),
    },
    {
      name: 'green rect',
      comp: (
        <ColoredDiv
          color="green"
          direction="bottom"
          height={10}
          width={16}
          className="relative -z-10 bottom-[5%] left-[20%]"
        />
      ),
    },
    {
      name: 'empty',
      comp: <div></div>,
    },

    {
      name: 'Photographer',
      comp: (
        <ImageWithtext
          image={
            <Image
              src={photographerPortrait.src}
              alt="photographer"
              height={900}
              width={900}
              priority={true}
            />
          }
          name="John"
          title="Photographer"
          // textLocation='left'
          className="-top-[40%] -right-[2%]"
          // textClassName='right-3/4 bottom-3 md:left-1/2 md:bottom-0'
          textClassName="right-3/4 bottom-3 md:right-3/4 md:bottom-1/3"
        />
      ),
    },

    {
      name: 'purple rect',
      comp: (
        <ColoredDiv
          color="purple"
          direction="top"
          height={24}
          width={6}
          rotateZ={-25}
          className="relative -z-10 rounded-full bottom-[40%] left-[25%] hidden md:block"
        />
      ),
    },

    {
      name: 'event',
      comp: (
        <ImageWithtext
          image={
            <Image
              src={motorshowMerc.src}
              alt="motorshow mercedes"
              height={900}
              width={900}
              priority={true}
            />
          }
          name="Mercedes"
          title="Moto Expo 2022"
          // textLocation='left'
          className="w-[150%] right-[50%]"
          textClassName="-right-1/2 -bottom-7 md:-right-1/4 md:bottom-2"
        />
      ),
    },

    {
      name: 'orange square 2',
      comp: (
        <ColoredDiv
          color="orange"
          direction="left"
          height={24}
          width={8}
          rotateZ={80}
          // className='relative -z-10 right-[20%] bottom-[35%] hidden md:block'
          className="relative -z-10 right-[150%] md:right-[20%] bottom-[120%] md:bottom-[35%]"
        />
      ),
    },
  ];

  return (
    <div className="grid grid-cols-3 lg:w-1/2 min-h-96 lg:h-auto">
      {components.map((comp) => {
        return (
          <div key={comp.name} className="relative aspect-square">
            <div className="w-full h-full">{comp.comp}</div>
          </div>
        );
      })}
    </div>
  );
};
