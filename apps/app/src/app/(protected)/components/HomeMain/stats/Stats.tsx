import React from 'react';
import { Stat } from 'ui';

export const Stats = () => {
  const statsData = [
    {
      title: 'Total Earnings',
      value: '฿2,5k',
    },
    {
      title: 'Open Jobs',
      value: 55,
    },
    {
      title: 'Referral Earnings',
      value: '฿6,8k',
    },
    // {
    //   title: 'Cancelled Jobs',
    //   value: 55,
    // },
    // {
    //   title: 'Total Jobs',
    //   value: 55,
    // },
    {
      title: 'Completed Jobs',
      value: 32,
    },
  ];

  return (
    <div>
      <div className='grid grid-cols-4 gap-2'>
        {statsData.map(stat => (
          <div key={stat.title}>
            <Stat stat={stat} />
          </div>
        ))}
      </div>
    </div>
  );
};
