import React from 'react';

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
          <div
            key={stat.title}
            className='flex flex-col justify-center items-center gap-4 bg-base-100 p-4 rounded-3xl shadow-md'>
            <p className='stat-title text-sm font-semibold'>{stat.title}</p>
            <p className='text-3xl stat-value text-neutral'>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
