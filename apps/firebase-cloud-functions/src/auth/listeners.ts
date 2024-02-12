import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { db } from '..';

/*
 * listener - on create user (auth)
 * Creates a new user doc
 */
export const onCreateUser = functions.auth.user().onCreate(async (user: any, ctx) => {
  db.collection('users')
    .doc(user.uid)
    .set(JSON.parse(JSON.stringify(user)));
});

/*
 * Listener - on delete user (auth)
 * Deletes user doc
 */
export const onDeleteUser = functions.auth.user().onDelete(async (user: any) => {
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
