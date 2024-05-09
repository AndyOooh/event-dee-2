import { ComingSoon } from '@repo/ui';
import { container } from '../../styles/styles';

export default function AboutPage() {
  return (
    <div>
      <ComingSoon pageName="About" containerClass={container} />
    </div>
  );
}
