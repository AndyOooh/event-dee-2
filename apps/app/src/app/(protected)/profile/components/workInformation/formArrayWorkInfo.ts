export type IWorkInfo = {
  english_profiency: string;
  work_experience: string;
  // primary_skills: string;
};

type FormInput = {
  title: keyof IWorkInfo;
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
        value: 'Native or Bilingual',
        label: 'Native or Bilingual',
      },
      {
        value: 'Fluent',
        label: 'Fluent',
      },
      {
        value: 'Intermediate',
        label: 'Intermediate',
      },
      {
        value: 'Basic',
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
        value: '1-3 years',
        label: '1-3 years',
      },
      {
        value: '4-6 years',
        label: '4-6 years',
      },
      {
        value: '7-10 years',
        label: '7-10 years',
      },
      {
        value: '10+ years',
        label: '10+ years',
      },
    ],
  },
];
