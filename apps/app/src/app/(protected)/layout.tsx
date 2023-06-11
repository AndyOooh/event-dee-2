import { PageWithAuthCard } from '__components/PageWithAuthCard';
import Sidebar from '../../components/Sidebar/Sidebar';
import { CurrentUserProvider } from './components/Providers/CurrentUserProvider';
import { PrivateRoutes } from './components/Providers/PrivateRoutes';

export default function protectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrivateRoutes>
      <CurrentUserProvider>
        <div className='flex'>
          <Sidebar />
          <PageWithAuthCard>{children}</PageWithAuthCard>
          {/* <div className='bg-base-300 w-full'>{children}</div> */}
        </div>
      </CurrentUserProvider>
    </PrivateRoutes>
  );
}
