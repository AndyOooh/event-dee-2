import Sidebar from '../../components/Sidebar/Sidebar';
import { PrivateRoutes } from './PrivateRoutes';

export default function protectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrivateRoutes>
      <div className='flex'>
        <Sidebar />
        <div className='bg-base-300 w-full'>{children}</div>
      </div>
    </PrivateRoutes>
  );
}
