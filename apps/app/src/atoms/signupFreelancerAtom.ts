'use client';

import { atom } from 'recoil';
import { string } from 'yup';

export type FormStep1 = {
  provider: 'google' | 'facebook' | 'email';
  email?: string;
  password?: string;
  // check_legal: boolean;
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
    provider: 'email',
    email: null,
    password: '',
    // check_legal: false,
    name: '',
    last_name: '',
    other_skills: [],
    profession: '',
    // photo: '',
    step: 1,
  },
});
console.log('🚀  file: signupFreelancerAtom.ts:40  wizardForm:', wizardForm);
