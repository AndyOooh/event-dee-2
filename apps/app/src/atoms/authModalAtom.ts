'use client';

import { atom } from 'recoil';

export type ModalView = 'login' | 'signup' | 'resetPassword';

export interface AuthModalState {
  open: boolean;
  view: ModalView;
}

const defaultModalState: AuthModalState = {
  open: false,
  view: 'login',
};

export const authModalState = atom<AuthModalState>({
  // export const authModalState: AuthModalState = atom({
  key: 'authModalState',
  default: defaultModalState,
});

console.log('🚀  file: authModalAtom.ts:19  authModalState:', authModalState);
