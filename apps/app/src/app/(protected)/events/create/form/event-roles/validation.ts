import * as yup from 'yup';
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

export enum EventType {
  VideoShoot = 'Video shoot',
  PhotoShoot = 'Photo shoot',
  FashionShow = 'Fashion show',
  Convention = 'Convention',
  Exhibition = 'Exhibition',
  Conference = 'Conference',
  Festival = 'Festival',
  Concert = 'Concert',
  SportingEvent = 'Sporting event',
  Other = 'Other',
}


export const eventRoleSchema = yup.object().shape({
  role_type: yup.string().required().oneOf(Object.values(Role)),
  hourly: yup.number().required(),
  days: yup.number().required(),
  hours_per_day: yup.number().required(),
  transport_covered: yup.object().shape({
    share_ride: yup.boolean(),
    amount: yup.number(),
  }),
  overnight_covered: yup.object().shape({
    provided: yup.boolean(),
    amount: yup.number(),
  }),
  role_description: yup.string(),
});

export const eventRolesSchema = yup.array().of(eventRoleSchema);

export type IeventRoleSchema = yup.InferType<typeof eventRoleSchema>;
export type IeventRolesSchema = yup.InferType<typeof eventRolesSchema>;

// type Role1 = {
//   role_type: Role;
//   hourly: number;
//   days: number;
//   hours_per_day: number;
//   transport_covered?: {
//     share_ride?: boolean;
//     amount?: number;
//   };
//   overnight_covered?: {
//     covered?: boolean;
//     amount?: number;
//   }
//   description?: string;
// };





