import { format, intervalToDuration } from 'date-fns';
import {
  EmailAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  User,
  browserPopupRedirectResolver,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
} from 'firebase/auth';
import { auth, db } from './clientApp';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';

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
  const now = new Date();
  const then = new Date(unixSeconds * 1000);
  const diff = intervalToDuration({ start: then, end: now });
  return diff;
};

export const reAuthenticate = async (password?: string) => {
  try {
    const authUser = auth.currentUser;
    const { providerId } = authUser.providerData[0];

    if (providerId === 'password') {
      const userProvidedPassword = password;
      const credential = EmailAuthProvider.credential(authUser.email, userProvidedPassword);
      const result = await reauthenticateWithCredential(authUser, credential);
      return true;
    } else {
      const provider =
        providerId === 'google.com' ? new GoogleAuthProvider() : new FacebookAuthProvider();
      await reauthenticateWithPopup(authUser, provider, browserPopupRedirectResolver);
      return true;
    }
  } catch (error) {
    console.error('🚫 reAuthenticate error', error);
    return error;
  }
};

//  create a function that takes a collection name and payload and creates a document in that collection.
//  If the collection does not exist, it will be created.
export const createDocument = async (collectionName: string, payload: any) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), payload);
    console.log('Document written with ID: ', docRef.id);
    return docRef;
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error; // Handle the error as needed
  }
};

export const fetchUser = async (uid: string) => {
  const userDocRef = doc(db, 'users', uid);
  const userDoc = await getDoc(userDocRef);
  return { currentUser: userDoc.data() };
};
