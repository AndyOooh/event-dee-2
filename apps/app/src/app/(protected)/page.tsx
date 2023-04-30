import { AuthCard } from '../../components/AuthCard';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Button } from 'ui';

export default function Home() {
  return (
    <div className='w-full p-4'>
      <div className='flex justify-end'>
        <AuthCard />
      </div>
    </div>
  );
}
