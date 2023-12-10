import { HttpsError, beforeUserCreated, beforeUserSignedIn } from 'firebase-functions/v2/identity';
import * as admin from 'firebase-admin';

export const beforecreated = beforeUserCreated(async event => {
  try {
    const email = event.data.email!;
    const userRecord = await admin.auth().getUserByEmail(email);
    if (userRecord) {
      throw new HttpsError('invalid-argument', 'Email already exists');
    }
    // We never make it here
  } catch (error) {
    return;
  }
});

export const beforesignedin = beforeUserSignedIn(async event => {
  try {
    const email = event.data.email!;
    const userRecord = await admin.auth().getUserByEmail(email);
    if (!userRecord) {
      // We never make it here
      throw new HttpsError('invalid-argument', 'Email does not exist');
    }
  } catch (error) {
    throw error;
  }
});
