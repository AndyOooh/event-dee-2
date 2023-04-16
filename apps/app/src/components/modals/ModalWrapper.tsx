'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useOnClickOutside } from 'usehooks-ts';

type ModalWrapperProps = {
  children: React.ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  className?: string;
};

function ModalWrapper({ children, visible, setVisible, className }: ModalWrapperProps) {
  const [mounted, setMounted] = useState(false);
  const divRef = useRef<HTMLDivElement>();
  const modalref = useRef(null);
  const handleClickOutside = () => {
    setVisible(false);
  };
  useOnClickOutside(modalref, handleClickOutside);
  const classes = ['modal', className].join(' ');
  // const modalDiv = document.getElementById('modal') as HTMLDivElement;

  useEffect(() => {
    divRef.current = document.getElementById('modal') as HTMLDivElement;
    setMounted(true);
  }, []);

  return mounted && visible ? (
    <>
      {createPortal(
        <div className='absolute top-0 z-10 w-full h-full bg-black/40 border-2 border-red-500 flex justify-center items-center'>
          <div ref={modalref} className=''>
            {children}
          </div>
        </div>,
        divRef.current!
      )}
    </>
  ) : null;
}

export default ModalWrapper;
