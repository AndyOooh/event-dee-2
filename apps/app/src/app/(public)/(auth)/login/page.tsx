import LoginLeft from './left/LoginLeft';
import LoginRight from './LoginRight';
import { DividedPage } from '../components/DividedPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

function Login() {
  return <DividedPage left={<LoginLeft />} right={<LoginRight />} leftColor='secondary' />;
}

export default Login;
