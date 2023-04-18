import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import { Button } from 'ui';
// import { NewButton } from 'ui-two';
// import { Button, YelloButton } from 'ui';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='min-h-96'>
      <Header />
      <h1>Landing page now</h1>
      {/* <Button /> */}
      {/* <YelloButton /> */}
      <button className='btn btn-primary bg-orange-100'>Daisy</button>
      <button className='btn btn-primary bg-cyan-300'>Daisy2</button>
      {/* <div className='flex flex-col gap-4'> */}
      <Button />
      <button className='btn btn-primary'>Hiiii againnn</button>
      {/* </div> */}
    </main>
  );
}
