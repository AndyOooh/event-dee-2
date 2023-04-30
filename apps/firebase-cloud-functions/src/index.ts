import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp();
const db = admin.firestore();

// export const createUserDocument = functions.auth.user().onCreate(async user => {
//   const userRef = db.doc(`users/${user.uid}`);
//   const snapshot = await userRef.get();
//   if (!snapshot.exists) {
//     await userRef.set({
//       displayName: user.displayName,
//       email: user.email,
//       photoURL: user.photoURL,
//       createdAt: admin.firestore.FieldValue.serverTimestamp(),
//     });
//   }
// });

export const createUserDocument = functions.auth.user().onCreate(async (user: any) => {
  console.log('hahha');
  db.collection('users')
    .doc(user.uid)
    .set(JSON.parse(JSON.stringify(user)));
});
