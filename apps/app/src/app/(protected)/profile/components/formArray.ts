type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  invite_link: string;
  province: string;
  gender: string;
  pronouns: string;
};

export const formArray = [
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
    type: 'text',
    tooltip: 'Enter your province',
  },
  {
    title: 'gender',
    type: 'dropdown',
    tooltip:
      'EvnetDee deeply values diversity and this data will only be used by Teamway for our own analytics purposes and not shared with 3rd parties without your consent. This field is optional.',
  },
  {
    title: 'pronouns',
    type: 'dropdown',
    tooltip:
      'You can add your pronouns to your profile to signal one of the most deeply felt aspects of who we are: our gender identity. This field is optional.',
  },
];
