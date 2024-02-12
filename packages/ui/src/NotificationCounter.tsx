type Props = {
  notifications: number;
};

export const NotificationCounter = ({ notifications }: Props) => {
  return (
    <div className='absolute -top-3 -right-3 flex justify-center items-center bg-red-500 rounded-full h-6 w-6'>
      <p className='text-white text-xs font-bold'>{notifications}</p>
    </div>
  );
};
