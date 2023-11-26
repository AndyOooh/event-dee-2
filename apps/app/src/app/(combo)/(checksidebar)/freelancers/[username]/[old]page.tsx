// 'use client';

export {}

// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { ProfilePageFreelancerPrivate } from './components/profilePrivate/ProfilePageFreelancerPrivate';
// import { ProfilePageFreelancerPublic } from './components/profilePublic/ProfilePageFreelancerPublic';
// import Sidebar from '__components/Sidebar/Sidebar';
// import { AuthCard } from '__components/AuthCard';
// import { BiMenu } from 'react-icons/bi';
// import { styles } from '__styles/styles';
// import { LoaderSpinner } from '__components/ui/LoaderSpinner';
// import { auth } from '__firebase/clientApp';

// type Props = {};

// // Check if logged in and show page based on that, similar to facebook!

// export default function FreelancerProfile(props: Props) {
//   const [user, loading, error] = useAuthState(auth);

//   return loading ? (
//     <LoaderSpinner />
//   ) : user ? (
//     // Most of this is copy/paste from (protected)/page.tsx and layout.tsx.
//     // Create a component?
//     <div className='flex'>
//       <Sidebar />
//       <div className='bg-base-300 w-full p-4'>
//         <div className='flex justify-between mb-8'>
//           <BiMenu size='2.5rem' className='lg:invisible' />
//           <AuthCard />
//         </div>
//         {/* <div className='flex gap-4 p-8 max-w-7xl mx-auto'> */}
//         <div className={`${styles.innerWidth} flex gap-4`}>
//           <ProfilePageFreelancerPrivate />
//         </div>
//       </div>
//     </div>
//   ) : (
//     <ProfilePageFreelancerPublic />
//   );
// }
