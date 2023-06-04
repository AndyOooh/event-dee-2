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
};

export type FormValues = {
  step: number;
} & FormStep1 &
  FormStep2;

export const wizardForm = atom<FormValues>({
  key: 'step1',
  default: {
    email: null,
    company_name: '',
    provider: 'email',
    first_name: '',
    last_name: '',
    password: '',
    step: 1,
  },
});
