'use client';

import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { db } from '__firebase/clientApp';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { GetToKnow } from './components/get-to-know';
import { LinksInfo } from './components/links';
import { PersonalInfo } from './components/personal-info';
import { IpersonalInfoSchema, personalInfoSchema } from './components/personal-info/validation';
import { WorkInfo } from './components/work-info';
import { onError, onTestForm } from '__utils/helpers';
import { ActionButton } from 'ui';

export const EditProfileForm = () => {
  const { currentUser } = useContext(CurrUserContext);
  const { control, register, getValues, reset, handleSubmit, formState } =
    useForm<IpersonalInfoSchema>({
      mode: 'onTouched',
      resolver: yupResolver(personalInfoSchema({ initialEmail: currentUser?.email })),
    });
  const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful, dirtyFields } = formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: IpersonalInfoSchema) => {
    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userDocRef, data);

      return;
    } catch (error) {
      console.log('🚀  file: WorkInfo.tsx:59  error:', error);
    }
  };

  const sections = [
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

  return currentUser ? (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        {sections.map(section => (
          <div key={section.title} className='flex flex-col gap-2 mt-4'>
            <h2 className='text-xl'>{section.title}</h2>
            <div className='card bg-base-100'>
              <div className='card-body'>{section.element}</div>
            </div>
          </div>
        ))}

        <div className='w-full sticky bottom-0 p-4'>
          <ActionButton text='Update' disabled={!isDirty || !isValid} loading={isSubmitting} />
          <button
            type='button'
            onClick={() => onTestForm(formState, getValues())}
            className='btn btn-neutral'>
            Test
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  ) : null;
};
