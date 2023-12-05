import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './clientApp';
import { format } from 'date-fns';

export const checkEmailExists = async (emailToCheck: string) => {
  try {
    if (!emailToCheck) return true;
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('email', '==', emailToCheck));
    const querySnapshot = await getDocs(q);
    console.log('querySnapshot:', querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.id, ' => ', doc.data());
    });
    return querySnapshot.size > 0;
  } catch (error) {
    console.error('Error checking email existence:', error);
    throw error; // Handle the error as needed
  }
};

export const fbTimestampToDateInput = (unixSeconds: number) => {
  const date = format(new Date(unixSeconds * 1000), 'yyyy-MM-dd');
  return date;
};
