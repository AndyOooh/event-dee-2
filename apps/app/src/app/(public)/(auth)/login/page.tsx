'use client';

import LoginLeft from './left/LoginLeft';
import LoginRight from './LoginRight';
import { DividedPage } from '../components/DividedPage';

type Props = {};

function Login({}: Props) {
  return (
    <>
      <DividedPage left={<LoginLeft />} right={<LoginRight />} leftColor='secondary' />
    </>
  );
}

export default Login;
