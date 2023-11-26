'use client';

import { atom } from 'recoil';

// type FormData = {
//   email?: unknown;
//   new_password?: unknown;
//   provider?: string;
//   check_legal?: boolean;
//   confirm_password?: unknown;
// };

export type FormStep1 = {
  email?: string;
  new_password?: string;
  provider: 'google' | 'facebook' | 'email';
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
  },
});
