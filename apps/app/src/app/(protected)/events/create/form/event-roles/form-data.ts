import { TextInputClassNames } from '@repo/ui';
import {
  IeventRoleSchema,
  // IeventRolesSchema
} from './validation';
import { SelectOptions } from '@repo/types';

type FormInput = {
  // title: keyof IeventRoleSchema;
  title: keyof IeventRoleSchema;
  type: 'text' | 'select' | 'date';
  tooltip: string;
  defaultValue?: string;
  options?: SelectOptions;
  prepend?: string;
  // prependClassName?: string;
  extraProps?: any;
  className?: TextInputClassNames;
  digits?: number;
};

// const numberInputSize = 20; // rem

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
    title: 'number_workers',
    type: 'text',
    tooltip: 'Number of workers needed',
    // defaultValue: '1',
    // className: `w-${numberInputSize}`,
    digits: 2,
  },
  {
    title: 'hourly',
    type: 'text',
    tooltip: 'Hourly rate',
    prepend: '$',
    // defaultValue: '500',
    // prependClassName: `input-sm`,
    // className: `w-${numberInputSize}`,
    // className: `w-${numberInputSize} input-sm`,
    className: { wrapper_div: `input-sm` },
    digits: 4,
  },
  {
    title: 'days',
    type: 'text',
    tooltip: 'Number of days',
    // defaultValue: '1',
    // className: `w-${numberInputSize}`,
    digits: 2,
  },
  {
    title: 'hours_per_day',
    type: 'text',
    tooltip: 'Hours per day',
    // defaultValue: '8',
    // className: `w-${numberInputSize}`,
    digits: 3,
  },
  {
    title: 'break_hours',
    type: 'text',
    tooltip: 'Break time',
    // defaultValue: '1',
    prepend: 'hours',
    // prependClassName: `input-sm`,
    // className: `w-${numberInputSize}`,
    // className: `w-${numberInputSize} input-sm`,
    className: { wrapper_div: `input-sm`, input: `input-sm` },
    digits: 3,
  },

  // {
  //   title: 'transport_covered',
  //   type: 'select',
  //   tooltip: 'Transport covered',
  //   options: ['Yes', 'No'],
  // },
  // {
  //   title: 'overnight_covered',
  //   type: 'select',
  //   tooltip: 'Overnight covered',
  //   options: ['Yes', 'No'],
  // },
  {
    title: 'role_description',
    type: 'text',
    tooltip: 'Description',
  },
];
