import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup',
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
