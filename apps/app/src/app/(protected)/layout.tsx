import { AuthCard } from '../../components/AuthCard';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { PrivateRoutes } from './PrivateRoutes';

export default function protectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrivateRoutes>
      <div className='flex'>
        <Sidebar />
        
        {/* <Header /> */}
        {children}
      </div>
    </PrivateRoutes>
  );
}
