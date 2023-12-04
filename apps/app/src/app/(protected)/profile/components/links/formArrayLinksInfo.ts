type ILinks = {
  linkedin: string;
  instagram: string;
  facebook: string;
  twitter: string;
  tiktok: string;
  youtube: string;
};

type FormInput = {
  title: keyof ILinks;
  name: string;
  type: 'text' | 'select';
  tooltip: string;
  options?: { value: any; label: string }[];
};

export const formArrayLinksInfo: FormInput[] = [
  {
    title: 'linkedin',
    name: 'links.0',
    type: 'text',
    tooltip: 'Enter your LinkedIn URL',
  },
  {
    title: 'instagram',
    name: 'links.1',
    type: 'text',
    tooltip: 'Enter your Instagram URL',
  },
  {
    title: 'facebook',
    name: 'links.2',
    type: 'text',
    tooltip: 'Enter your Facebook URL',
  },
  {
    title: 'twitter',
    name: 'links.3',
    type: 'text',
    tooltip: 'Enter your Twitter URL',
  },
  {
    title: 'tiktok',
    name: 'links.4',
    type: 'text',
    tooltip: 'Enter your TikTok URL',
  },
  {
    title: 'youtube',
    name: 'links.5',
    type: 'text',
    tooltip: 'Enter your Youtube URL',
  },
];
