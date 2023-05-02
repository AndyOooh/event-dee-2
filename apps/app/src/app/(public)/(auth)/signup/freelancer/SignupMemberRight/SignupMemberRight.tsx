'use client';

import React, {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SignUp from '../../../../../../components/modals/auth/inputs/SignUp';
import { auth, db, storage } from '../../../../../../firebase/clientApp';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { onSelectImage } from '../../../../../../utils/helpers';
import { Step3 } from './Step3';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';

type Props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

//  TODO: handle validation better
//  TODO: handle image uploads
//  TODO: Show G and FB buttins. They will only set login methid to FB/G '
//  and in step three we will use that call whochever creator function we want

export type OnChange = ChangeEventHandler<HTMLInputElement>;

export const SignupMemberRight = ({ page, setPage }: Props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    checkedLegal: false,
  });
  const [formError, setFormError] = useState('');
  const [selectedFile, setSelectedFile] = useState<string>();
  const selectFileRef = useRef<HTMLInputElement>(null);
  const [createUserWithEmailAndPassword, user, loading, authError] =
    useCreateUserWithEmailAndPassword(
      auth
      // {sendEmailVerification: true} // implement later
    );

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formValid = true;
    if (formError) setFormError('');
    // improve this validation
    if (!form.email.includes('@')) {
      setFormError('Please enter a valid email');
      formValid = false;
    }
    if (form.password.length < 6) {
      setFormError('Password must be at least 6 characters');
      formValid = false;
    }
    if (form.password !== form.confirmPassword) {
      setFormError('Passwords do not match');
      formValid = false;
    }
    if (!form.checkedLegal) {
      setFormError('Please agree to the terms and conditions');
      formValid = false;
    }
    if (!formValid) return;
    console.log('form is valid!');

    // Valid form inputs
    const { user: newUser } = await createUserWithEmailAndPassword(form.email, form.password);
    if (authError) {
      console.log('🚀  file: SignupMemberRight.tsx:48  authError:', authError);
      setFormError(authError.message);
      return;
    }

    console.log('New User Created: ', newUser);
    console.log('auth_________________', auth)

    


    // TODO Update user profile with name together with photo.
    // remember, cloud functions have created a user doc in firestore

    if (selectedFile) {
      const userDocRef = doc(db, 'users', newUser?.uid);
      console.log('🚀  file: SignupMemberRight.tsx:84  userDocRef:', userDocRef);
      const imageRef = ref(storage, `posts/${userDocRef.id}/imageUrl`);
      await uploadString(imageRef, selectedFile, 'data_url');
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(userDocRef, {
        imageURL: downloadURL,
      });
      console.log('HERE IS DOWNLOAD URL', downloadURL);
    }
  };

  const onChange: OnChange = ({ target: { name, value } }) => {
    if (name === 'checkbox') {
      setForm(prev => ({
        ...prev,
        checkedLegal: !form.checkedLegal,
      }));
    }
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onNextStep = () => {
    setPage(prev => prev + 1);
  };

  // Can improve ts from helpers.ts and use here
  const imageUploadProps = {
    selectedFile,
    setSelectedFile,
    selectFileRef,
    onSelectImage: (e: ChangeEvent<HTMLInputElement>) => onSelectImage(e, setSelectedFile),
  };

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-4 w-full max-w-xs mx-auto'>
      {page === 1 ? (
        <Step1 handleChange={onChange} onClick={onNextStep} formError={formError} />
      ) : page === 2 ? (
        <Step2 handleChange={onChange} onClick={onNextStep} formError={formError} />
      ) : (
        <Step3
          handleChange={onChange}
          imageUploadProps={imageUploadProps}
          // formError={formError}
          authError={authError}
          loading={loading}
        />
      )}
    </form>
  );
};

export default SignUp;
