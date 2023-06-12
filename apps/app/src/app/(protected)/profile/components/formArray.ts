import thaiProvinces from '__utils/provinces.json';

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  invite_link: string;
  province: string;
  gender: string;
  pronouns: string;
};

type FormInput = {
  title: keyof FormData;
  type: 'text' | 'select';
  tooltip: string;
  options?: string[];
};

export const formArray: FormInput[] = [
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
    options: thaiProvinces.map(province => province.provinceNameEn),
    // options: ['Male', 'Female', 'Non-binary', 'Prefer not to say'],
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
];


