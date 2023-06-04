import { SignupBusinessLeft } from './SignupBusinessLeft/SignupBusinessLeft';
import {SignupBusinessRight} from './SignupBusinessRight/SignupBusinessRight';

type Props = {};

function SignupBusiness({}: Props) {
  return (
    // <DividedPage left={<SignupMemberLeft />} right={<SignupMemberRight />} leftColor='secondary' />
    <div className='flex min-h-screen'>
      <SignupBusinessLeft />
      <SignupBusinessRight />
    </div>
  );
}

export default SignupBusiness;