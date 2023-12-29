import { CurrentUserProvider } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { PublicRoutes } from './PublicRoutes';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    // <CurrentUserProvider>
      <PublicRoutes>{children}</PublicRoutes>
    // </CurrentUserProvider>
  );
}
