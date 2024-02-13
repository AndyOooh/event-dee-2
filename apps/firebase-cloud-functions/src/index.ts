import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export * from './auth';
export * from './callable';
export * from './notifications';

admin.initializeApp();
export const db = admin.firestore();

export const test = functions.https.onRequest((req, res) => {
  res.send('Hello from Firebase!');
});

export const testDebugger = functions.https.onRequest((req, res) => {
  const a = 22;
  const b = 33;
  const c = a + b;
  console.log('🚀  c:', c);
  res.send({ message: 'Hello from Firebase!', data: c });
});
