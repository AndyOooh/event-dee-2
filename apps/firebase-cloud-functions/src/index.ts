import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp } from 'firebase-admin/app';
import { testFuncFromUi } from '@repo/types';

export * from './auth/index.js';
export * from './callable.js';
export * from './notifications/index.js';

initializeApp();
export const db = getFirestore();

export const test = functions.https.onRequest((req, res) => {
  res.send('Hello from Firebase 888!');
});

export const testDebugger = functions.https.onRequest((req, res) => {
  const a = 22;
  const b = 138;
  const c = a + b;
  const d = testFuncFromUi(10);
  console.log('🚀  c:', c);
  res.send({ message: 'Hello from Firebase!', data: c, thisisD: d });
  // res.send({ message: 'Hello from Firebase!', data: c });
});
