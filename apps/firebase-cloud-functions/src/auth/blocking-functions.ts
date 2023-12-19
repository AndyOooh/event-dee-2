import { HttpsError, beforeUserCreated, beforeUserSignedIn } from 'firebase-functions/v2/identity';
import * as admin from 'firebase-admin';
import { BlockingFunction } from 'firebase-functions/v1';
// import { BeforeCreateResponse } from 'firebase-functions/lib/common/providers/identity';

// export const beforecreated = beforeUserCreated(async event => {
//   try {
//     console.log('before created, event object: ', event);
//     const email = event.data.email!;
//     const userRecord = await admin.auth().getUserByEmail(email);
//     console.log('🚀  file: blocking-functions.ts:9  userRecord:', userRecord);
//     if (userRecord) {
//       console.log('Log: beforecreated, user exists. Throwing error...');
//       throw new HttpsError('invalid-argument', 'Email already exists');
//       // throw new Error('Email already exists');
//       // return new Error('Email already exists');
//     }
//     console.log('🚀  file: blocking-functions.ts:16, after if block!!!!!!!!!');

//     return {}
//   } catch (error) {
//     console.log('🚀  file: blocking-functions.ts:20  error:', error);
//     return {
//       // If no display name is provided, set it to "Guest".
//       displayName: event.data.displayName || 'Guest'
//     };

//     event.data.displayName = 'AndyOOOOOOOOOOOOOOOOOOOOOOOOOO';
//     return;

//     const res: BeforeCreateResponse = {
//       // ...event,
//       // displayName: 'AndyOOOOOOOOOOOOOOOOOOOOOOOOOO',
//       displayName: event.data.displayName || 'Guest',
//     };
//     // return res;
//     return;
//     // console.log('🚀  file: blocking-functions.ts:20  error:', error);

//     // throw new HttpsError('invalid-argument', 'Email does not exist');
//     // throw error;
//   }
// });

export const beforecreated = beforeUserCreated(async event => {
  try {
    console.log('before created, event object: ', event);
    const email = event.data.email!;
    const userRecord = await admin.auth().getUserByEmail(email);
    if (userRecord) {
      console.log('Log: beforecreated, user exists. Throwing error...');
      throw new HttpsError('invalid-argument', 'Email already exists');
    }
    /* We never make it here */
    return {};
  } catch (error) {
    return {
      displayName: event.data.uid.slice(0, 8),
      random: 'newDudeeeee',
    };
  }
});

export const beforesignedin: BlockingFunction = beforeUserSignedIn(async event => {
  try {
    console.log('before signed in, event object: ', event);
    if (event.data.displayName === 'newDudeeeee') {
      console.log('Log: beforesignedin, user is new. newDudeeeee**** 😍😍😍😍');
      event.data.displayName = event.data.uid.slice(0, 8);
      return;
    }

    const email = event.data.email!;
    const userRecord = await admin.auth().getUserByEmail(email);
    if (!userRecord) {
      // We never make it here.
      console.log('Log: beforesignedin, user does not exist. Throwing error...');
      throw new HttpsError('invalid-argument', 'Email does not exist, Andy');
      // throw new Error('Email not found');
    }
    return;
  } catch (error) {
    console.log('🚀  file: blocking-functions.ts:33  error:', error);
    // throw new HttpsError('invalid-argument', 'Email does not exist. Sign up?');
    throw error;
  }
});

/* 
Goals:
Create: User exists: block creation, user does not exist: create user - blocks log ins
Sign in: User exists: sign in, user does not exist: block sign in - blocks log ins
*/
