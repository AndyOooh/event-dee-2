import React from 'react';
import { PulseLoader } from 'react-spinners';
import { colorMap } from 'ui';

type Props = {
  text: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};

type ButtonProps = {
  onClick?: () => void;
  type?: 'submit';
};

export const ActionButton = ({ text, onClick, loading, disabled = false, className }: Props) => {
  const buttonProps: ButtonProps = onClick ? { onClick } : { type: 'submit' };

  return (
    <button
      className={`btn w-full max-w-xs mx-auto flex-center ${className}`}
      {...buttonProps}
      disabled={disabled}>
      {loading ? <PulseLoader color={colorMap.white} size={8} speedMultiplier={0.5} /> : text}
    </button>
  );

  return disabled ? (
    <button className='btn w-full max-w-xs mx-auto flex-center' {...buttonProps} disabled>
      {loading ? <PulseLoader color={colorMap.white} size={8} speedMultiplier={0.5} /> : text}
    </button>
  ) : (
    <button className={`btn w-full max-w-xs mx-auto flex-center ${className}`} {...buttonProps}>
      {loading ? <PulseLoader color={colorMap.white} size={8} speedMultiplier={0.5} /> : text}
    </button>
  );
};
