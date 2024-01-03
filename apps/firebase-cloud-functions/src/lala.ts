
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const fetchDocs2 = functions.https.onCall(async (lala: string) => {
    console.log('lala 😍😍😍😍😍😍😍😍😍😍😍😍:', lala);
    return 'lala';
  });


  export const checkEmailExists2 = functions.https.onCall(async email => {
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