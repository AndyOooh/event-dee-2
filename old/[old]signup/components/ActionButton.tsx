import React from 'react';
import { PulseLoader } from 'react-spinners';
import { colorMap } from 'ui';

type Props = {
  text: string;
  onClick?: () => void;
  loading?: boolean;
};

type ButtonProps = {
  onClick?: () => void;
  type?: 'submit';
};

export const ActionButton = ({ text, onClick, loading }: Props) => {
  const buttonProps: ButtonProps = onClick ? { onClick } : { type: 'submit' };

  return (
    <button className='btn w-full max-w-xs mx-auto flex-center' {...buttonProps}>
      {loading ? <PulseLoader color={colorMap.white} size={8} speedMultiplier={0.5} /> : text}
    </button>
  );

  // return onClick ? (
  //   <button className='btn w-full max-w-xs mx-auto flex-center' onClick={onClick}>
  //     {loading ? <PulseLoader color={colorMap.white} size={8} speedMultiplier={0.5} /> : text}
  //   </button>
  // ) : (
  //   <button className='btn w-full max-w-xs mx-auto flex-center' type='submit'>
  //     {loading ? <PulseLoader color={colorMap.white} size={8} speedMultiplier={0.5} /> : text}
  //   </button>
  // );
};
