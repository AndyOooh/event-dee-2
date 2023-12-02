'use client';

// import { CurrUserContext } from 'app/(protected)/components/Providers/userProvider';
import { UserContext } from 'app/(protected)/components/Providers/UserProvider';
import React, { useContext } from 'react';
import { ColoredDiv } from 'ui';

type Props = {};

export const FreelancerRight = (props: Props) => {
  // const { currentUser } = useContext(CurrUserContext);
  const { user } = useContext(UserContext);
  console.log('🚀  file: FreelancerRight.tsx:14  user:', user)

  const sections = [
    // {
    //   title: 'Profile photo',
    //   element: <ProfilePhoto />,
    // },
    {
      title: 'About',
      // element: <ColoredDiv color='white' direction='top' height={6} className='z-10' />,
      element: <div>{user?.profile_text}</div>,
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
        <div key={section.title} className='flex flex-col gap-2'>
          <h2 className='text-xl pl-4'>{section.title}</h2>
          <div className='card bg-base-100'>
            <div className='card-body'>{section.element}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
