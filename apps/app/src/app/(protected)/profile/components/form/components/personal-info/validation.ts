import * as yup from 'yup';
import { checkEmailExists } from '__firebase/utilities';
import { startCase, camelCase } from 'lodash';

// type Gender = 'Male' | 'Female' | 'Non-binary' | 'Prefer not to say';
enum Gender {
  Male = 'Male',
  Female = 'Female',
  NonBinary = 'Non-binary',
  PreferNotToSay = 'Prefer not to say',
}

enum Pronouns {
  HeHim = 'He/Him',
  SheHer = 'She/Her',
  TheyThem = 'They/Them',
  PreferNotToSay = 'Prefer not to say',
}

// 'Male' | 'Female' | 'Non-binary' | 'Prefer not to say';

// export const personalInfoSchema = yup.object().shape({
export const personalInfoSchema = ({ initialEmail }) =>
  yup.object().shape({
    first_name: yup
      .string()
      .transform(value => startCase(camelCase(value)))
      .transform(curr => (curr === '' ? null : curr))
      .nullable()
      .min(3),
    last_name: yup
      .string()
      .transform(value => startCase(camelCase(value)))
      .transform(curr => (curr === '' ? null : curr))
      .nullable()
      .min(3),
    email: yup
      .string()
      .email()
      .test('email', 'Email already exists', async value => {
        console.log('🚀  file: validation.ts:39  initialEmail:', initialEmail);
        if (initialEmail === value) return true;
        // const exists = await checkEmailExists(email);
        // return !exists;
        return !(await checkEmailExists(value));
      }),
    invite_link: yup
      .string()
      .transform(curr => (curr === '' ? null : curr))
      .lowercase()
      .nullable()
      .min(3),
    province: yup // use json file?
      .string()
      .transform(curr => (curr === '' ? null : curr))
      .nullable()
      .min(3),
    gender: yup.mixed<Gender>().oneOf(Object.values(Gender)).optional(),
    pronouns: yup.mixed<Pronouns>().oneOf(Object.values(Pronouns)).optional(),
    height: yup.string().min(3).optional(),
    // age: yup.string().min(3),
    // dob: yup.date().test('age', 'You must be 18 or older', function (birthdate) {
    //   const cutoff = new Date();
    //   cutoff.setFullYear(cutoff.getFullYear() - 18);
    //   return birthdate <= cutoff;
    // }),
    dob: yup
      .date()
      .nullable()
      .transform((curr, orig) => (orig === '' ? null : curr))
      .typeError('Invalid Date')
      .test('age', 'You must be 18 or older', function (birthdate) {
        const cutoff = new Date();
        cutoff.setFullYear(cutoff.getFullYear() - 18);
        return birthdate <= cutoff;
      }),
  });

// export type IpersonalInfoSchema = yup.InferType<typeof personalInfoSchema>; // before wrapping schema in a function
export type IpersonalInfoSchema = yup.InferType<ReturnType<typeof personalInfoSchema>>;
