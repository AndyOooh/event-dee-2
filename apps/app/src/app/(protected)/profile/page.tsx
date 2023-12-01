'use client';

import { ProfilePhoto } from './components/profilePhoto';
import { PersonalInfo } from './components/personalInformation/PersonalInfo';
import { WorkInfo } from './components/workInformation/WorkInfo';
import { LinksInfo } from './components/links/LinksInfo';
import { GetToKnow } from './components/getToKnow/GetToKnow';
import { ActionButton } from 'app/(public)/(auth)/signup/components/ActionButton';
import { db } from '__firebase/clientApp';
import { doc, updateDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../components/Providers/CurrentUserProvider';

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  invite_link: string;
  province: string;
  gender: string;
  pronouns: string;
};

/*
 * This is the Profile page as seen from the user's perspective with edittable fields
 * For Profile page as seen from other users' perspective, see freelancers/[userId].tsx
 */
export default function ProfilePageUser() {
  const { currentUser } = useContext(UserContext);

  const {
    register,
    setValue,
    setError,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onTouched',
    // resolver: yupResolver(step1Schema),
    defaultValues: {
      //   provider: 'email',
    },
  });

  const onSubmit = async (data: any) => {
    try {
      console.log('On submit data: ', data);
      const userDocRef = doc(db, 'users', currentUser.uid);
      const res = await updateDoc(userDocRef, data);

      return;
    } catch (error) {
      console.log('🚀  file: WorkInfo.tsx:59  error:', error);
    }
  };

  const sections = [
    // {
    //   title: 'Profile photo',
    //   element: <ProfilePhoto />,
    // },
    {
      title: 'Personal information',
      element: <PersonalInfo register={register} />,
    },
    {
      title: 'Work information',
      element: <WorkInfo register={register} />,
    },
    {
      title: 'Links',
      element: <LinksInfo register={register} />,
    },
    {
      title: 'Getting to know you better',
      element: <GetToKnow register={register} />,
    },
  ];

  return (
    <div className='flex flex-col gap-4 w-full'>
      <h1 className='text-3xl'>Profile Settings</h1>
      <div className='flex flex-col gap-4'>
        <div key={'Profile photo'} className='flex flex-col gap-2'>
          <h2 className='text-xl'>{'Profile photo'}</h2>
          <div className='card bg-base-100'>
            <div className='card-body'>
              <ProfilePhoto />
            </div>
            {/* <div className='card-body'>{section.element}</div> */}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {sections.map(section => (
            <div key={section.title} className='flex flex-col gap-2'>
              <h2 className='text-xl'>{section.title}</h2>
              <div className='card bg-base-100'>
                <div className='card-body'>{section.element}</div>
              </div>
            </div>
          ))}
          <div className='w-full sticky bottom-0 p-4'>
            <ActionButton text='Update' />
          </div>
        </form>
      </div>
    </div>
  );
}
