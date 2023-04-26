import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import { Button, ColoredDiv } from 'ui';
import { SocialProof } from '../components/SocialProof';
// import { NewButton } from 'ui-two';
// import { Button, YelloButton } from 'ui';

const motorshow1 =
  'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2022/essen-motor-show-2022/bmwm-essen-motor-show-stage-06.jpg.asset.1670412923184.jpg';
const motorshow2 =
  'https://cdn.encoreglobal.com/wp-content/uploads/sites/5/2020/08/27021550/set-design-awardsnigh-aha-nsw.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className='w-5/6 mx-auto flex flex-col items-center justify-center gap-4'>
        <div className='hero main-height bg-base-200'>
          <div className='hero-content flex-col lg:flex-row-reverse gap-36'>
            <div className='flex flex-col items-center justify-center gap-4'>
              <img src={motorshow1} className='max-w-lg rounded-lg shadow-2xl' />
              <img src={motorshow2} className='max-w-lg rounded-lg shadow-2xl' />
            </div>
            <div>
              <h1 className='text-5xl font-bold'>Hire event professionals hassle-free today!</h1>
              <div className='divider' />
              <button className='btn btn-primary'>Get Started</button>
              <p className='py-6'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center font-bold mt-8'>Join our partners</p>
      <div className='divider'></div>
      <SocialProof />
      <div className='divider'></div>
      {/* 
     <ColoredDiv color='blue' width='10' height='10' />
     <Button /> */}
    </>
  );
}
