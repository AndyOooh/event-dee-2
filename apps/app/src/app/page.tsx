import Image from 'next/image';
import Sidebar from '../components/Sidebar/Sidebar';
import { Button } from 'ui';
// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] }) // might be an issue with downloading G fonts

export default function Home() {
  return (
    <>
      {/* <h1>HomePage</h1> */}
      <Sidebar />
      <Button />
    </>
  );
}
