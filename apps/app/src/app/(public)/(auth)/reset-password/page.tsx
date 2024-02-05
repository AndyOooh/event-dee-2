import { styles } from '__styles/styles';
import { Metadata } from 'next';
import { ComingSoon } from 'ui';

export const metadata: Metadata = {
  title: 'Reset Password',
};

export default function ResetPasswordPage() {
  return (
    <div>
      <ComingSoon pageName='Reset Password' containerClass={styles.innerWidth} />
    </div>
  );
}
