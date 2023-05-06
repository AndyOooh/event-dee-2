import React from 'react';

type Props = {
  children: React.ReactNode;
  step?: number;
  header?: string;
};

export const RightSide = ({ children, step, header }: Props) => {
  return (
    <div className='relative w-1/2 p-4 flex-center flex-col gap-8 bg-base-300'>
      {step && <p className='absolute top-5 left-5 font-extrabold'>{`Sign up ${step}/3`}</p>}
      {header && <h1 className='text-6xl font-semibold'>{header}</h1>}
      {children}
    </div>
  );
};
