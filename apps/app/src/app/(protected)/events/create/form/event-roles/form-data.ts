import { IeventRoleSchema, IeventRolesSchema } from './validation';
import { SelectOptions } from 'event-dee-types';

type FormInput = {
  // title: keyof IeventRoleSchema;
  title: keyof IeventRoleSchema;
  type: 'text' | 'select' | 'date';
  tooltip: string;
  options?: SelectOptions;
  prepend?: string;
  extraProps?: any;
};

// const eventRolesSchema = yup.object().shape({
//   role_type: yup.string().required().oneOf(Object.values(Role)),
//   hourly: yup.number().required(),
//   days: yup.number().required(),
//   hours_per_day: yup.number().required(),
//   transport_covered: yup.object().shape({
//     share_ride: yup.boolean(),
//     amount: yup.number(),
//   }),
//   overnight_covered: yup.object().shape({
//     covered: yup.boolean(),
//     amount: yup.number(),
//   }),
//   description: yup.string(),
// });

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

export const formArrayEventRoles: FormInput[] = [
  {
    title: 'role_type',
    type: 'select',
    tooltip: 'Select role',
    options: [
      'Model',
      'Photographer',
      'Staff',
      'Makeup Artist',
      'Hair Stylist',
      'Stylist',
      'Designer',
      'Videographer',
      'Assistant',
    ],
  },
  {
    title: 'hourly',
    type: 'text',
    tooltip: 'Hourly rate',
    prepend: '$',
  },
  {
    title: 'days',
    type: 'text',
    tooltip: 'Number of days',
  },
  {
    title: 'hours_per_day',
    type: 'text',
    tooltip: 'Hours per day',
  },
  {
    title: 'transport_covered',
    type: 'select',
    tooltip: 'Transport covered',
    options: ['Yes', 'No'],
  },
  {
    title: 'overnight_covered',
    type: 'select',
    tooltip: 'Overnight covered',
    options: ['Yes', 'No'],
  },
  {
    title: 'role_description',
    type: 'text',
    tooltip: 'Description',
  },

];
