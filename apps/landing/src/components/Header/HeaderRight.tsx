'use client';

type Props = {};

function HeaderRight({}: Props) {
  return (
    <>
      <div className='flex gap-2 navbar-end'>
        <button className='btn btn-outline'>Log In</button>
        <button className='btn'>Sign Up</button>
      </div>
    </>
  );
}

export default HeaderRight;
