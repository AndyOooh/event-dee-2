import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Event Dee - Signup',
};

// Th9is page could ask if user wants to signuo as freelancer or company and procide links. Or it ciuld be deleted.

function Signup() {
  return (
    <section className='min-h-screen flex-center bg-primary/20 text-3xl'>
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
    </section>
  );
}

export default Signup;
