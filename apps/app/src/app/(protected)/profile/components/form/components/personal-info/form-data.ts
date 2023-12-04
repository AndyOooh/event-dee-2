import thaiProvinces from '__utils/provinces.json';
import { IpersonalInfoSchema } from './validation';

// export type IPersonalInfo = {
//   first_name: string;
//   last_name: string;
//   email: string;
//   invite_link: string;
//   province: string;
//   gender: string;
//   pronouns: string;
//   height: string;
//   age: string;
//   // birthday: Date; // should replace age with this. Find a date picker toold or similar.
// };

type FormInput = {
  title: keyof IpersonalInfoSchema;
  type: 'text' | 'select' | 'date';
  tooltip: string;
  options?: { value: any; label: string }[];
  prepend?: string;
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
    // options: ['Male', 'Female', 'Non-binary', 'Prefer not to say'],
  },
  {
    title: 'gender',
    type: 'select',
    tooltip:
      'EventDee deeply values diversity and this data will only be used by Teamway for our own analytics purposes and not shared with 3rd parties without your consent. This field is optional.',
    options: [
      {
        value: 'Male',
        label: 'Male',
      },
      {
        value: 'Female',
        label: 'Female',
      },
      {
        value: 'Non-binary',
        label: 'Non-binary',
      },
      {
        value: 'Prefer not to say',
        label: 'Prefer not to say',
      },
    ],
  },

  {
    title: 'pronouns',
    type: 'select',
    tooltip:
      'You can add your pronouns to your profile to signal one of the most deeply felt aspects of who we are: our gender identity. This field is optional.',
    options: [
      {
        // value: 'he_him',
        value: 'He/Him',
        label: 'He/Him',
      },
      {
        //  value: 'she_her',
        value: 'She/Her',
        label: 'She/Her',
      },
      {
        //  value: 'they_them',
        value: 'They/Them',
        label: 'They/Them',
      },
      {
        // value: 'prefer_not_to_say',
        value: 'Prefer not to say',
        label: 'Prefer not to say',
      },
    ],
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
  // {
  //   title: 'age',
  //   type: 'select',
  //   tooltip: 'Enter your age',
  //   options: Array.from({ length: 85 }, (_, i) => ({
  //     value: `${i + 15} years old`,
  //     label: `${i + 15} years old`,
  //   })),
  // },
  // {
  //   title: 'dob',
  //   type: 'date',
  //   tooltip: 'Enter your birthdate',
  // },
];
