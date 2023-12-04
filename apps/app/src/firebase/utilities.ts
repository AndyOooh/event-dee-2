import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './clientApp';

export const checkEmailExists = async (emailToCheck: string) => {
  try {
    console.log('🚀  file: utilities.ts:8  emailToCheck:', emailToCheck);
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('email', '==', emailToCheck));
    const querySnapshot = await getDocs(q);
    console.log('querySnapshot:', querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.id, ' => ', doc.data());
    });
    //   console.log('🚀  file: utilities.ts:9  querySnapshot:', querySnapshot)
    return querySnapshot.size > 0;
  } catch (error) {
    console.error('Error checking email existence:', error);
    throw error; // Handle the error as needed
  }
};
