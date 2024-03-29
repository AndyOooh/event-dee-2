import React from 'react';
import { ChangePasswordForm } from './components/change-pw-form';
import { DeleteAccountForm } from './components/delete-acc-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings',
};

export default function SettingsPage() {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <h1 className='text-3xl'>Account Settings</h1>
      <div className='flex flex-col'>
        <ChangePasswordForm />
        <DeleteAccountForm />
      </div>
    </div>
  );
}
