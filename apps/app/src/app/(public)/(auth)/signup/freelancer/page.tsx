import { SignupMemberLeft } from './signup-member-left/SignupMemberLeft';
import { SignupMemberRight } from './signup-member-right/SignupMemberRight';
import { DividedPage } from '../../components/DividedPage';

function SignupFreelancer() {
  return (
    // <DividedPage left={<SignupMemberLeft />} right={<SignupMemberRight />} leftColor='secondary' />
    <div className='flex min-h-screen'>
      <SignupMemberLeft />
      <SignupMemberRight />
    </div>
  );
}

export default SignupFreelancer;
