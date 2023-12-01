import thaiProvinces from '__utils/provinces.json';

type FormData = {
  english_profiency: string;
  work_experience: string;
  // primary_skills: string;
};

type FormInput = {
  title: keyof FormData;
  type: 'text' | 'select';
  tooltip: string;
  options?: { value: any; label: string }[];
};

export const formArrayWorkInfo: FormInput[] = [
  {
    title: 'english_profiency',
    type: 'select',
    tooltip: 'Select your English proficiency',
    options: [
      {
        value: 'native',
        label: 'Native or Bilingual',
      },
      {
        value: 'fluent',
        label: 'Fluent',
      },
      {
        value: 'intermediate',
        label: 'Intermediate',
      },
      {
        value: 'basic',
        label: 'Basic',
      },
    ],
  },
  {
    title: 'work_experience',
    type: 'select',
    tooltip: 'Select years of work experience',
    options: [
      {
        value: '1-3',
        label: '1-3 years',
      },
      {
        value: '4-6',
        label: '4-6 years',
      },
      {
        value: '7-10',
        label: '7-10 years',
      },
      {
        value: '10+',
        label: '10+ years',
      },
    ],
  },
];
