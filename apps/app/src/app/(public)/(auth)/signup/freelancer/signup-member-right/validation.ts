import { Providers } from '__components/modals/auth/OAuthButtons';
import { PW_MIN_LENGTH } from '__utils/global-consts';
import { getAuth } from 'firebase/auth';
import * as yup from 'yup';

// Step 1 ------------------------------------------------------------------------
export const step1SchemaEmail = yup.object().shape({
  email: yup.string().when('provider', {
    is: 'email',
    then: () => yup.string().email().required(),
  }),
  new_password: yup.string().when('provider', {
    is: 'email',
    then: () => yup.string().min(PW_MIN_LENGTH).required(),
  }),
  confirm_password: yup.string().oneOf([yup.ref('new_password'), null], 'Passwords must match'),
});
type IStep1SchemaEmail = yup.InferType<typeof step1SchemaEmail>;

//  This is a mess. Last modification was to add when for every field above.
export const step1Schema = yup
  .object({
    check_legal: yup
      .boolean()
      .oneOf([true], 'You must agree to the terms and conditions before signing up'),
    // provider: yup.string().required().default('email'),
    // provider: yup.mixed().oneOf(['google', 'facebook', 'email']).required().default('email'),
    provider: yup
      // .mixed()
      .string()
      // .oneOf<Providers | 'email'>(['google', 'facebook', 'email'])
      .oneOf(['google', 'facebook', 'email'])
      .default('email'), // Remove 'email' from oneOf
    // provider: yup.mixed().oneOf<Providers>(['google', 'facebook', 'email']).required().default('email'), // Use Providers type here
    ...step1SchemaEmail.fields,
    // provider: yup.mixed().oneOf([Providers, 'email']).required().default('email'),
    // email: yup.string().email().required()
    // ...step1SchemaEmail.fields,
  })
  .when('provider', {
    is: 'email',
    // then: () => step1SchemaEmail.required(),
    then: () => step1SchemaEmail.required(),
  });
export type IStep1Schema = yup.InferType<typeof step1Schema> & { oAuthCreds?: any };

// Step 2 ------------------------------------------------------------------------
export const step2Schema = yup
  .object({
    name: yup.string().required().min(2),

    first_name: yup.string().min(2),
    last_name: yup.string().required().min(2),
    // profession: yup.string().required().is([!'Choose profession'], 'Please choose a profession'),
    profession: yup.string().required().not(['Choose profession'], 'Please choose a profession'),
    other_skills: yup.array().min(1).of(yup.string()).required(),
    company_name: yup.string().min(2),
  })
  .required();
export type IStep2Schema = yup.InferType<typeof step2Schema>;

// example ------------------------
const emailAndPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const schema3 = yup
  .object({
    provider: yup.string().required(),
    ...emailAndPasswordSchema.fields,
  })
  .when('provider', {
    is: 'email',
    then: () => emailAndPasswordSchema.required(),
  });