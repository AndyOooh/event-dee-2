import React from 'react';

type Props = {};

export const Step3 = (props: Props) => {
  // const onSubmit: SubmitHandler<FormStep2> = async data => {
  //   const { first_name, last_name, company_name } = data;
  //   const { provider, email, password } = wizardFormData;

  //   let newUser: any;
  //   try {
  //     if (provider === 'google') {
  //       newUser = (await signInWithGoogle()).user;
  //     } else if (provider === 'facebook') {
  //       newUser = (await signInWithFacebook()).user;
  //     } else {
  //       newUser = (await createUserWithEmailAndPassword(email, password)).user;
  //     }
  //   } catch (error) {
  //     console.log('Step3.tsx:67  error:', error);
  //   }

  //   // if (errorEmail || errorFacebook || errorGoogle) {
  //   //   const error = errorEmail || errorFacebook || errorGoogle;
  //   //   return;
  //   // }

  //   try {
  //     const userDocRef = doc(db, 'users', newUser?.uid);
  //     console.log('🚀  file: SignupMemberRight.tsx:84  userDocRef:', userDocRef);

  //     await updateProfile({
  //       displayName: first_name,
  //     });
  //     await updateDoc(userDocRef, {
  //       displayName: name,
  //       last_name: last_name,
  //       type: 'business',
  //     });
  //   } catch (error) {
  //     console.log('🚀  file: Step2.tsx:90  error:', error);
  //   }
  // };

  return <div>Step3</div>;
};
