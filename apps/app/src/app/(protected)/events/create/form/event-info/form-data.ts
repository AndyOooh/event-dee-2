import thaiProvinces from '__utils/provinces.json';
import { IcreateEventSchema } from './validation';
import { SelectOptions } from 'event-dee-types';

const dateXYearsago = (years: number) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - years);
  return date.toISOString().split('T')[0];
};

type FormInput = {
  title: keyof IcreateEventSchema;
  type: 'text' | 'select' | 'date';
  tooltip: string;
  options?: SelectOptions;
  prepend?: string;
  extraProps?: any;
};

export const formArrayPersonalInfo: FormInput[] = [
  {
    title: 'event_name',
    type: 'text',
    tooltip: 'Enter name of the event',
  },

  {
    title: 'location',
    type: 'select',
    tooltip: 'Enter your province',
    options: thaiProvinces.map(province => ({
      value: province.provinceNameEn,
      label: province.provinceNameEn,
    })),
  },
  // {
  //   title: 'gender',
  //   type: 'select',
  //   tooltip:
  //     'EventDee deeply values diversity and this data will only be used by Teamway for our own analytics purposes and not shared with 3rd parties without your consent. This field is optional.',
  //   options: ['Male', 'Female', 'Non-binary', 'Prefer not to say'],
  // },

  // {
  //   title: 'height',
  //   type: 'select',
  //   tooltip: 'Enter your height',
  //   options: Array.from({ length: 100 }, (_, i) => ({
  //     value: `${i + 100} cm`,
  //     label: `${i + 100} cm`,
  //   })),
  // },

  // {
  //   title: 'dob',
  //   type: 'date',
  //   tooltip: 'Enter your birthdate',
  //   extraProps: {
  //     min: dateXYearsago(100),
  //     max: dateXYearsago(18),
  //   },
  // },
];
