import * as yup from 'yup';
import { startCase, camelCase } from 'lodash';

export const changePasswordSchema = yup.object().shape({
  current_password: yup
    .string()
    .transform(value => startCase(camelCase(value)))
    .transform(curr => (curr === '' ? null : curr))
    .nullable()
    .min(3),
  new_password: yup
    .string()
    .transform(value => startCase(camelCase(value)))
    .transform(curr => (curr === '' ? null : curr))
    .nullable()
    .min(3),
  confirm_password: yup.string(),
});

export type IchangePasswordSchema = yup.InferType<typeof changePasswordSchema>; // before wrapping schema in a function
