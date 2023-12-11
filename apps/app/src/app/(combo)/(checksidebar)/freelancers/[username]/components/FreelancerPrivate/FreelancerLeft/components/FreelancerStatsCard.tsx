'use client';

import React, { useContext } from 'react';
import { UserContext } from 'app/(protected)/components/Providers/UserProvider';
import { formatDate, timeDiff } from '__firebase/utilities';
type Props = {};

export const FreelancerStatsCard = (props: Props) => {
  const { user } = useContext(UserContext);
  console.log('🚀  file: FreelancerStatsCard.tsx:10  user:', user)

  const stats = [
    {
      title: 'Profession',
      value: user?.profession,
    },
    {
      title: 'Member since',
      value: formatDate(user?.metadata?.creationTime) || null,
    },
    {
      title: 'Location',
      value: user?.province,
    },
    {
      title: 'Languages',
      value: 'English, Spanish',
    },
    {
      title: 'English Level',
      value: user?.english_profiency,
    },
    {
      title: 'Age',
      value: timeDiff(user?.dob?.seconds)?.years || null,
    },
    {
      title: 'Jobs',
      value: 55,
    },
    {
      title: 'Job completion',
      value: '95%',
    },

    {
      title: 'Work experience',
      value: user?.work_experience ? `${user.work_experience} years` : null,
    },
  ];

  return user ? (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body gap-5'>
        hello
        {stats
          .filter((stat: any) => stat.value)
          .map(stat => (
            <div key={stat.title} className='flex flex-col gap-1 text-sm'>
              <span className='text-base-content'>{stat.title}</span>
              <span className=''>{stat.value}</span>
            </div>
          ))}

        <div className='card-actions justify-end'>
          {/* <div className='badge badge-outline'>Fashion</div>
          <div className='badge badge-outline'>Products</div> */}
        </div>
        <div className='card-actions justify-end'></div>
      </div>
    </div>
  ) : null;
};
