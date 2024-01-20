'use client';

import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { useContext, useEffect } from 'react';
import { ErrorOption, useForm } from 'react-hook-form';
import { IchangePasswordSchema, changePasswordSchema } from './validaton';
import { TextInput, FormError, ActionButton } from 'ui';
import { useAuthState, useUpdatePassword } from 'react-firebase-hooks/auth';
import { auth } from '__firebase/clientApp';
import { reAuthenticate } from '__firebase/utilities';
import { watch } from 'fs';

export const ChangePasswordForm = () => {
  const { currentUser } = useContext(CurrUserContext);
  const [updatePassword, updating, error] = useUpdatePassword(auth);
  const [authUser] = useAuthState(auth);
  const { providerId } = authUser.providerData[0];

  const {
    register,
    reset,
    handleSubmit,
    watch,
    control,
    setError,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful, isValidating },
  } = useForm<IchangePasswordSchema>({
    mode: 'onTouched',
    // mode: 'onBlur',
    // mode: 'onSubmit',
    resolver: yupResolver(changePasswordSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (isValidating) {
      console.log('🚀🚀🚀🚀🚀🚀   file: index.tsx:36  isValidating:', isValidating);
      console.log(watch());
      console.log(isValid);
      console.log(errors);
      console.log();
    }
  }, [isValidating, watch, isValid, errors, isDirty]);

  const onError = (errors: any, e: any) => {
    console.log('🚀  file: WorkInfo.tsx:52  errors:', errors, e);
  };

  const onSubmit = async (data: IchangePasswordSchema) => {
    console.log('🚀  file: index.tsx:50  data:', data);
    try {
      const result =
        providerId === 'password'
          ? await reAuthenticate(data.current_password)
          : await reAuthenticate();

      console.log('🚀  file: index.tsx:52  result:', result);
      console.log('ISFBErrror: ', result instanceof Error);

      result instanceof Error
        ? setError('current_password', { message: 'Incorrect password' })
        : updatePassword(data.new_password);

      // updatePassword(data.new_password);

      return;
    } catch (error) {
      setError('new_password', { message: 'Wrong password' });
      console.log('🚀  file: WorkInfo.tsx:59  error:', error);
    }
  };

  const inputArray = Object.keys(changePasswordSchema.fields);
  console.log('🚀  file: index.tsx:74  inputArray:', inputArray);
  providerId === 'password' ? inputArray.splice(1, 0, '') : inputArray.splice(0, 1);

  return currentUser ? (
    <>
      <div>
        <div className='flex flex-col gap-2 mt-4'>
          <h2 className='text-xl'>Change Password</h2>
          <div className='card bg-base-100'>
            <form onSubmit={handleSubmit(onSubmit, onError)} noValidate className='card-body'>
              <div className='w-full grid grid-cols-2 gap-6'>
                {inputArray.map((input: string, idx: number) => {
                  return inputArray.length === 4 && idx === 1 ? (
                    <div key={input}></div>
                  ) : (
                    <div key={input}>
                      <TextInput
                        name={input}
                        // defaultValue={currentUser && currentUser[input]}
                        register={register}
                        label={true}
                        maxW='max-w-md'
                      />
                      <FormError formError={errors?.[input]?.message} />
                    </div>
                  );
                })}
              </div>
              <ActionButton text='Update' disabled={!isDirty || !isValid} loading={isSubmitting} />
            </form>
          </div>
        </div>
      </div>
      {process.env.NODE_ENV === 'development' && <DevTool control={control} />}
    </>
  ) : null;
};
