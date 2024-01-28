import { Metadata } from 'next';
import { SignupBusinessLeft } from './SignupBusinessLeft/SignupBusinessLeft';
import { SignupBusinessRight } from './SignupBusinessRight/SignupBusinessRight';

export const metadata: Metadata = {
  title: 'Event Dee - Signup',
};

function SignupBusiness() {
  return (
    // <DividedPage left={<SignupMemberLeft />} right={<SignupMemberRight />} leftColor='secondary' />
    <div className='flex min-h-screen'>
      <SignupBusinessLeft />
      <SignupBusinessRight />
    </div>
  );
}

export default SignupBusiness;
