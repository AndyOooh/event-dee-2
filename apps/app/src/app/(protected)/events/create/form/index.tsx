'use client';

import React, { useContext, useEffect } from 'react';
import { addDoc, arrayUnion, collection, doc, increment, updateDoc } from 'firebase/firestore';
import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { onError, onTestForm } from '__utils/helpers';
import { db, getCloudFunction } from '__firebase/clientApp';
import { ActionButton } from 'ui';
import { EventInfo } from './event-info';
import { IcreateEventSchema, createEventSchema } from './validation';
import { EventLocation } from './event-location';
import { EventRoles } from './event-roles';

export const CreateEventForm = () => {
  const { currentUser } = useContext(CurrUserContext);

  const { control, register, watch, setValue, getValues, reset, handleSubmit, formState } =
    useForm<IcreateEventSchema>({
      mode: 'onTouched',
      resolver: yupResolver(createEventSchema),
    });
  const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState;
  const address = watch('location.address');

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: IcreateEventSchema) => {
    try {
      // Step 1: Add a new entry to the "events" collection
      const eventsCollectionRef = collection(db, 'events');

      /*
       * Fetch metaData/events doc to get currentId for events.
       * Perhaps this can be done using const eventsDocRef = doc(db, 'metaData', 'events') ??
       */
      const fetchDocById = getCloudFunction('fetchDocById');
      const { data: eventsMetadata }: any = await fetchDocById({
        collectionName: 'metaData',
        id: 'events',
      });

      const newEventRef = await addDoc(eventsCollectionRef, {
        ...data,
        event_id: eventsMetadata.currentId + 1,
        creatorUid: currentUser.uid,
      });

      // Step 2: Get the reference to the newly created event
      const eventDocId = newEventRef.id;

      // Step 3: Update the current user's document with a reference to the new event
      const userDocRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userDocRef, {
        events: arrayUnion({ eventId: eventDocId }),
      });

      /* update metaData/events */
      const eventsDocRef = doc(db, 'metaData', 'events');
      await updateDoc(eventsDocRef, {
        currentId: increment(1),
      });
    } catch (error) {
      console.error('Error submitting event:', error);
    }
  };

  const sections = [
    {
      title: 'Event Roles',
      element: (
        <EventRoles
          register={register}
          control={control}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
        />
      ),
    },
    {
      title: 'Event details',
      element: <EventInfo register={register} errors={errors} />,
    },
    {
      title: 'Event location',
      element: (
        <EventLocation register={register} errors={errors} setValue={setValue} address={address} />
      ),
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
          {process.env.NODE_ENV === 'development' && (
            <button
              type='button'
              onClick={() => onTestForm(formState, getValues())}
              className='btn btn-neutral'>
              Test
            </button>
          )}
        </div>
      </form>
      {process.env.NODE_ENV === 'development' && <DevTool control={control} />}
    </>
  ) : null;
};
