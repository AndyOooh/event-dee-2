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
