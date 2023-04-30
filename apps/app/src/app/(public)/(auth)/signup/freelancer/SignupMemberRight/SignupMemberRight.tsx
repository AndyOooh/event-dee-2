'use client';

import React, { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SignUp from '../../../../../../components/modals/auth/inputs/SignUp';
import { auth } from '../../../../../../firebase/clientApp';
import { FIREBASE_ERRORS } from '../../../../../../firebase/errors';
import { ActionButton } from '../../components/ActionButton';
import { CheckLegal } from '../../components/CheckLegal';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

type Props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export type HandleChange = ChangeEventHandler<HTMLInputElement>;

export const SignupMemberRight = ({ page, setPage }: Props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    checkedLegal: false,
  });
  const [formError, setFormError] = useState('');
  const [createUserWithEmailAndPassword, user, loading, authError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

    setPage(2);

    // Valid form inputs - this is for handle submit page 2
    // createUserWithEmailAndPassword(form.email, form.password);
    // if (authError) {
    //   console.log('🚀  file: SignupMemberRight.tsx:48  authError:', authError);
    //   setFormError(authError.message);
    // }
  };

  const handleChange: HandleChange = ({ target: { name, value } }) => {
    if (name === 'checkbox') {
      setForm(prev => ({
        ...prev,
        checkedLegal: !form.checkedLegal,
      }));
    }
    console.log('🚀  file: SignupMemberRight.tsx:50  name:', name, value);
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return page === 1 ? (
    <Page1
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formError={formError}
      authError={authError}
      loading={loading}
    />
  ) : (
    <Page2
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formError={formError}
      authError={authError}
      loading={loading}
    />
  );
};

export default SignUp;
