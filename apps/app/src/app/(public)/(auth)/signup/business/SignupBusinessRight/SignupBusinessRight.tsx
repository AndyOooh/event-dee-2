'use client';

import { useRecoilState } from 'recoil';

import { wizardForm } from '__atoms/signupBusinessAtom';
// import { RightSide } from 'app/(public)/(auth)/components/RightSide';
import { ChangeEventHandler } from 'react';
import { Step1 } from './steps/Step1';
import { Step2 } from './steps/Step2';
import { Step3 } from './steps/Step3';
import { RightSide } from '../../../components/RightSide';

export type OnChange = ChangeEventHandler<HTMLInputElement>;

export const SignupBusinessRight = () => {
  const [wFormData, setWFormData] = useRecoilState(wizardForm);
  const { step } = wFormData;

  const header =
    step === 1
      ? 'Get ready to hire top talent.'
      : step === 2
      ? 'A few more details.'
      : 'Upload a Profile Photo.';

  return (
    <RightSide step={step} header={header}>
      {step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : <Step3 />}
    </RightSide>
  );
};
