'use client';

import { auth } from '__firebase/clientApp';
import { UserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import Image from 'next/image';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { socialsMap } from './SocialsMap';

type Props = {};

export const ProfileCard = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const { currentUser } = useContext(UserContext);
  console.log('🚀  file: ProfileCard.tsx:15  currentUser:', currentUser);
  return currentUser ? (
    <div className='card h-[36rem] bg-base-100 shadow-xl'>
      <figure className=''>
        <Image
          src={currentUser.photoURL}
          alt='avatar'
          width={1000}
          height={1000}
          // fill={true}
          sizes='300'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title flex-col xl:flex-row'>
          {currentUser.displayName}
          <div className='badge badge-secondary text-xs xl:text-sm'>Rating: 4.6</div>
        </h2>
        <p className='text-base-content text-sm -mt-1'>({currentUser.pronouns})</p>
        <p className='text-base-content text-lg'>{currentUser.profile_header} </p>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Fashion</div>
          <div className='badge badge-outline'>Products</div>
        </div>
        <div className='card-actions justify-end'>
          {currentUser.links.map(link => (
            <div key={link} className=''>
              <a href={link} target='_blank' className='badge badge-outline'>
                {socialsMap.find(soc => link.includes(soc.link)).icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};
