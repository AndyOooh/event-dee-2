import thaiProvinces from '__utils/provinces.json';
import { IpersonalInfoSchema } from './validation';
import { SelectOptions } from 'event-dee-types';

const dateXYearsago = (years: number) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - years);
  return date.toISOString().split('T')[0];
};

type FormInput = {
  title: keyof IpersonalInfoSchema;
  type: 'text' | 'select' | 'date';
  tooltip: string;
  options?: SelectOptions;
  prepend?: string;
  extraProps?: any;
};

export const formArrayPersonalInfo: FormInput[] = [
  {
    title: 'first_name',
    type: 'text',
    tooltip: 'Enter your first name',
  },
  {
    title: 'last_name',
    type: 'text',
    tooltip: 'Enter your last name',
  },
  {
    title: 'email',
    type: 'text',
    tooltip: 'Enter your email',
  },

  {
    title: 'invite_link',
    type: 'text',
    tooltip:
      "This is a personal link for you to invite your contacts to Teamway. Once you edit this URL, the old URL won't work.",
    prepend: 'app.eventdee.com/invite/',
  },
  {
    title: 'province',
    type: 'select',
    tooltip: 'Enter your province',
    options: thaiProvinces.map(province => ({
      value: province.provinceNameEn,
      label: province.provinceNameEn,
    })),
  },
  {
    title: 'gender',
    type: 'select',
    tooltip:
      'EventDee deeply values diversity and this data will only be used by Teamway for our own analytics purposes and not shared with 3rd parties without your consent. This field is optional.',
    options: ['Male', 'Female', 'Non-binary', 'Prefer not to say'],
  },

  {
    title: 'pronouns',
    type: 'select',
    tooltip:
      'You can add your pronouns to your profile to signal one of the most deeply felt aspects of who we are: our gender identity. This field is optional.',
    options: ['He/Him', 'She/Her', 'They/Them', 'Prefer not to say'],
  },
  {
    title: 'height',
    type: 'select',
    tooltip: 'Enter your height',
    options: Array.from({ length: 100 }, (_, i) => ({
      value: `${i + 100} cm`,
      label: `${i + 100} cm`,
    })),
  },

  {
    title: 'dob',
    type: 'date',
    tooltip: 'Enter your birthdate',
    extraProps: {
      min: dateXYearsago(100),
      max: dateXYearsago(18),
    },
  },
];
