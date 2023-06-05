'use client';

import {
  useUpdateProfile,
  useSignInWithGoogle,
  useSignInWithFacebook,
  useCreateUserWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import { TextInput, FormError } from 'ui';
import { wizardForm, FormStep2 } from '__atoms/signupBusinessAtom';
import { styles } from '__styles/styles';
import { ActionButton } from '../../../components/ActionButton';
import { step2Schema } from '../validation';
import { auth, db, storage } from '__firebase/clientApp';
import { doc, updateDoc } from 'firebase/firestore';
import { uploadString, getDownloadURL } from 'firebase/storage';
import { ref } from 'yup';

type Props = {};

export const Step2 = ({}: Props) => {
  const wizardFormData = useRecoilValue(wizardForm);
  const [updateProfile, loadingUpdate, errorUpdate] = useUpdateProfile(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook, userFb, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
  const [createUserWithEmailAndPassword, userEmail, loadingEmail, errorEmail] =
    useCreateUserWithEmailAndPassword(
      auth
      // {sendEmailVerification: true} // implement later
    );

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStep2>({
    mode: 'onTouched',
    resolver: yupResolver(step2Schema),
  });

  // console.log('🚀  file: Step1.tsx:52  errors:', errors);
  // console.log('🚀  file: Step1.tsx:52  data:', watch());

  const onSubmit: SubmitHandler<FormStep2> = async data => {
    const { first_name, last_name, company_name } = data;
    const { provider, email, password } = wizardFormData;

    let newUser: any;
    try {
      if (provider === 'google') {
        newUser = (await signInWithGoogle()).user;
      } else if (provider === 'facebook') {
        newUser = (await signInWithFacebook()).user;
      } else {
        newUser = (await createUserWithEmailAndPassword(email, password)).user;
      }
    } catch (error) {
      console.log('Step3.tsx:67  error:', error);
    }
    console.log('Step3.tsx:92  newUser:', newUser);

    if (errorEmail || errorFacebook || errorGoogle) {
      const error = errorEmail || errorFacebook || errorGoogle;
      console.log('Step3.tsx:73  error:', error);
      return;
    }

    try {
      const userDocRef = doc(db, 'users', newUser?.uid);
      console.log('🚀  file: SignupMemberRight.tsx:84  userDocRef:', userDocRef);

      // seems redundant to update both auth and firabse user.
      await updateProfile({
        displayName: first_name,
      });
      await updateDoc(userDocRef, {
        displayName: name,
        last_name: last_name,
        // profession: profession,
        // other_skills: other_skills,
        type: 'freelancer',
      });
      // console.log('HERE IS DOWNLOAD URL', downloadURL);
    } catch (error) {
      console.log('🚀  file: Step2.tsx:90  error:', error)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} max-w-md`}>
      <div className='flex gap-4'>
        <TextInput
          name='first_name'
          tooltip='Real name looks more professional and could result in more job opportunitues.'
          register={register}
        />
        <FormError formError={errors?.first_name?.message} />
        <TextInput
          register={register}
          name='last_name'
          tooltip='This is only for official use and will not be public.'
        />
        <FormError formError={errors?.last_name?.message} />
        <TextInput register={register} name='company_name' />
        <FormError formError={errors?.company_name?.message} />
      </div>

      {/* <div className='flex gap-4'>
        <TextInput type='password' autoComplete='new-password' register={register} />
        <FormError formError={errors?.password?.message} />
        <TextInput
          name='confirm_password'
          type='password'
          autoComplete='new-password'
          register={register}
        />
        <FormError formError={errors?.confirm_password?.message} />
      </div> */}
      <ActionButton text='Get Started' />
    </form>
  );
};
