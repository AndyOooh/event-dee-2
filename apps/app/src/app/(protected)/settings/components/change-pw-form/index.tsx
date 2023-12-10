'use client';

import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { db } from '__firebase/clientApp';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { ActionButton } from 'app/(public)/(auth)/signup/components/ActionButton';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { is } from 'date-fns/locale';
import { ValidateOptions } from 'yup';
import { getChangedFormData } from '__utils/helpers';
import { IchangePasswordSchema, changePasswordSchema } from './validaton';

export const ChangePasswordForm = () => {
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
    formState: {
      errors,
      isDirty,
      isValid,
      isSubmitting,
      isSubmitSuccessful,
      dirtyFields,
      defaultValues,
    },
  } = useForm<IchangePasswordSchema>({
    mode: 'onTouched',
    resolver: yupResolver(changePasswordSchema),
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

  const onTest = () => {
    const data = watch();
    const changedData = getChangedFormData(data, dirtyFields);
    // console.log('🚀  file: index.tsx:66  data:', data);
    // console.log('🚀  file: index.tsx:66  dirtyFields:', dirtyFields);
    // console.log('🚀  file: index.tsx:66  filteredData:', changedData);
    // console.log('🚀  file: index.tsx:66  isValid:', isValid);
    // console.log('🚀  file: index.tsx:66  errors:', errors);
    // console.log('🚀  file: index.tsx:66  defaultValues*********************:', defaultValues);
  };

  const onSubmit = async (data: IchangePasswordSchema) => {
    try {
      console.log('On submit data: ', data);
      console.log('dirtyFields: ', dirtyFields);
      const changedData = getChangedFormData(data, dirtyFields);

      const userDocRef = doc(db, 'users', currentUser.uid);
      // console.log('🚀  file: index.tsx:62  userDocRef:', userDocRef);
      const res = await updateDoc(userDocRef, data);
      // console.log('🚀  file: index.tsx:77  res:', res);

      return;
    } catch (error) {
      console.log('🚀  file: WorkInfo.tsx:59  error:', error);
    }
  };

  return currentUser ? (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div key='password' className='flex flex-col gap-2 mt-4'>
          <h2 className='text-xl'>Change Password</h2>
          <div className='card bg-base-100'>
            <div className='card-body'>
              <div>Section Element</div>
            </div>
          </div>
        </div>

        <div className='w-full sticky bottom-0 p-4'>
          <ActionButton text='Update' disabled={!isDirty || !isValid} loading={isSubmitting} />
          <button type='button' onClick={onTest} className='btn btn-neutral'>
            Test
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  ) : null;
};
