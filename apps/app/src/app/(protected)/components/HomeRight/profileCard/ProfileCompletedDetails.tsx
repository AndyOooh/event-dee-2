import React from 'react';
import { BsFillCheckCircleFill, BsFillCircleFill } from 'react-icons/bs';

type Props = {};

export const ProfileCompletedDetails = (props: Props) => {
  const profileDatailsData = [
    {
      title: 'Profile photo',
      completed: true,
    },
    {
      title: 'Personal information',
      completed: true,
    },
    {
      title: 'Social media',
      completed: true,
    },
    {
      title: 'Payment information',
      completed: false,
    },
    {
      title: 'Verification',
      completed: false,
    },
    {
      title: 'Portfolio',
      completed: false,
    },
    {
      title: 'Services',
      completed: false,
    },
    {
      title: 'Pricing',
      completed: false,
    },
    {
      title: 'Availability',
      completed: false,
    },
    {
      title: 'Location',
      completed: false,
    },
    {
      title: 'Languages',
      completed: false,
    },
    // {
    //   title: 'Education',
    //   completed: false,
    // },
    {
      title: 'Experience',
      completed: false,
    },
    // {
    //   title: 'Skills',
    //   completed: false,
    // },
    {
      title: 'Age',
      completed: false,
    },
    {
      title: 'Video introduction',
      completed: false,
    },
  ];

  return (
    <div className='w-full flex flex-col gap-2'>
      {profileDatailsData.map((item, index) => {
        return (
          <div key={index} className='flex justify-between'>
            <p className='text-sm font-medium'>{item.title}</p>
            <div>
              {item.completed ? (
                <div className='border-2 border-success rounded-full'>
                  <BsFillCheckCircleFill size={'1.25rem'} className='text-success/70' />
                </div>
              ) : (
                <div className='border-2 border-success rounded-full'>
                  <BsFillCircleFill size={'1.25rem'} className='text-success/10' />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
