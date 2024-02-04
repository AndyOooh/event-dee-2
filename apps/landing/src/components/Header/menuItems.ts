import { appUrl } from '../../consts';

export const menuItems = [
  {
    title: 'Companies',
    link: '/companies',
  },
  {
    title: 'Members',
    link: '/models',
    subItems: [
      {
        title: 'Search',
        link: '/search',
      },
      {
        title: 'Society',
        link: '/society',
      },
    ],
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Login',
    link: appUrl + '/login', // to app
  },
];
