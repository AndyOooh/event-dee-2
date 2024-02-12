import type { Metadata } from 'next';

import { styles } from '__styles/styles';
import { ComingSoon } from 'ui';

export const metadata: Metadata = {
  title: 'Payments',
};

export default function SearchPage() {
  return <ComingSoon pageName='Payments' containerClass={styles.innerWidth} />;
}
