import React from 'react';
import { privacyPolicy } from './privacyPolicy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Dee - Privacy Policy',
};

export default function PrivacyPolicy() {
  return (
    <>
      <h1>PrivacyPolicy</h1>
      <p>{privacyPolicy.dateText}</p>
      <p>{privacyPolicy.title}</p>
    </>
  );
}
