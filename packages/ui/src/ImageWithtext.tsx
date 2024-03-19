import { ReactNode } from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';

type Props = {
  image: ReactNode;
  name: string;
  title: string;
  className?: string;
  textClassName?: string;
};

export const ImageWithtext = ({ image, name, title, className, textClassName }: Props) => {
  return (
    <div className={`${className} relative z-20`}>
      <div className='rounded-3xl overflow-hidden'>{image}</div>
      <div className={`absolute flex gap-4 bg-base-200 px-2 py-1 rounded ${textClassName}`}>
        <div className='flex flex-col justify-center'>
          <span className='text-sm font-semibold'>{name}</span>{' '}
          <span className='text-sm whitespace-nowrap'>{title}</span>
        </div>
        <RiCheckboxCircleFill color='green' size={'1rem'} />
      </div>
    </div>
  );
};
