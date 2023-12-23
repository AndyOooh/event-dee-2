'use client';

import { atom } from 'recoil';

export type FormStep1 = {
  email?: string;
  new_password?: string;
  provider: 'google' | 'facebook' | 'email';
  oAuthCreds?: any;
};

export type FormStep2 = {
  name: string;
  last_name: string;
  profession: string;
  other_skills: string[];
};

export type FormValues = {
  step: number;
} & FormStep1 &
  FormStep2;
// & FormStep3;

export const wizardForm = atom<FormValues>({
  key: 'step1',
  default: {
    email: null,
    new_password: '',
    provider: 'email',
    name: '',
    last_name: '',
    profession: '',
    other_skills: [],
    step: 1,
    oAuthCreds: null,
  },
});
