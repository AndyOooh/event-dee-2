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

// export type Roles =

// export enum Roles {
//   HeHim = 'He/Him',
//   SheHer = 'She/Her',
//   TheyThem = 'They/Them',
//   PreferNotToSay = 'Prefer not to say',
// }

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

export const eventDetailsSchema = yup.object().shape({
  event_header: yup.string().min(3),
  event_name: stringNullable(yup.string().min(2)),
  event_type: yup.string().oneOf(Object.values(EventType)),
  // location: yup.string().min(3),
  date: yup.date().min(new Date()),
  description: yup.string().min(3),
  // roles: yup.array().of(yup.string().min(2)),
});

export type IeventDetailsSchema = yup.InferType<typeof eventDetailsSchema>;
