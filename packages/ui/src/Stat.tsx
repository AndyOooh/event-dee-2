type Props = {
  stat: {
    title: string;
    value: string | number;
  };
};

export const Stat = ({ stat }: Props) => {
  return (
    <div
      key={stat.title}
      className='flex flex-col justify-center items-center gap-4 bg-base-100 p-4 rounded-3xl shadow-md'>
      <p className='stat-title text-sm font-semibold'>{stat.title}</p>
      <p className='text-3xl stat-value text-neutral'>{stat.value}</p>
    </div>
  );
};
