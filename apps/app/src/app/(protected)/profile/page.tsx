import { ColoredDiv } from 'ui';
import { ProfilePhoto } from './components/profilePhoto';
import { PersonalInfo } from './components/personalInformation/PersonalInfo';

type Props = {};

// This is the Profile page as seen from the user's perspective with edittable fields
// For Profile page as seen from other users' perspective, see freelancers/[userId].tsx
export default function ProfilePageUser(props: Props) {
  const sections = [
    {
      title: 'Profile photo',
      element: <ProfilePhoto />,
    },
    {
      title: 'Personal information',
      element: <PersonalInfo />,
    },
    {
      title: 'Work information',
      element: <div>Work information</div>,
    },
    {
      title: 'Links',
      element: <div>Links</div>,
    },
    {
      title: 'Getting to know you better',
      element: <div>Getting to know you better...</div>,
    },
  ];

  return (
    <div className='flex flex-col gap-4 w-full'>
      <h1>ProfilePageUser</h1>
      <h1 className='text-3xl'>Profile Settings</h1>
      <div className='flex flex-col gap-4'>
        {sections.map(section => (
          <div key={section.title} className='flex flex-col gap-2'>
            <h2 className='text-xl'>{section.title}</h2>
            <div className='card bg-base-100'>
              <div className='card-body'>{section.element}</div>
            </div>
          </div>
        ))}
      </div>

      {/* <ColoredDiv color='orange' direction='right' height={6} className='z-10' />
      <ColoredDiv color='orange' direction='right' height={6} className='z-10' />
      <ColoredDiv color='orange' direction='right' height={6} className='z-10' /> */}
    </div>
  );
}
