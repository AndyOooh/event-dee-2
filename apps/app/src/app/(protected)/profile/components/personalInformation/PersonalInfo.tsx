'use client';

import { styles } from '__styles/styles';
import { UserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ActionButton } from 'app/(public)/(auth)/signup/components/ActionButton';
import { ReactSelect, SearchableSelect, SearchableSelect2, Select, TextInput } from 'ui';
// import { formArrayPersonalInfo } from '../';
import { db } from '__firebase/clientApp';
import { doc, updateDoc } from 'firebase/firestore';
import { formArrayPersonalInfo } from '../formArrayPersonalInfo';

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  invite_link: string;
  province: string;
  gender: string;
  pronouns: string;
};

export const PersonalInfo = () => {
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
      console.log('🚀  file: PersonalInfo.tsx:53  data:', data);
      console.log('in SUBMIT');
      console.log('Updating user uid: ', currentUser.uid);

      // TODO: compare data with currentUser and only update the ones that are different
      // If nothing is different, don't update (return and show a message)

      const userDocRef = doc(db, 'users', currentUser.uid);
      const res = await updateDoc(userDocRef, data);
      // console.log('🚀  file: PersonalInfo.tsx:55  res:', res);

      return;
    } catch (error) {
      console.log('🚀  file: PersonalInfo.tsx:59  error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className='w-full grid grid-cols-2 gap-6'>
        {currentUser
          ? formArrayPersonalInfo.map((info, index) => {
              return info.type === 'text' ? (
                <div key={info.title}>
                  <TextInput
                    name={info.title}
                    defaultValue={currentUser && currentUser[info.title]}
                    register={register}
                    label={true}
                    maxW='max-w-md'
                  />
                  {/* <FormError formError={errors?.email?.message} /> */}
                </div>
              ) : (
                // <ReactSelect
                //   key={info.title}
                //   name={info.title}
                //   defaultValue={currentUser && currentUser[info.title]}
                //   // defaultValue={currentUser && { value: 'heyy22', label: 'Heyyyy'  }}
                //   // defaultValue={'dasdasd'}
                //   options={info.options}
                //   register={register}
                //   label={true}
                //   maxW='max-w-md'
                // />
                // <SearchableSelect optionsProp={info.options} />
                // <div key={info.title}>
                //   <SearchableSelect2
                //     name={info.title}
                //     defaultValue={currentUser && currentUser[info.title]}
                //     options={info.options}
                //     register={register}
                //     label={true}
                //     className=''
                //     maxW='max-w-md'
                //     // value,
                //     id={info.title}
                //     selectedVal={select2Value}
                //     handleChange={val => setSelect2Value(val)}
                //   />
                // </div>
                <div key={info.title}>
                  <Select
                    name={info.title}
                    defaultValue={currentUser && currentUser[info.title]}
                    options={info.options}
                    register={register}
                    label={true}
                    className=''
                    maxW='max-w-md'
                  />
                </div>
              );
            })
          : null}
      </div>

      <>
        <ActionButton text='Update' />
      </>
    </form>
  );
};
