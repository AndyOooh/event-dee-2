'use client';

import { atom } from 'recoil';

export type FormStep1 = {
  email?: string;
  password: string;
  confirm_password?: string[];
  provider: 'google' | 'facebook' | 'email';
};

export type FormStep2 = {
  first_name: string;
  last_name: string;
  company_name: string;
  position: string;
};

export type FormValues = {
  step: number;
} & FormStep1 &
  FormStep2;

export const wizardForm = atom<FormValues>({
  key: 'step1_business_signup_form',
  default: {
    email: null,
    provider: 'email',
    company_name: '',
    position: '',
    first_name: '',
    last_name: '',
    password: '',
    step: 1,
  },
});
