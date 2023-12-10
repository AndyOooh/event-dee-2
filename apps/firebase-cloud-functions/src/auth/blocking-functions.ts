import { HttpsError, beforeUserCreated, beforeUserSignedIn } from 'firebase-functions/v2/identity';
import * as admin from 'firebase-admin';
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
    console.log('🚀  file: blocking-functions.ts:69  email:', email)
    // const userDoc = await admin.firestore().collection('users').doc(email).get();
    const userRecord = await admin.auth().getUserByEmail(email);
    console.log('🚀  file: blocking-functions.ts:9  userRecord:', userRecord);
    if (userRecord) {
      console.log('Log: beforecreated, user exists. Throwing error...');
      throw new HttpsError('invalid-argument', 'Email already exists');
      // throw new Error('Email already exists');
      // return new Error('Email already exists');
    }
    console.log('We never make it here********************');
    return {
      // If no display name is provided, set it to "Guest".
      displayName: 'AndyOOOOOOOOOOOOOOOOOOOOOOOOOO',
    };
  } catch (error) {
    return {
      displayName: 'AndyOOOOOOOOOOOOOOOOOOOOOOOOOO',
    };
  }
});

export const beforesignedin = beforeUserSignedIn(async event => {
  try {
    console.log('before signed in, event object: ', event);
    const email = event.data.email!;
    const userRecord = await admin.auth().getUserByEmail(email);
    console.log('🚀  file: blocking-functions.ts:29  userRecord:', userRecord);
    if (!userRecord) {
      console.log('Log: beforesignedin, user does not exist. Throwing error...');
      throw new HttpsError('invalid-argument', 'Email does not exist, Andy');
      // throw new Error('Email not found');
    }
    return;

    console.log('🚀  file: blocking-functions.ts:36, after if block!!!!!!!!!');
  } catch (error) {
    console.log('🚀  file: blocking-functions.ts:33  error:', error);
    // throw new HttpsError('invalid-argument', 'Email does not exist. Sign up?');
    throw error;
  }
});


