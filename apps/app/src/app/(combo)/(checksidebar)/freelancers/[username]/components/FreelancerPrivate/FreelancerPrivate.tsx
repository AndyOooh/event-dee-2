import { ColoredDiv } from '@repo/ui';
import { FreelancerLeft } from './FreelancerLeft';
import { FreelancerRight } from './FreelancerRight';
import { UserProvider } from 'app/(protected)/components/Providers/UserProvider';

export const FreelancerPrivate = () => {
  return (
    <UserProvider>
      <div className="w-full">
        <div className="relative mx-auto">
          <ColoredDiv color="green" direction="right" height={10.5} className="z-10 -top-10" />
        </div>
        <div className="flex gap-8 static">
          <FreelancerLeft />
          <FreelancerRight />
        </div>
      </div>
    </UserProvider>
  );
};
