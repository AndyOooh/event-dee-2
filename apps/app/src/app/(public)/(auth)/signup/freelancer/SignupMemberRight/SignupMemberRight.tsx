'use client';

import React, { ChangeEventHandler } from 'react';
import { Step1 } from './steps/Step1';
import { Step2 } from './steps/Step2';
import { Step3 } from './steps/Step3';
import { RightSide } from '../../../components/RightSide';
import { useRecoilValue } from 'recoil';
import { wizardForm } from '../../../../../../atoms/signupFreelancerAtom';

export type OnChange = ChangeEventHandler<HTMLInputElement>;

export const SignupMemberRight = () => {
  const wFormData = useRecoilValue(wizardForm);
  const { step } = wFormData;

  const header =
    step === 1 ? 'Become a member' : step === 2 ? 'Create your profile' : 'Upload a Profile Photo';

  return (
    <RightSide step={step} header={header}>
      {step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : <Step3 />}
    </RightSide>
  );
};
