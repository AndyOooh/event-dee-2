'use client';

import React from 'react';
import { ActionButton, Checkbox, FormError, Select, TextInput } from 'ui';

import { styles } from '../../../../../../../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IStep2Schema, step2Schema } from '../validation';
import { useRecoilState } from 'recoil';
import { FormStep2, wizardForm } from '../../../../../../../atoms/signupFreelancerAtom';

type Props = {};

const professionOptions = [
  {
    label: 'Model',
    value: 'Model',
  },
  {
    label: 'Photographer',
    value: 'Photographer',
  },
  {
    label: 'MC',
    value: 'MC',
  },
];

export const Step2 = ({}: Props) => {
  const [wFormData, setWFormData] = useRecoilState(wizardForm);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IStep2Schema>({
    mode: 'onTouched',
    resolver: yupResolver(step2Schema),
  });

  const onSubmit: SubmitHandler<FormStep2> = data => {
    setWFormData(prev => ({
      ...prev,
      ...data,
      step: prev.step + 1,
    }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formSmall}>
      <TextInput
        name='name'
        tooltip='Real name looks more professional and could result in more job opportunitues.'
        register={register}
      />
      <FormError formError={errors?.name?.message} />
      <TextInput
        register={register}
        name='last_name'
        tooltip='This is only for official use and will not be public.'
      />
      <FormError formError={errors?.last_name?.message} />

      <Select
        name='profession'
        options={professionOptions}
        register={register}
        className=''
        defaultValue='Choose profession'
      />
      {/*as string is a quick fix. check it later */}
      <FormError formError={errors?.profession?.message as string} />

      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>What jobs are you intested in?</span>
        </label>
        <div className='flex justify-around'>
          <Checkbox name='other_skills' value='model' register={register} className='' />
          <Checkbox name='other_skills' value='photographer' register={register} className='' />
          <Checkbox name='other_skills' value='MC' register={register} className='' />
        </div>
      </div>
      <FormError formError={errors?.other_skills?.message} />
      <ActionButton text='Step 3' />
    </form>
  );
};
