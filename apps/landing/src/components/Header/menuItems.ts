import { appUrl } from '../../consts';

export const menuItems = [
  {
    title: 'Companies',
    link: '/',
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
        link: '/profile',
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
