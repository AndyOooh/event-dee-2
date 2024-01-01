import thaiProvinces from '__utils/provinces.json';
import { IeventDetailsSchema } from './validation';
import { SelectOptions } from 'event-dee-types';

const dateXYearsago = (years: number) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - years);
  return date.toISOString().split('T')[0];
};

type FormInput = {
  title: keyof IeventDetailsSchema;
  type: 'text' | 'select' | 'date';
  tooltip: string;
  options?: SelectOptions;
  prepend?: string;
  extraProps?: any;
};

// export const createEventSchema = yup.object().shape({
//   event_header: yup.string().min(3),
//   event_name: stringNullable(yup.string().min(2)),
//   location: yup.string().min(3),
//   date: yup.date().min(new Date()),
//   description: yup.string().min(3),
//   roles: yup.array().of(yup.string().min(2)),
// });

export const formArrayEventDetails: FormInput[] = [
  {
    title: 'event_header',
    type: 'text',
    tooltip: 'Enter a header',
  },

  {
    title: 'event_name',
    type: 'text',
    tooltip: 'Enter name of the event',
  },
  {
    title: 'event_type',
    type: 'select',
    tooltip: 'Select type of the event',
    options: ['Video shoot', 'Photo shoot', 'Fashion show', 'Promotional event', 'Other'],
  },
  {
    title: 'date',
    type: 'date',
    tooltip: 'Enter date of the event',
  },
  {
    title: 'description',
    type: 'text',
    tooltip: 'Enter a description',
  },
  /* Move this to seperate segment (same with location) */
  // {
  //   title: 'roles',
  //   type: 'select',
  //   tooltip: 'Select roles',
  //   options: [
  //     'Model',
  //     'Photographer',
  //     'Staff',
  //     'Makeup Artist',
  //     'Hair Stylist',
  //     'Stylist',
  //     'Designer',
  //     'Videographer',
  //     'Assistant',
  //   ],
  // },
];
