'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { TextInput, FormError } from 'ui';
import { wizardForm, FormStep2 } from '__atoms/signupBusinessAtom';
import { styles } from '__styles/styles';
import { ActionButton } from '../../../components/ActionButton';
import { step2Schema } from '../validation';
import { IStep2Schema } from '../../../freelancer/signup-member-right/validation';

export const Step2 = () => {
  const [, setWFormData] = useRecoilState(wizardForm);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IStep2Schema>({
    mode: 'onTouched',
    resolver: yupResolver(step2Schema),
  });

  const onSubmit: SubmitHandler<FormStep2> = async data => {
    setWFormData(prev => ({
      ...prev,
      ...data,
      step: prev.step + 1,
    }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.formSmall} max-w-md`}>
      <div className='flex gap-4'>
        <TextInput
          name='first_name'
          tooltip='Real name looks more professional and could result in more job opportunitues.'
          register={register}
          label={true}
        />
        <FormError formError={errors?.first_name?.message} />
        <TextInput
          register={register}
          name='last_name'
          tooltip='This is only for official use and will not be public.'
          label={true}
        />
        <FormError formError={errors?.last_name?.message} />
      </div>
      <TextInput name='company_name' register={register} label={true} />
      <FormError formError={errors?.company_name?.message} />
      {/* <TextInput name='company_name' register={register} name='position' label={true} />
        <FormError formError={errors?.company_name?.message} /> */}

      <ActionButton text='Get Started' />
    </form>
  );
};
