import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './clientApp';
import { format, intervalToDuration } from 'date-fns';

/* This was already creeated in FCF, so turing this off */
// export const checkEmailExists = async (emailToCheck: string) => {
//   try {
//     if (!emailToCheck) return false;
//     const usersCollection = collection(db, 'users');
//     const q = query(usersCollection, where('email', '==', emailToCheck));
//     const querySnapshot = await getDocs(q);
//     console.log('checkEmailExists querySnapshot length: ', querySnapshot.size);
//     querySnapshot.forEach(doc => {
//       console.log(doc.id, ' => ', doc.data());
//     });
//     return querySnapshot.size > 0;
//   } catch (error) {
//     console.error('Error checking email existence:', error);
//     throw error; // Handle the error as needed
//   }
// };

export const formatDate = (_date: any, isUnixSeconds: boolean = false) => {
  if (!_date) return null;
  if (isUnixSeconds) {
    const date = format(new Date(_date.seconds * 1000), 'yyyy-MM-dd');
    return date;
  }
  const date = format(new Date(_date), 'yyyy-MM-dd');
  return date;
};

export const timeDiff = (unixSeconds: number) => {
  if (!unixSeconds) return null;
  console.log('🚀  file: utilities.ts:28  unixSeconds:', unixSeconds);
  const now = new Date();
  const then = new Date(unixSeconds * 1000);
  console.log('🚀  file: utilities.ts:30  then:', then);
  const diff = intervalToDuration({ start: then, end: now });
  return diff;
};
