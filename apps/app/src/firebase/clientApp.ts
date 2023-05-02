// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
// import { getApp, getApps } from 'firebase/app';
// import { initializeApp } from 'firebase-admin';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyAU_3WW0pSUNzFdHOV8oQlwaDteKbHbg98",
//   authDomain: "kryptoskatt-andyo.firebaseapp.com",
//   projectId: "kryptoskatt-andyo",
//   storageBucket: "kryptoskatt-andyo.appspot.com",
//   messagingSenderId: "271514862250",
//   appId: "1:271514862250:web:b23e2ca59588e2ccbc86d3"
// };

// const firebaseConfig = {
//   apiKey: 'AIzaSyCavc1qCa9Z7Tv5RXNsPkMe4_5cU1Ymi5Y',
//   authDomain: 'event-jobs-8d68c.firebaseapp.com',
//   projectId: 'event-jobs-8d68c',
//   storageBucket: 'event-jobs-8d68c.appspot.com',
//   messagingSenderId: '1018897344160',
//   appId: '1:1018897344160:web:28566550d666c37b384bc5',
// };

const firebaseConfig = {
  apiKey: "AIzaSyBFfaR135fkZ7suIsQ4EYlORhuZriJoe-E",
  authDomain: "event-dee-staging.firebaseapp.com",
  projectId: "event-dee-staging",
  storageBucket: "event-dee-staging.appspot.com",
  messagingSenderId: "834766394640",
  appId: "1:834766394640:web:711623e46556cc9225c195"
}
// console.log('🚀  file: clientApp.ts:29  firebaseConfig:', firebaseConfig);

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, auth, storage };

// env vars not initialised on client (see console). Why?
