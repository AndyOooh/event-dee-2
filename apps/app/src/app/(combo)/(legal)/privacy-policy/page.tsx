import React from 'react';
import { privacyPolicy } from './privacyPolicy';

type Props = {};

export default function PrivacyPolicy({}: Props) {
  return (
    <>
      <h1>PrivacyPolicy</h1>
      <p>{privacyPolicy.dateText}</p>
      <p>{privacyPolicy.title}</p>
    </>
  );
}
