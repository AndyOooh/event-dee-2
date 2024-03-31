import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import { SetCustomClaimsParams } from 'event-dee-types';

/*
 * Callable
 * Checks if email exists in auth
 */
export const checkEmailExists = functions.https.onCall(async (email: string): Promise<boolean> => {
  try {
    console.log('checkEmailExists called!');
    const userRecord = await admin.auth().getUserByEmail(email);
    console.log('🚀  file: index.ts:40  userRecord:', userRecord);
    return true;
  } catch (error) {
    console.log('🚀  file: index.ts:44  error:', error);
    return false;
    // throw new functions.https.HttpsError('invalid-argument', "email doesn't exist");
  }
});

/*
 * Callable
 * Sets custom claims on auth user
 */
export const setCustomClaims = functions.https.onCall(
  async ({ data, context }: SetCustomClaimsParams): Promise<{ message: string }> => {
    try {
      const { uid, payload } = data;
      await getAuth().setCustomUserClaims(uid, payload);
      // /* Lookup the user associated with the specified uid. */
      // const userNew = await getAuth()
      //   .getUser(uid)
      //   .then(userRecord => {
      //     // The claims can be accessed on the user record.
      //     console.log(userRecord?.customClaims);
      //   });
      // console.log('🚀  file: crud-user.ts:85  userNew:', userNew);

      return { message: `Custom claims set on uid: ${data.uid}` };
    } catch (error) {
      throw error;
    }
  }
);
