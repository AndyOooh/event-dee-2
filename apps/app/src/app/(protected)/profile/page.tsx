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
import { CurrUserContext } from '../components/Providers/CurrentUserProvider';
import { DevTool } from '@hookform/devtools';
import { IPersonalInfo } from './components/personalInformation/formArray';
import { IWorkInfo } from './components/workInformation/formArrayWorkInfo';
import { IGetToKnow } from './components/getToKnow/formArrayGetToKnow';
import { IpersonalInfoSchema, personalInfoSchema } from './components/personalInformation/validation';
import { yupResolver } from '@hookform/resolvers/yup';

// ILinks // fix this module and add it to the form data
// type FormValues = IPersonalInfo & IWorkInfo & IGetToKnow;
type FormValues = IpersonalInfoSchema;

/*
 * This is the Profile page as seen from the user's perspective with edittable fields
 * For Profile page as seen from other users' perspective, see freelancers/[userId].tsx
 */
export default function ProfilePageUser() {
  const { currentUser } = useContext(CurrUserContext);

  const {
    control,
    register,
    setValue,
    setError,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onTouched',
    resolver: yupResolver(personalInfoSchema),
    defaultValues: {
      //   provider: 'email',
    },
  });

  const onSubmit = async (data: FormValues) => {
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
      element: <PersonalInfo register={register} errors={errors} />,
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
      <div className='flex flex-col'>
        <div key={'Profile photo'} className='flex flex-col gap-2'>
          <h2 className='text-xl'>Profile photo</h2>
          <div className='card bg-base-100'>
            <div className='card-body'>
              <ProfilePhoto />
            </div>
            {/* <div className='card-body'>{section.element}</div> */}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {sections.map(section => (
            <div key={section.title} className='flex flex-col gap-2 mt-4'>
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
        <DevTool control={control} />
      </div>
    </div>
  );
}
