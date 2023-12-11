'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { auth } from '__firebase/clientApp';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { ActionButton } from 'app/(public)/(auth)/signup/components/ActionButton';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IdeleteUserSchema, deleteUserSchema } from './validation';
import { TextInput, FormError } from 'ui';
import { useAuthState, useDeleteUser } from 'react-firebase-hooks/auth';
import { reAuthenticate } from '__firebase/utilities';
import { useRouter } from 'next/navigation';
import { DevTool } from '@hookform/devtools';

export const DeleteAccountForm = () => {
  const { currentUser } = useContext(CurrUserContext);
  const [authUser] = useAuthState(auth);
  const { providerId } = authUser.providerData[0];
  const [deleteUser, loading_delete, error_delete] = useDeleteUser(auth);
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    setError,
    control,
    watch,

    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful, dirtyFields },
  } = useForm<IdeleteUserSchema>({
    mode: 'onTouched',
    resolver: providerId === 'password' ? yupResolver(deleteUserSchema) : null,
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: IdeleteUserSchema) => {
    try {
      const result =
        providerId === 'password' ? await reAuthenticate(data.password) : await reAuthenticate();

      result instanceof Error
        ? setError('password', { message: 'Incorrect password' })
        : await deleteUser();

      router.push('/');

      return;
    } catch (error) {
      console.log('🚀  file: WorkInfo.tsx:59  error:', error);
    }
  };

  const buttonDisabled = providerId === 'password' ? !isDirty || !isValid : false;

  const onTest = () => {
    const data = watch();
    // const changedData = getChangedFormData(data, dirtyFields);
    console.log('🚀  file: index.tsx:66  data:', data);
    console.log('🚀  file: index.tsx:66  dirtyFields:', dirtyFields);
    // console.log('🚀  file: index.tsx:66  filteredData:', changedData);
    console.log('🚀  file: index.tsx:66  isValid:', isValid);
    console.log('🚀  file: index.tsx:66  errors:', errors);
  };

  return currentUser ? (
    <div className='flex flex-col gap-2 mt-4'>
      <h2 className='text-xl'>Delete Account</h2>
      <div className='card bg-base-100'>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className='card-body'>
          <p>Deleting your account will remove all of your information from our database.</p>
          <p className='font-bold text-error'>This cannot be undone.</p>
          {/* <div className='w-full grid grid-cols-2 gap-6 align-middle justify-center'> */}
          <div className='w-full flex flex-col gap-6 items-center'>
            {providerId === 'password' && (
              <div className='w-fit'>
                <TextInput
                  name={'password'}
                  defaultValue={currentUser && currentUser['password']}
                  register={register}
                  label={true}
                  maxW='max-w-md'
                />
                <FormError formError={errors?.['password']?.message} />
              </div>
            )}
            <div className='flex align-bottom'>
              <ActionButton
                text='Delete my account'
                disabled={buttonDisabled}
                loading={isSubmitting}
                className='btn-error'
              />
            </div>
          </div>
          <div></div>
          <div className='w-full sticky bottom-0 p-4'>
            <button type='button' onClick={onTest} className='btn btn-neutral'>
              Test
            </button>
          </div>
        </form>
      </div>
      {/* <DevTool control={control} /> */}
    </div>
  ) : null;
};
