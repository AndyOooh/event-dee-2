import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { db } from '..';

// listener
export const createUserDocument = functions.auth.user().onCreate(async (user: any) => {
  console.log('createUserDocument called!');
  console.log('🚀  file: index.ts:39  user:', user);
  if (!user.displayName) {
    // delete user in auh and return email + photo
    // return { email: user.email, photoURL: user.providerData[0].photoURL };
  }
  db.collection('users')
    .doc(user.uid)
    .set(JSON.parse(JSON.stringify(user)));
});

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

// Can be called from client
export const checkEmailExists = functions.https.onCall(async email => {
  try {
    console.log('checkEmailExists called!');
    const userRecord = await admin.auth().getUserByEmail(email);
    console.log('🚀  file: index.ts:40  userRecord:', userRecord);
    return { emailExists: true };
  } catch (error) {
    console.log('🚀  file: index.ts:44  error:', error);
    return false;
    // throw new functions.https.HttpsError('invalid-argument', "email doesn't exist");
  }
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
  console.log('deleting user..: user.uid ');
  // TODOD: delete user folder in storage. Also, is user deleted in auth??
  db.collection('users').doc(user.uid).delete();
});
