import { ProfilePhoto } from './components/profilePhoto';
import { PersonalInfo } from './components/personalInformation/PersonalInfo';
import { WorkInfo } from './components/workInformation/WorkInfo';
import { LinksInfo } from './components/links/LinksInfo';
import { GetToKnow } from './components/getToKnow/GetToKnow';

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
      element: <WorkInfo />,
    },
    {
      title: 'Links',
      element: <LinksInfo />,
    },
    {
      title: 'Getting to know you better',
      element: <GetToKnow />,
    },
  ];

  return (
    <div className='flex flex-col gap-4 w-full'>
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
    </div>
  );
}
