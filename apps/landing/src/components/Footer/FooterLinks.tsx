import Link from 'next/link';
import React from 'react';
import { RiArticleFill } from 'react-icons/ri';
import { RxArrowRight, RxArrowTopRight } from 'react-icons/rx';
import {
  SiDiscord,
  SiInstructure,
  SiLinkedin,
  SiReadthedocs,
  SiTwitter,
  SiYoutube,
} from 'react-icons/si';

type Props = {};

export const FooterLinks = (props: Props) => {
  const logoSize = '1.75rem';
  //   const linkLogoSize = '2rem';
  const links = [
    {
      title: 'Articles',
      href: '#',
      external: false,
      logo: <RiArticleFill size={logoSize} />,
    },
    {
      title: 'Twitter',
      href: '#',
      external: true,
      logo: <SiTwitter size={logoSize} />,
    },
    {
      title: 'Discord',
      href: '#',
      external: true,
      logo: <SiDiscord size={logoSize} />,
    },
    {
      title: 'Whitepaper',
      href: '#',
      external: false,
      logo: <SiReadthedocs size={logoSize} />,
    },
    {
      title: 'LinkedIn',
      href: '#',
      external: true,
      logo: <SiLinkedin size={logoSize} />,
    },
    {
      title: 'Youtube',
      href: '#',
      external: true,
      logo: <SiYoutube size={logoSize} />,
    },
  ];
  return (
    <div className='flex flex-col gap-4 py-10'>
      <div className='flex justify-between gap-16 w-5/6 mx-auto'>
        {/* {links.slice(0, 3).map((link, index) => {
          return (
            <>
              <div
                key={link.title + index}
                className='flex justify-between w-full pb-4 border-b border-base-content/50'>
                <a href={link.href} className='flex items-center justify-between w-full'>
                  <div className='flex items-center justify-center gap-4'>
                    {link.logo}
                    <p>{link.title}</p>
                  </div>
                  {link.external ? (
                    <RxArrowTopRight size={logoSize} />
                  ) : (
                    <RxArrowRight size={logoSize} />
                  )}
                </a>
              </div>
            </>
          );
        })} */}
      </div>
      <div className='flex justify-between gap-16 w-5/6 mx-auto'>
        {links.slice(3).map((link, index) => (
          <div key={link.title + index} className='flex justify-between w-full pb-4'>
            <a href={link.href} className='flex items-center justify-between w-full'>
              <div className='flex items-center justify-center gap-4'>
                {link.logo}
                <p>{link.title}</p>
              </div>
              {link.external ? (
                <RxArrowTopRight size={logoSize} />
              ) : (
                <RxArrowRight size={logoSize} />
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
