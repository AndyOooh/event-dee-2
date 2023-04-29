import { PublicRoutes } from './PublicRoutes';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <PublicRoutes>
      <div className='flex min-h-screen w-full'>{children}</div>;
    </PublicRoutes>
  );
}
