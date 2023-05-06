import { SignupMemberLeft } from './SignupMemberLeft/SignupMemberLeft';
import { SignupMemberRight } from './SignupMemberRight/SignupMemberRight';
import { DividedPage } from '../../components/DividedPage';

type Props = {};

function Signup({}: Props) {
  return (
    // <DividedPage left={<SignupMemberLeft />} right={<SignupMemberRight />} leftColor='secondary' />
    <div className='flex min-h-screen'>
      <SignupMemberLeft />
      <SignupMemberRight />
    </div>
  );
}

export default Signup;
