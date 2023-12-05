import { PhotoForm } from './components/photo-form';
import { EditProfileForm } from './components/form';

/*
 * This is the Profile page as seen from the user's perspective with edittable fields
 * For Profile page as seen from other users' perspective, see freelancers/[userId].tsx
 */
export default function ProfilePageUser() {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <h1 className='text-3xl'>Profile Settings</h1>
      <div className='flex flex-col'>
        <div key={'Profile photo'} className='flex flex-col gap-2'>
          {/* <h2 className='text-xl'>Profile photo</h2> */}
          <div className='card bg-base-100'>
            <div className='card-body'>
              <PhotoForm />
            </div>
          </div>
        </div>
        <EditProfileForm />
      </div>
    </div>
  );
}

{
  /* <div className='card-body'>{section.element}</div> */
}
