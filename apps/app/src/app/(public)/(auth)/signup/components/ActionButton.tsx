import React from 'react';
import { PulseLoader } from 'react-spinners';
import { colorMap } from 'ui';

type Props = {
  loading: boolean;
};

export const ActionButton = ({ loading }: Props) => {
  return (
    <button className='btn w-full max-w-xs mx-auto flex-center' type='submit' py-2>
      {loading ? <PulseLoader color={colorMap.white} size={8} speedMultiplier={0.5} /> : 'Sign Up'}
    </button>
  );
};
