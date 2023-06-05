import { PublicRoutes } from './PublicRoutes';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <PublicRoutes>{children}</PublicRoutes>;
}
