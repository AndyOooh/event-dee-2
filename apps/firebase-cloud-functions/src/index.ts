import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
export * from './auth';
export * from './callable';
export * from './notifications';

admin.initializeApp();
export const db = admin.firestore();

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const test = functions.https.onRequest((req, res) => {
  console.log('🚀  file: index.ts:47  req:', req.body);
  // console.log('🚀  file: index.ts:47  res:', res);
  res.send('Hello from Firebase!');
});
