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

// listener
export const createUserDocument = functions.auth.user().onCreate(async (user: any) => {
  console.log('🚀  file: index.ts:39  user:', user)
  if (!user.displayName) {
    // delete user in auh and return email + photo
    // return { email: user.email, photoURL: user.providerData[0].photoURL };
  }
  console.log('hahha');
  db.collection('users')
    .doc(user.uid)
    .set(JSON.parse(JSON.stringify(user)));
});

// Can be called from client
export const checkEmailExists = functions.https.onCall(async (email, context) => {
  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    console.log('🚀  file: index.ts:40  userRecord:', userRecord);
    return { emailExists: true };
  } catch (error) {
    console.log('🚀  file: index.ts:44  error:', error);
    return false;
    // throw new functions.https.HttpsError('invalid-argument', "email doesn't exist");
  }
});

export const test = functions.https.onRequest((req, res) => {
  console.log('🚀  file: index.ts:47  res:', res);
  console.log('🚀  file: index.ts:47  req:', req);
  res.send('Hello from Firebase!');
});

// Do the oppiste? Listen for ipdates to userDoc and then update the auth user
// export const updateUserDocument = functions.auth.user().onUpdate(async (user: any) => {
//   console.log('hahha');
//   db.collection('users')
//     .doc(user.uid)
//     .set(JSON.parse(JSON.stringify(user)));
// });

// Sync auth usser with firebase user doc
// const user = firebase.auth().currentUser;
// user.reload().then(() => {
//   const refreshUser = firebase.auth().currentUser;
//   // do your stuff here
// })

export const deleteUser = functions.auth.user().onDelete(async (user: any) => {
  console.log('deleting user: user.uid ');
  db.collection('users').doc(user.uid).delete();
});
