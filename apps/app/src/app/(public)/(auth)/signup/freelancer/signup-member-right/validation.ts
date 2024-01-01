import { PW_MIN_LENGTH } from '__utils/global-consts';
import { Providers } from 'app/types';
import * as yup from 'yup';

// Step 1 ------------------------------------------------------------------------
const emailProviderWhen = {
  is: 'email',
  then: (yupBuilder: any) => yupBuilder.email().required(),
};

const passwordProviderWhen = {
  is: 'email',
  then: (yupBuilder: any) => yupBuilder.min(PW_MIN_LENGTH).required(),
};

/* Split up in case Oauth where email + pw not required */
const step1SchemaEmail = yup.object().shape({
  email: yup.string().when('provider', emailProviderWhen),
  new_password: yup.string().when('provider', passwordProviderWhen),
  confirm_password: yup.string().oneOf([yup.ref('new_password'), null], 'Passwords must match'),
});

export const step1Schema = yup
  .object({
    check_legal: yup
      .boolean()
      .isTrue('You must agree to the terms and conditions before signing up'),
    provider: yup
      .mixed<Providers>()
      .oneOf<Providers>(Object.values(Providers))
      .required()
      .default(Providers.email),
    ...step1SchemaEmail.fields,
  })
  .when('provider', {
    is: 'email',
    then: () => step1SchemaEmail.required(),
  });
export type IStep1Schema = yup.InferType<typeof step1Schema> & { oAuthCreds?: any };

// Step 2 ------------------------------------------------------------------------
export const step2Schema = yup
  .object({
    name: yup.string().required().min(2),
    first_name: yup.string().min(2),
    last_name: yup.string().required().min(2),
    profession: yup.string().required().not(['Choose profession'], 'Please choose a profession'),
    other_skills: yup.array().min(1).of(yup.string()).required(),
    company_name: yup.string().min(2),
  })
  .required();
export type IStep2Schema = yup.InferType<typeof step2Schema>;
