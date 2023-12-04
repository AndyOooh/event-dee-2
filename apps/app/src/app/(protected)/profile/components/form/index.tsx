'use client';

import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { db } from '__firebase/clientApp';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { ActionButton } from 'app/(public)/(auth)/signup/components/ActionButton';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { GetToKnow } from './components/get-to-know';
import { LinksInfo } from './components/links';
import { PersonalInfo } from './components/personal-info';
import {
  IpersonalInfoSchema,
  personalInfoSchema,
} from './components/personal-info/validation';
import { WorkInfo } from './components/work-info';
import { is } from 'date-fns/locale';

// ILinks // fix this module and add it to the form data
// type FormValues = IPersonalInfo & IWorkInfo & IGetToKnow;
type FormValues = IpersonalInfoSchema;

export const EditProfileForm = () => {
  const { currentUser } = useContext(CurrUserContext);

  const {
    control,
    register,
    setValue,
    setError,
    getValues,
    watch,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    // mode: 'onTouched', // no feedback while typing
    // mode: 'onBlur', // only on/off focus
    resolver: yupResolver(personalInfoSchema),
    // defaultValues: {
    //   //   provider: 'email',
    // },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  //   console.log('watch dob', watch('dob'));

  const onError = (errors: any, e: any) =>
    console.log('🚀  file: WorkInfo.tsx:52  errors:', errors, e);

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
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};
