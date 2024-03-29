'use client';

import { auth } from '__firebase/clientApp';
// import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import Image from 'next/image';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { data_socials } from './data_socials';
import { UserContext } from 'app/(protected)/components/Providers/UserProvider';

type Props = {};

export const FreelancerCard = (props: Props) => {
  const { user } = useContext(UserContext);
  return user ? (
    <div className='card h-[36rem] bg-base-100 shadow-xl'>
      <figure className=''>
        <Image
          src={user.photoURL}
          alt='avatar'
          width={1000}
          height={1000}
          // fill={true}
          sizes='300'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title flex-col xl:flex-row'>
          {user.displayName}
          <p className='text-base-content text-sm'>({user.pronouns})</p>
        </h2>
        <div className='badge badge-secondary text-xs xl:text-sm -mt-1'>Rating: 4.6</div>
        <p className='text-base-content text-lg'>{user.profile_header} </p>
        <div className='card-actions justify-end'>
          {/* <div className='badge badge-outline'>Fashion</div>
          <div className='badge badge-outline'>Products</div> */}
        </div>
        <div className='card-actions justify-end'>
          {user.links?.filter(Boolean).map((link: string) => (
            <div key={link} className=''>
              {/* <a href={link} target='_blank' className='badge badge-outline'> */}
              <a href={link} target='_blank'>
                {/* <div className='rounded border-2 border-pink-200 w-10 '> */}
                {data_socials.find(soc => link.includes(soc.link))?.icon}
                {/* </div> */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};
