import thaiProvinces from '__utils/provinces.json';

type FormData = {
  linkedin: string;
  instagram: string;
  facebook: string;
  twitter: string;
  tiktok: string;
  youtube: string;
};

type FormInput = {
  title: keyof FormData;
  type: 'text' | 'select';
  tooltip: string;
  options?: { value: any; label: string }[];
};

export const formArrayLinksInfo: FormInput[] = [
  {
    title: 'linkedin',
    type: 'text',
    tooltip: 'Enter your LinkedIn URL',
  },
  {
    title: 'instagram',
    type: 'text',
    tooltip: 'Enter your Instagram URL',
  },
  {
    title: 'facebook',
    type: 'text',
    tooltip: 'Enter your Facebook URL',
  },
  {
    title: 'twitter',
    type: 'text',
    tooltip: 'Enter your Twitter URL',
  },
  {
    title: 'tiktok',
    type: 'text',
    tooltip: 'Enter your TikTok URL',
  },
  {
    title: 'youtube',
    type: 'text',
    tooltip: 'Enter your Youtube URL',
  },
];
