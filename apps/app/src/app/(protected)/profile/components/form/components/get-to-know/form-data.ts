import thaiProvinces from '__utils/provinces.json';

export type IGetToKnow = {
  profile_header: string;
  profile_text: string;
};

type FormInput = {
  title: keyof IGetToKnow;
  type: 'text' | 'textarea';
  tooltip: string;
  // options?: { value: any; label: string }[];
};

export const formArrayGetToKnow: FormInput[] = [
  {
    title: 'profile_header',
    type: 'text',
    tooltip: 'Enter your profile header',
  },
  {
    title: 'profile_text',
    type: 'text',
    tooltip: 'Enter your profile text',
  },
];
