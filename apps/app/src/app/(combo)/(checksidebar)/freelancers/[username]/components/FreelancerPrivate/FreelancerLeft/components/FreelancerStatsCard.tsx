'use client';

// import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { useContext } from 'react';
import { UserContext } from 'app/(protected)/components/Providers/UserProvider';
import { format } from 'date-fns';
type Props = {};

export const FreelancerStatsCard = (props: Props) => {
  const { user } = useContext(UserContext);
  const formattedDate: string = format(new Date(2014, 1, 11), 'MMM d yyyy');

  const stats = [
    {
      title: 'Profession',
      value: user?.profession,
    },
    {
      title: 'Member since',
      value: formattedDate,
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
      title: 'Jobs',
      value: 55,
    },
    {
      title: 'Job completion',
      value: '95%',
    },

    {
      title: 'Work experience',
      value: `${user?.work_experience} years`,
    },
  ];

  return user ? (
    <div className='card bg-base-100 shadow-xl'>
      {/* <figure className=''>
        <Image
          src={user?.photoURL}
          alt='avatar'
          width={1000}
          height={1000}
          // fill={true}
          sizes='300'
        />
      </figure> */}
      <div className='card-body gap-5'>
        {stats.map(stat => (
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
