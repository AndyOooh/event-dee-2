import React from 'react';
import { termsAndConditions } from './termsAndConditions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
};

export default function TermsAndCoonditions() {
  return (
    <>
      <h1>TermsAndCoonditions</h1>
      <p>{termsAndConditions.dateText}</p>
      <p>{termsAndConditions.title}</p>
      <p>{termsAndConditions.intro}</p>
      {termsAndConditions.paragraphs.map((paragraph, index) => (
        <>
          <p key={index}>{paragraph.number}</p>
          <p key={index}>{paragraph.title}</p>
          <p key={index}>{paragraph.text}</p>
        </>
      ))}
    </>
  );
}
