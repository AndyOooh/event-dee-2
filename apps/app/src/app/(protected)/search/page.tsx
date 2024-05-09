import type { Metadata } from 'next';

import { styles } from '__styles/styles';
import { ComingSoon } from '@repo/ui';

export const metadata: Metadata = {
  title: 'Search',
};

export default function SearchPage() {
  return <ComingSoon pageName="Search" containerClass={styles.innerWidth} />;
}
