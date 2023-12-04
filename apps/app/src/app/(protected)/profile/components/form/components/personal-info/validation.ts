import * as yup from 'yup';
import { checkEmailExists } from '__firebase/utilities';

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

export const personalInfoSchema = yup.object().shape({
  first_name: yup.string().min(3),
  last_name: yup.string().min(3),
  email: yup
    .string()
    .email()
    .test('email', 'Email already exists', async email => {
      // const exists = checkEmailExists(email);
      const exists = await checkEmailExists(email);
      console.log('🚀  file: validation.ts:30  exists:', exists)
      return !exists;
      // return await checkEmailExists(email);
    }),
  invite_link: yup.string().min(3),
  province: yup.string().min(3), // use json file?
  gender: yup.mixed<Gender>().oneOf(Object.values(Gender)),
  pronouns: yup.mixed<Pronouns>().oneOf(Object.values(Pronouns)),
  height: yup.string().min(3),
  // age: yup.string().min(3),
  // dob: yup.date().test('age', 'You must be 18 or older', function (birthdate) {
  //   const cutoff = new Date();
  //   cutoff.setFullYear(cutoff.getFullYear() - 18);
  //   return birthdate <= cutoff;
  // }),
});

export type IpersonalInfoSchema = yup.InferType<typeof personalInfoSchema>;


