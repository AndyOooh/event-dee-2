import {
  SiDiscord,
  SiInstructure,
  SiLinkedin,
  SiReadthedocs,
  // SiTwitter,
  SiYoutube,
  SiFacebook,
  SiInstagram,
  SiTiktok,
} from 'react-icons/si';

const iconSize = '2rem';

export const data_socials = [
  {
    name: 'facebook',
    // icon: <SiFacebook size={iconSize} />,
    icon: <SiFacebook />,
    link: 'facebook.com/',
  },
  {
    name: 'instagram',
    icon: <SiInstagram size={iconSize} />,
    link: 'https://www.instagram.com',
  },
  {
    name: 'tiktok',
    icon: <SiTiktok size={iconSize} />,
    link: 'https://www.tiktok.com',
  },
  {
    name: 'linkedin',
    icon: <SiLinkedin size={iconSize} />,
    // icon: <SiLinkedin />,
    link: 'https://www.linkedin.com',
  },
  {
    name: 'twitter',
    icon: <SiLinkedin size={iconSize} />,
    // icon: <SiTwitter size={iconSize} className='rounded' />,
    link: 'twitter.com',
  },
  {
    name: 'youtube',
    icon: <SiYoutube size={iconSize} />,
    link: 'https://www.youtube.com',
  },
];
