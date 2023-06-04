import * as yup from 'yup';
import { step1Schema as step1SchemaFreelancer } from '../../freelancer/SignupMemberRight/validation';

// Step 1 ------------------------------------------------------------------------

// export const step1Schema = { ...step1SchemaFreelancer };

// Step 2 ------------------------------------------------------------------------
export const step2Schema = yup
  .object({
    first_name: yup.string().required().min(4),
    last_name: yup.string().required().min(4),
    company_name: yup.string().required().min(2),
  })
  .required();
type IStep2Schema = yup.InferType<typeof step2Schema>;

// ------------------- Keeping as an example as I took a while to figure out. Key is Then needs a function.
// export const step1Schema = yup.object({
//   provider: yup.string().required().default('google'),
//   email: yup
//     .string()
//     .email()
//     .when('provider', {
//       is: 'email',
//       then: () => yup.string().required(),
//     }),

//   password: yup.string().min(6), // 6 minimum for fb
//   confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),

//   check_legal: yup
//     .boolean()
//     .oneOf([true], 'You must agree to the terms and conditions before signing up'),
// });
