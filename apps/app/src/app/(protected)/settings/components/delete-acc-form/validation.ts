import * as yup from 'yup';
import { PW_MIN_LENGTH } from '__utils/global-consts';

export const deleteUserSchema = yup.object().shape({
  password: yup.string().when({
    is: exists => !exists,
    then: schema =>
      schema.min(PW_MIN_LENGTH, 'Passwords are minimum 6 characters long.').required(),
    otherwise: schema => schema.optional(),
  }),
});

export type IdeleteUserSchema = yup.InferType<typeof deleteUserSchema>;
