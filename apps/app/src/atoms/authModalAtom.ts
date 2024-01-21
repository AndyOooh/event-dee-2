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
  key: 'authModalState',
  default: defaultModalState,
});
