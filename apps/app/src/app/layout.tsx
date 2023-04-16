'use client';

import { RecoilRoot } from 'recoil';
import Header from '../components/Header';
import '../styles/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className='min-h-screen'>
        <RecoilRoot>
          <Header />
          <main className='w-11/12 bg-primary mx-auto'>{children}</main>
          <div id='modal'></div>
        </RecoilRoot>
      </body>
    </html>
  );
}
