import Link from 'next/link';
import React from 'react';

type Props = {};

// Th9is page could ask if user wants to signuo as freelancer or company and procide links. Or it ciuld be deleted.

function Signup({}: Props) {
  return (
    <div className='min-h-screen flex-center bg-primary/20 text-3xl'>
      <p>
        Sign up as{' '}
        <Link href={'/signup/freelancer'} className='link link-primary'>
          freelancer?
        </Link>
        <br />
        Or as{' '}
        <Link href={'/signup/freelancer'} className='link link-primary'>
          Businesss?
        </Link>
      </p>
    </div>
  );
}

export default Signup;
