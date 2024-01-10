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

// type TransportStrings = 'Provided' | 'Not provided' | 'Amount';
export enum TransportOvernight {
  Provided = 'Provided',
  NotProvided = 'Not Provided',
  Amount = 'Amount',
}

export const eventRoleSchema = yup.object().shape({
  role_type: yup.string().required().oneOf(Object.values(Role)),
  number_workers: yup.number().required(),
  hourly: yup.number().required(),
  days: yup.number().required(),
  hours_per_day: yup.number().required(),
  break_hours: yup.number().required(),
  // transport: // TransportStrings or number
  transport: yup.mixed().test('isTransportValid', 'Invalid transport value😍', value => {
    if (
      typeof value === 'string' &&
      (!isNaN(Number(value)) || (Object.values(TransportOvernight) as string[]).includes(value))
    ) {
      return true;
    }
    return false;
  }),
  overnight: yup.mixed().test('isOvernightValid', 'Invalid overnight value😍', value => {
    if (
      typeof value === 'string' &&
      (!isNaN(Number(value)) || (Object.values(TransportOvernight) as string[]).includes(value))
    ) {
      return true;
    }
    return false;
  }),

  role_description: yup.string(),
});

// export const eventRolesSchema = yup.array().of(eventRoleSchema);

export type IeventRoleSchema = yup.InferType<typeof eventRoleSchema>;
// export type IeventRolesSchema = yup.InferType<typeof eventRolesSchema>;

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
