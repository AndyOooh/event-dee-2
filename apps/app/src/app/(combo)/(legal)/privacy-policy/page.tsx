import React from 'react';
import { privacyPolicy } from './privacyPolicy';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
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
