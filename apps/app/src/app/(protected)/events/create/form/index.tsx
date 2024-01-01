'use client';

import React, { useContext, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { getChangedFormData } from '__utils/helpers';
import { db } from '__firebase/clientApp';
import { ActionButton } from 'ui';
import { EventInfo } from './event-info';
import { IcreateEventSchema, createEventSchema } from './event-info/validation';

export const CreateEventForm = () => {
  const { currentUser } = useContext(CurrUserContext);

  const {
    control,
    register,
    watch,
    reset,
    handleSubmit,
    formState: {
      errors,
      isDirty,
      isValid,
      isSubmitting,
      isSubmitSuccessful,
      dirtyFields,
      defaultValues,
    },
  } = useForm<IcreateEventSchema>({
    mode: 'onTouched',
    // resolver: yupResolver(createEventSchema({ initialEmail: currentUser?.email })),
    resolver: yupResolver(createEventSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onError = (errors: any, e: any) => {
    console.log('🚀  file: WorkInfo.tsx:52  data:', watch());
    console.log('🚀  file: WorkInfo.tsx:52  errors:', errors, e);
  };

  //   const onTest = () => {
  //     const data = watch();
  //     const changedData = getChangedFormData(data, dirtyFields);
  //     console.log('🚀  file: index.tsx:66  data:', data);
  //     console.log('🚀  file: index.tsx:66  dirtyFields:', dirtyFields);
  //     console.log('🚀  file: index.tsx:66  filteredData:', changedData);
  //     console.log('🚀  file: index.tsx:66  isValid:', isValid);
  //     console.log('🚀  file: index.tsx:66  errors:', errors);
  //     console.log('🚀  file: index.tsx:66  defaultValues*********************:', defaultValues);
  //   };

  const onSubmit = async (data: IcreateEventSchema) => {
    try {
      const changedData = getChangedFormData(data, dirtyFields);

      const userDocRef = doc(db, 'users', currentUser.uid);
      const res = await updateDoc(userDocRef, data);

      return;
    } catch (error) {
      console.log('🚀  file: WorkInfo.tsx:59  error:', error);
    }
  };

  const sections = [
    {
      title: 'Personal information',
      element: <EventInfo register={register} errors={errors} />,
    },
    // {
    //   title: 'Work information',
    //   element: <WorkInfo register={register} />,
    // },
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
          {/* <button type='button' onClick={onTest} className='btn btn-neutral'>
            Test
          </button> */}
        </div>
      </form>
      <DevTool control={control} />
    </>
  ) : null;
};
