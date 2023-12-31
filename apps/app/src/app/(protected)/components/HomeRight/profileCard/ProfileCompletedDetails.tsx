'use client';

import React, { useContext } from 'react';
import { BsFillCheckCircleFill, BsFillCircleFill } from 'react-icons/bs';
import { CurrUserContext } from '../../Providers/CurrentUserProvider';
import { DEFAULT_PROFILE_PHOTO_URL } from '__utils/global-consts';

type Props = {};

type ProfileData = {
  title: string;
  completed: boolean | 'partial';
};

export const ProfileCompletedDetails = (props: Props) => {
  const { currentUser } = useContext(CurrUserContext);
  const {
    photoURL,
    videoUrl,
    province,
    gender,
    pronoun,
    height,
    dob,
    links,
    emailVerified,
    portfolio,
    services,
    pricing,
    availability,
    languages,
    work_experience,
    english_profiency,
    profile_header,
    profile_text,
  } = currentUser;

  const getCompletionStatus = (fields: any[]) => {
    if (!fields) return false;
    const totalFields = fields.length;
    const completedFields = fields.filter(field => field).length;

    if (completedFields === totalFields) return true;
    if (completedFields === 0) return false;
    return 'partial';
  };

  const profileDatailsData: ProfileData[] = [
    {
      title: 'Profile photo',
      completed: photoURL !== DEFAULT_PROFILE_PHOTO_URL,
    },
    {
      title: 'Personal information',
      completed: getCompletionStatus([province, gender, pronoun, height, dob]), // provinve belong here? Also have in location
    },
    {
      title: 'Social media',
      completed: getCompletionStatus(links),
    },
    {
      title: 'Payment information',
      completed: false,
    },
    {
      title: 'Verification',
      completed: emailVerified,
    },
    {
      title: 'Portfolio',
      completed: portfolio,
    },
    {
      title: 'Services',
      completed: getCompletionStatus(services),
    },
    {
      title: 'Pricing',
      completed: !!pricing,
    },
    {
      title: 'Availability',
      completed: !!availability,
    },
    {
      title: 'Location',
      completed: !!province,
    },
    {
      title: 'Languages',
      completed: languages,
    },
    // {
    //   title: 'Education',
    //   completed: false,
    // },
    {
      title: 'Experience',
      completed: !!work_experience,
    },
    {
      title: 'English Level',
      completed: !!english_profiency,
    },
    {
      title: 'Age',
      completed: !!dob,
    },
    {
      title: 'Video introduction',
      completed: !!videoUrl,
    },
    {
      title: 'Profile header & text',
      completed: getCompletionStatus([profile_header, profile_text]),
    },
  ];

  return (
    <div className='w-full flex flex-col gap-2'>
      {profileDatailsData.map((item, index) => {
        return (
          <div key={index} className='flex justify-between'>
            <p className='text-sm font-medium'>{item.title}</p>
            <div>
              {item.completed === 'partial' ? (
                <div className='border-2 border-success rounded-full'>
                  <BsFillCircleFill size={'1.25rem'} className='text-success/10' />
                </div>
              ) : item.completed ? (
                <div className='border-2 border-success rounded-full'>
                  <BsFillCheckCircleFill size={'1.25rem'} className='text-success/70' />
                </div>
              ) : (
                <div className='border-2 border-error/50 rounded-full'>
                  <BsFillCircleFill size={'1.25rem'} className='text-error/10' />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
