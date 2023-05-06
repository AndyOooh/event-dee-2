// 'use client'

import { RecoilProvider } from '../components/RecoilProvider';
import '../styles/globals.scss';
import { Varela } from 'next/font/google';

const varela = Varela({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Event Dee - App',
  description: 'Connecting events',
  icons: {
    icon: '/favicon.ico',
  },
};

// TODO: check if min-h is neccessary or even useful

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${varela.className} text-black`}>
      <head />
      <body className=''>
        <RecoilProvider>
          <main className='min-h-screen'>{children}</main>
          {/* <div id='modal'></div> */}
        </RecoilProvider>
      </body>
    </html>
  );
}
