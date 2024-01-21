import { HomeMain } from './components/HomeMain/HomeMain';
import { HomeRight } from './components/HomeRight/HomeRight';

export default function Home() {
  console.log('Home')
  return (
    <>
      <HomeMain />
      <HomeRight />
    </>
  );
}
