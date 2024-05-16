import {
    FaBriefcase,
    FaComments,
    FaMoneyBillAlt,
    FaRegFile,
    FaRegLightbulb,
    FaRegMoneyBillAlt,
    FaShieldAlt,
} from 'react-icons/fa'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FaRegFileAlt } from 'react-icons/fa'
import { FaMoneyBill } from 'react-icons/fa'
import { FaBalanceScale } from 'react-icons/fa'
import { FaUserFriends } from 'react-icons/fa'
import { FaStar, FaSearch } from 'react-icons/fa'
import { MdDescription, MdMessage, MdPayment, MdSearch } from 'react-icons/md'
import {
    RiHandCoinLine,
    RiSecurePaymentLine,
    RiFilePaper2Line,
    RiChatSmile2Line,
} from 'react-icons/ri'

// GiInjustice, VscLaw, GoLaw,
// BiHide, MdOutlineVisibility, MdOutlineVisibilityOff, MdVisibility
// MdOutlineHandshake, TbHeartHandshake, SiHandshake, FaRegHandshake, FaHandshake
// TbWritingSignOff, TbWritingOff

type Benefit = {
    title: string
    description: string
    icon1: JSX.Element
    icon2: JSX.Element
    icon3: JSX.Element
}

const iconSize = '2.8rem'
export const freelancerBenefits: Benefit[] = [
    {
        title: 'Automatic Payments',
        description:
            'Our payment system ensures timely and secure payments. We help solve disputes.',
        icon1: <RiSecurePaymentLine size={iconSize} />,
        icon2: <MdPayment size={iconSize} />,
        icon3: <FaRegMoneyBillAlt size={iconSize} />,
    },
    {
        title: 'Legal Support',
        description: 'We handle the legal matters. Focus on work, let us take care of paperwork.',
        icon1: <MdDescription size={iconSize} />,
        icon2: <FaRegFile size={iconSize} />,
        icon3: <RiFilePaper2Line size={iconSize} />,
    },
    {
        title: 'Access 100s of Jobs',
        description: 'Find your next job easily. Access many job listings on our platform.',
        icon1: <RiHandCoinLine size={iconSize} />,
        icon2: <FaBriefcase size={iconSize} />,
        icon3: <MdSearch size={iconSize} />,
    },
    {
        title: 'Simple Communication',
        description:
            'Communicate seamlessly with clients in one place. Say goodbye to the back-and-forth.',
        icon1: <FaComments size={iconSize} />,
        icon2: <MdMessage size={iconSize} />,
        icon3: <RiChatSmile2Line size={iconSize} />,
    },
]

// {
//   title: 'Access to many jobs',
//   description: 'Find a variety of freelance jobs in the event industry, all in one place.',
//   icon: <FaRegLightbulb />,
// },
// {
//   title: 'Streamlined communication',
//   description:
//     'Connect with event organizers and fellow freelancers on one platform for efficient communication.',
//   icon: <BiMessageSquareDetail />,
// },
// {
//   title: 'No more tedious paperwork',
//   description: 'Simplify your freelance work with automated paperwork and contract management.',
//   icon: <FaRegFileAlt />,
// },
// {
//   title: 'Fast and reliable payments',
//   description:
//     'Get paid on time and avoid payment disputes with secure and efficient payment processing.',
//   icon: <FaMoneyBill />,
// },
// {
//   title: 'Legal protection and support',
//   description:
//     'Rest assured that legal matters are taken care of, including contract and dispute resolution support.',
//   icon: <FaBalanceScale />,
// },
// {
//   title: 'Stronger together',
//   description:
//     'Collaborate with a community of event professionals and gain access to shared resources and support.',
//   icon: <FaUserFriends />,
// },
// {
//   title: 'Transparent ratings',
//   description:
//     'Rate businesses for transparency and help build a more trustworthy event industry.',
//   icon: <FaStar />,
