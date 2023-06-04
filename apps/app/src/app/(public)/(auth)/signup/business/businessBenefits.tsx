import {
  FaBriefcase,
  FaComments,
  FaMoneyBillAlt,
  FaRegFile,
  FaRegLightbulb,
  FaRegMoneyBillAlt,
  FaShieldAlt,
} from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FaRegFileAlt } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaBalanceScale } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaStar, FaSearch } from 'react-icons/fa';
import { MdDescription, MdMessage, MdPayment, MdSearch } from 'react-icons/md';
import {
  RiHandCoinLine,
  RiSecurePaymentLine,
  RiFilePaper2Line,
  RiChatSmile2Line,
} from 'react-icons/ri';
import {} from 'react-icons/';

// GiInjustice, VscLaw, GoLaw,
// BiHide, MdOutlineVisibility, MdOutlineVisibilityOff, MdVisibility
// MdOutlineHandshake, TbHeartHandshake, SiHandshake, FaRegHandshake, FaHandshake
// TbWritingSignOff, TbWritingOff

type Benefit = {
  title: string;
  description: string;
  icon1: JSX.Element;
  icon2: JSX.Element;
  icon3: JSX.Element;
};

const iconSize = '2.8rem';
export const businessBenefits: Benefit[] = [
  {
    title: 'Access to Top Talent',
    description: 'Our platform connects you with skilled freelancers from around the world.',
    icon1: <FaRegLightbulb size={iconSize} />,
    icon2: <FaBriefcase size={iconSize} />,
    icon3: <MdSearch size={iconSize} />,
  },
  {
    title: 'Effortless Communication',
    description: 'Our messaging system streamlines communication for easy collaboration.',
    icon1: <FaComments size={iconSize} />,
    icon2: <BiMessageSquareDetail size={iconSize} />,
    icon3: <RiChatSmile2Line size={iconSize} />,
  },
  {
    title: 'Simplified Contract Management',
    description: 'Our platform automates contract management and payment processing.',
    icon1: <MdDescription size={iconSize} />,
    icon2: <FaRegFile size={iconSize} />,
    icon3: <RiFilePaper2Line size={iconSize} />,
  },
  {
    title: 'Secure Payments',
    description:
      'Our payment system ensures timely and secure payments, reducing payment disputes.',
    icon1: <RiSecurePaymentLine size={iconSize} />,
    icon2: <MdPayment size={iconSize} />,
    icon3: <FaMoneyBillAlt size={iconSize} />,
  },
  {
    title: 'Legal Protection',
    description: 'We offer legal support for dispute resolution and contract management.',
    icon1: <FaShieldAlt size={iconSize} />,
    icon2: <FaBalanceScale size={iconSize} />,
    icon3: <FaRegFileAlt size={iconSize} />,
  },
  {
    title: 'Access to Trusted Vendors',
    description: 'Our platform offers ratings and reviews of freelancers to ensure quality work.',
    icon1: <FaStar size={iconSize} />,
    icon2: <FaUserFriends size={iconSize} />,
    icon3: <MdSearch size={iconSize} />,
  },
];

// {
//   title:
