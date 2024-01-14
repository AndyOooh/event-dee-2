import * as yup from 'yup';
import { stringNullable } from '__utils/helpers';

// export enum Role {
//   Model = 'Model',
//   Photographer = 'Photographer',
//   Staff = 'Staff',
//   MakeupArtist = 'Makeup Artist',
//   HairStylist = 'Hair Stylist',
//   Stylist = 'Stylist',
//   Designer = 'Designer',
//   Videographer = 'Videographer',
//   Assistant = 'Assistant',
// }

// // export type Roles =

// // export enum Roles {
// //   HeHim = 'He/Him',
// //   SheHer = 'She/Her',
// //   TheyThem = 'They/Them',
// //   PreferNotToSay = 'Prefer not to say',
// // }

// export enum EventType {
//   VideoShoot = 'Video shoot',
//   PhotoShoot = 'Photo shoot',
//   FashionShow = 'Fashion show',
//   PromotionalEvent = 'Promotional event',
//   Other = 'Other',
// }

// export const eventDetailsSchema = yup.object().shape({
//   event_header: yup.string().min(3),
//   event_name: stringNullable(yup.string().min(2)),
//   event_type: yup.string().oneOf(Object.values(EventType)),
//   location: yup.string().min(3),
//   date: yup.date().min(new Date()),
//   description: yup.string().min(3),
//   roles: yup.array().of(yup.string().min(2)),
// });

// export type IeventDetailsSchema = yup.InferType<typeof eventDetailsSchema>;

// create schema as above for fields: street name, street number, khet/sublocality, province, postal code

// export const eventLocationSchema = yup.object().shape({
//   search: yup.string().min(3),
//   street_name: stringNullable(yup.string().min(2)),
//   street_number: stringNullable(yup.string().min(2)),
//   khet_sublocality: stringNullable(yup.string().min(2)),
//   province: stringNullable(yup.string().min(2)),
//   postal_code: stringNullable(yup.string().min(2)),
// });

type Coordinates = {
  lat: number;
  lng: number;
};

// export const eventLocationSchema = yup.object().shape({
//   address: yup.string().min(10),
//   place_id: yup.string().min(10),
//   coords: yup.object().shape({
//     lat: yup.number(),
//     lng: yup.number(),
//   }),
//   location_description: stringNullable(yup.string().min(5)),
// });

export const eventLocationSchema = yup.object().shape({
  location: yup.object().shape({
    address: yup.string().min(10),
    place_id: yup.string().min(10),
    coords: yup.object().shape({
      lat: yup.number(),
      lng: yup.number(),
    }),
    description: stringNullable(yup.string().min(5)),
  }),
});


export type IeventLocationSchema = yup.InferType<typeof eventLocationSchema>;
