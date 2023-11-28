import thaiProvinces from '__utils/provinces.json';

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  invite_link: string;
  province: string;
  gender: string;
  pronouns: string;
  height: string;
};

type FormInput = {
  title: keyof FormData;
  type: 'text' | 'select';
  tooltip: string;
  options?: { value: any; label: string }[];
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
        value: 'male',
        label: 'Male',
      },
      {
        value: 'female',
        label: 'Female',
      },
      {
        value: 'non_binary',
        label: 'Non-binary',
      },
      {
        value: 'prefer_not_to_say',
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
      { value: 'he_him', label: 'He/Him' },
      { value: 'she_her', label: 'She/Her' },
      { value: 'they_them', label: 'They/Them' },
      { value: 'prefer_not_to_say', label: 'Prefer not to say' },
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
];
