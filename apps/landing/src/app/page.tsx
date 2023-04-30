import { Inter } from 'next/font/google';
import { SocialProof } from './components/SocialProof';
import { Benefits } from './components/Benefits';
import { Hero } from './components/Hero/Hero';
import { ImageWithtext } from 'ui';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Hero />
      <p className='text-center font-bold mt-8'>Join our partners</p>
      <div className='divider'></div>
      <SocialProof />
      <div className='divider'></div>
      <Benefits />
    </>
  );
}
