import { SocialProof } from './components/SocialProof';
import { Benefits } from './components/Benefits';
import { Hero } from './components/Hero/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <p className='text-center font-bold mt-12 md:mt-8'>Join our partners</p>
      <div className='divider'></div>
      <SocialProof />
      <div className='divider'></div>
      <Benefits />
    </>
  );
}
