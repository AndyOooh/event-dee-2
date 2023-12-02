'use client';

import { UserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { useContext } from 'react';
import { ColoredDiv } from 'ui';

type Props = {};

export const FreelancerRight = (props: Props) => {
  const { currentUser } = useContext(UserContext);

  const sections = [
    // {
    //   title: 'Profile photo',
    //   element: <ProfilePhoto />,
    // },
    {
      title: 'About',
      // element: <ColoredDiv color='white' direction='top' height={6} className='z-10' />,
      element: <div>{currentUser?.profile_text}</div>,
    },
    {
      title: 'Work information',
      element: <ColoredDiv color='purple' direction='top' height={6} className='z-10' />,
    },
    {
      title: 'Get to know',
      element: <ColoredDiv color='blue' direction='top' height={6} className='z-10' />,
    },
    // {
    //   title: 'Getting to know you better',
    //   element: <GetToKnow register={register} />,
    // },
  ];
  return (
    <div className='flex flex-1 flex-col gap-4 mt-4'>
      {sections.map(section => (
        <div key={section.title} className='flex flex-col gap-2 mt-4'>
          <h2 className='text-xl'>{section.title}</h2>
          <div className='card bg-base-100'>
            <div className='card-body'>{section.element}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
