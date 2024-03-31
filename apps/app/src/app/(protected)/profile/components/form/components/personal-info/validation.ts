import * as yup from 'yup';
// import { checkEmailExists } from '__firebase/utilities';
import { startCase, camelCase } from 'lodash';
import { getCloudFunction } from '__firebase/clientApp';
import { AnyObject } from 'yup';
import { stringNullable } from '__utils/helpers';

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  NonBinary = 'Non-binary',
  PreferNotToSay = 'Prefer not to say',
}

export enum Pronouns {
  HeHim = 'He/Him',
  SheHer = 'She/Her',
  TheyThem = 'They/Them',
  PreferNotToSay = 'Prefer not to say',
}

// export const personalInfoSchema = yup.object().shape({ // old, before wrapping schema in a function
export const personalInfoSchema = ({ initialEmail }) =>
  yup.object().shape({
    first_name: stringNullable(
      yup
        .string()
        .transform(value => startCase(camelCase(value)))
        .min(3)
    ),
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
        if (initialEmail === value) return true;
        // const exists = await checkEmailExists(email);
        // return !exists;
        // return !(await checkEmailExists(value));
        const checkEmailExists = getCloudFunction<string, boolean>('checkEmailExists');
        const emailExists = await checkEmailExists(value);
        return !emailExists;
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
    gender: yup
      .mixed<Gender>()
      .transform(curr => (curr === '' ? null : curr))
      .nullable()
      .oneOf(Object.values(Gender))
      .optional(),
    pronouns: yup
      .mixed<Pronouns>()
      .transform(curr => (curr === '' ? null : curr))
      .nullable()
      .oneOf(Object.values(Pronouns)),
    height: yup
      .string()
      .transform(curr => (curr === '' ? null : curr))
      .min(3)
      .nullable(),
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

// export type IpersonalInfoSchema = yup.InferType<typeof personalInfoSchema>; // old, before wrapping schema in a function
export type IpersonalInfoSchema = yup.InferType<ReturnType<typeof personalInfoSchema>>;
