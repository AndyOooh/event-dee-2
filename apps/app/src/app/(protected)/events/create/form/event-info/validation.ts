import * as yup from 'yup';
// import { checkEmailExists } from '__firebase/utilities';
import { startCase, camelCase } from 'lodash';
import { getCloudFunction } from '__firebase/clientApp';
import { AnyObject } from 'yup';
import { stringNullable } from '__utils/helpers';

export enum Role {
  Model = 'Model',
  Photographer = 'Photographer',
  Staff = 'Staff',
  MakeupArtist = 'Makeup Artist',
  HairStylist = 'Hair Stylist',
  Stylist = 'Stylist',
  Designer = 'Designer',
  Videographer = 'Videographer',
  Assistant = 'Assistant',
}

// export type Roles =

// export enum Roles {
//   HeHim = 'He/Him',
//   SheHer = 'She/Her',
//   TheyThem = 'They/Them',
//   PreferNotToSay = 'Prefer not to say',
// }

export const createEventSchema = yup.object().shape({
  header: yup.string().min(3),
  event_name: stringNullable(yup.string().min(2)),
  location: yup.string().min(3),
  date: yup.date().min(new Date()),
  text: yup.string().min(3),
  roles: yup.array().of(yup.string().min(2)),
});

export type IcreateEventSchema = yup.InferType<typeof createEventSchema>;
