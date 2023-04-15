import React from 'react';
import './button.css';

// Copied from boulerplate Button
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}



export const AndyButton = () => {
  return (
    <div className='bg-orange-400'>
      <button className='bg-cyan-400'>Andy Button mac2</button>
    </div>
  );
};