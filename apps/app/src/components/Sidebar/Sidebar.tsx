import {
  BiHome,
  BiSearchAlt,
  BiDollarCircle,
  BiCalendarCheck,
  BiCog,
  BiTestTube,
} from 'react-icons/bi';
import Image from 'next/image';
import combi_mint from '/public/logo/combi/combi_mint.png';
import Link from 'next/link';

type Props = {};

function Sidebar({}: Props) {
  const iconSize = '1.4rem';

  const menuItems = [
    {
      icon: <BiHome size={iconSize} />,
      title: 'Home',
      link: '/',
    },
    {
      icon: <BiSearchAlt size={iconSize} />,
      title: 'Search',
      link: '/search',
    },
    {
      icon: <BiCalendarCheck size={iconSize} />,
      title: 'Events',
      link: '/events',
    },
    {
      icon: <BiDollarCircle size={iconSize} />,
      title: 'Payments',
      link: '/payments',
    },
    {
      icon: <BiCog size={iconSize} />,
      title: 'Settings',
      link: '/settings',
    },
  ];

  // const [first, setfirst] = useState('second');

  // TODO: On small screens show a hamburger menu which pushes sidebar in
  // from the left, pushing dashboard content to the right with a dark overlay

  return (
    // <div className='h-screen sticky top-0'>
    <aside className='w-[15.5rem] h-screen sticky top-0 hidden lg:flex flex-col p-4'>
      <Link href={'/'} className='px-2 py-6'>
        <Image src={combi_mint} alt='logo' width={800} height={800} />
      </Link>
      <ul className='gap-8 menu'>
        <li>
          {menuItems.map(item => (
            <a
              key={item.title}
              href={item.link}
              className='text-xs pl-2 mb-2 hover:scale-110 hover:font-semibold'>
              <span className=''>{item.icon}</span>
              <span className='title'>{item.title}</span>
            </a>
          ))}
          {process.env.NEXT_PUBLIC_EMULATORS_ON === 'true' && (
            <a
              key={'emulator-test'}
              href={'/emulator-test'}
              className='text-xs pl-2 mb-2 hover:scale-110 hover:font-semibold'>
              <span className=''>
                <BiTestTube size={iconSize} />
              </span>
              <span className='title'>Emulator Test</span>
            </a>
          )}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
