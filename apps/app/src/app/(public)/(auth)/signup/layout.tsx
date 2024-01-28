import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Dee - Signup',
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
