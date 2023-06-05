import React from 'react';
import { BiStar } from 'react-icons/bi';

type Props = {};

export const Badge = (props: Props) => {
  const user = {
    rating: 4.7,
    profession: 'Model',
    location: 'New York, NY',
    // reviews: 12,
    // followers: 120,
    // following: 12,
    // posts: 12,
  };
  return (
    <div className='flex gap-2 justify-between rounded-3xl bg-secondary/40 border-2 border-secondary p-2 px-4 w-32'>
      <p className='text-secondary-content text-sm'>{user.profession}</p>
      <p className='flex-center text-secondary-content text-sm'>
        <BiStar /> {user.rating}
      </p>
    </div>
  );
};
