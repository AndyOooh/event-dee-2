'use client';

import React, { useContext } from 'react';
import { BsFillCheckCircleFill, BsFillCircleFill } from 'react-icons/bs';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { getStatusList } from './util';

export const ProfileStatusList = () => {
  const { currentUser } = useContext(CurrUserContext);

  const profileDatailsData = getStatusList(currentUser);

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
