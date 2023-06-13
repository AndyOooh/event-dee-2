'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { styles } from '__styles/styles';
import { UserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { step1Schema } from './validation';
import { ActionButton } from 'app/(public)/(auth)/signup/components/ActionButton';
import { FormError, ReactSelect, SearchableSelect, SearchableSelect2, Select, TextInput } from 'ui';
import { formArray } from '../formArray';

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
  console.log('🚀  file: PersonalInfo.tsx:25  currentUser:', currentUser)
  const [formData, setFormData] = useState({});
  const [select2Value, setSelect2Value] = useState('');

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
    resolver: yupResolver(step1Schema),
    defaultValues: {
      //   provider: 'email',
    },
  });
  const onSubmit = async (data: any) => {
    // console.log('in SUBMIT');
    // const email = watch('email');
    // const checkEmailExists = getCloudFunction('checkEmailExists'); // Our custom function
    // const emailExists = (await checkEmailExists(email)).data;
    // console.log('🚀  file: Step1.tsx:52  emailExists:', emailExists);
    // if (emailExists) {
    //   setError('email', { message: 'Email already exists' });
    //   return;
    // }

    setFormData(prev => ({
      ...prev,
      ...data,
    }));
    <s></s>;
    return;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className='w-full grid grid-cols-2 gap-6'>
        {formArray.map((info, index) => {
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
            <ReactSelect
              name={info.title}
              // defaultValue={currentUser && { value: currentUser[info.title] }}
              defaultValue={currentUser && { value: 'heyy', label: 'Heyyyy'  }}
              // defaultValue={'dasdasd'}
              options={info.options}
              register={register}
              label={true}
              maxW='max-w-md'
            />
            //   <SearchableSelect optionsProp={info.options} />
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
            // <div key={info.title}>
            //   <Select
            //     name={info.title}
            //     defaultValue={currentUser && currentUser[info.title]}
            //     options={info.options}
            //     register={register}
            //     label={true}
            //     className=''
            //     maxW='max-w-md'
            //   />
            // </div>
          );
        })}
      </div>

      {/* <select className='select w-full max-w-xs'>
        <option disabled selected>
          Pick your favorite Simpson
        </option>
        <option>Homer</option>
        <option>Marge</option>  
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select> */}

      <>
        <ActionButton text='Update' />
      </>
    </form>
  );
};
