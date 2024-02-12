import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { db } from '..';
import { getAuth } from 'firebase-admin/auth';

// listener
export const onCreateUser = functions.auth.user().onCreate(async (user: any, ctx) => {
  console.log('🚀  file: crud-user.ts:8  ctx:', ctx);
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

// Sync auth usser with firebase user doc
// const user = firebase.auth().currentUser;
// user.reload().then(() => {
//   const refreshUser = firebase.auth().currentUser;
//   // do your stuff here
// })

export const deleteUser = functions.auth.user().onDelete(async (user: any) => {
  try {
    console.log('deleting user..: user.uid ');
    // TODOD: delete user folder in storage. Also, is user deleted in auth??
    await db.collection('users').doc(user.uid).delete();

    await admin
      .storage()
      .bucket()
      .deleteFiles({ prefix: `users/${user.uid}` });
  } catch (error) {
    console.log('🚀  file: crud-user.ts:68  error:', error);
  }
});

export const setCustomClaims = functions.https.onCall(async (data, context) => {
  try {
    const { uid, payload } = data;
    console.log('🚀  file: crud-user.ts:78  payload:', payload);
    console.log('🚀  file: crud-user.ts:78  uid:', uid);
    const res = await getAuth().setCustomUserClaims(uid, payload);
    console.log('🚀  file: crud-user.ts:78  res:', res);
    // Lookup the user associated with the specified uid.
    const userNew = await getAuth()
      .getUser(uid)
      .then(userRecord => {
        // The claims can be accessed on the user record.
        console.log(userRecord?.customClaims);
      });
    console.log('🚀  file: crud-user.ts:85  userNew:', userNew);

    return { message: `Custom claims set on uid: ${data.uid}` };
  } catch (error) {
    throw error;
  }
});
