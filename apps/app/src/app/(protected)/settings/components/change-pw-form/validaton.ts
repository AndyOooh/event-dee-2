import { reAuthenticate } from '__firebase/utilities';
import { PW_MIN_LENGTH } from '__utils/global-consts';
import { debounce } from 'lodash';
import * as yup from 'yup';

const debounceReAuthenticate = debounce(reAuthenticate, 1500);

export const changePasswordSchema = yup.object().shape({
  // current_password: yup.string().test('current_password', 'Incorrect password', async value => {
  //   try {
  //     // console.log('🚀 🚀 🚀 🚀 🚀  in current_password check');
  //     // await reAuthenticate(value);
  //     await debounceReAuthenticate(value);
  //     return true;
  //   } catch (error) {
  //     console.log('🚀  file: validaton.ts:11  error:', error);
  //     return false;
  //   }
  // }),

  current_password: yup.string().when({
    is: (exists: boolean) => !!exists,
    then: schema =>
      schema.min(PW_MIN_LENGTH, 'Passwords are minimum 6 characters long.').required(),
    // schema.transform(curr => null).nullable(),
    // schema.default(null).nullable(),
    // otherwise: schema => schema.nullable().default(null),
    // otherwise: schema => schema.default(null).nullable(),
    // otherwise: schema => schema.transform(() => null).nullable(),
    otherwise: schema => schema.default(null).nullable(),
  }),

  new_password: yup
    .string()
    .min(PW_MIN_LENGTH, 'Password must be minimum 6 characters.')
    .required(),
  // .when('current_password', {
  //   is: exists => exists,
  //   then: schema =>
  //     schema.notOneOf([yup.ref('current_password')], 'New password must be different.'),
  // }),
  confirm_password: yup
    .string()
    .equals([yup.ref('new_password')], 'Must match new password.')
    .required(),
});

export type IchangePasswordSchema = yup.InferType<typeof changePasswordSchema>; // before wrapping schema in a function
