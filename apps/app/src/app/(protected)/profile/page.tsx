import { PageWithAuthCard } from '__components/PageWithAuthCard';
import { ColoredDiv } from 'ui';

type Props = {};

// This is the Profile page as seen from the user's perspective with edittable fields
// For Profile page as seen from other users' perspective, see freelancers/[userId].tsx
export default function ProfilePageUser(props: Props) {
  return (
    <PageWithAuthCard>
      {/* <ColoredDiv
        color='yellow'
        direction='top'
        height={10.5}
        className='z-10 left-16 bottom-1/2'
      /> */}
      <div className='flex flex-col gap-4 w-full'>
        <h1>ProfilePageUser</h1>
        <ColoredDiv color='orange' direction='right' height={6} className='z-10' />
        <ColoredDiv color='orange' direction='right' height={6} className='z-10' />
        <ColoredDiv color='orange' direction='right' height={6} className='z-10' />
      </div>
    </PageWithAuthCard>
  );
}
