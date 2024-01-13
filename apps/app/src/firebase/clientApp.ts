import { initializeApp, getApp, getApps, FirebaseOptions } from 'firebase/app';
import {
  browserLocalPersistence,
  browserPopupRedirectResolver,
  browserSessionPersistence,
  connectAuthEmulator,
  getAuth,
  indexedDBLocalPersistence,
  initializeAuth,
} from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { connectFunctionsEmulator, getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'event-dee-staging.firebaseapp.com',
  projectId: 'event-dee-staging',
  storageBucket: 'event-dee-staging.appspot.com',
  messagingSenderId: '834766394640',
  appId: '1:834766394640:web:711623e46556cc9225c195',
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
// const auth = initializeAuth(app, {
//   persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence],
//   popupRedirectResolver: browserPopupRedirectResolver,
// });
const functions = getFunctions();
const getCloudFunction = (functionName: string) => {
  const returnedFunction = httpsCallable(functions, functionName);
  return returnedFunction;
};

// if (process.env.NODE_ENV.match(/development/i) || window.location.hostname === 'localhost') {
if (true) {
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectStorageEmulator(storage, 'localhost', 9199);
  connectFunctionsEmulator(functions, 'localhost', 5001);
}

export { app, db, auth, storage, getCloudFunction };
