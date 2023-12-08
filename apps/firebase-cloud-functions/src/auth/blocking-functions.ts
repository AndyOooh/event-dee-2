import {  beforeUserCreated, beforeUserSignedIn } from 'firebase-functions/v2/identity';
import * as admin from 'firebase-admin';

export const beforecreated = beforeUserCreated(async event => {
  try {
    console.log('before created, event object: ', event);
    const email = event.data.email!;
    const userRecord = await admin.auth().getUserByEmail(email);
    if (userRecord) {
      console.log('Log: beforecreated, user exists. Throwing error...');
      // throw new HttpsError('invalid-argument', 'Email already exists');
      throw new Error('Email already exists');
    }
    
    return;
  } catch (error) {
    throw error;
  }
});

export const beforesignedin = beforeUserSignedIn(async event => {
  try {
    console.log('before signed in, event object: ', event);
    const email = event.data.email!;
    const userRecord = await admin.auth().getUserByEmail(email);
    if (!userRecord) {
      console.log('Log: beforesignedin, user does not exist. Throwing error...');
      // throw new HttpsError('invalid-argument', 'Email does not exist');
      throw new Error('Email not found');
    }
  } catch (error) {
    throw error;
  }
});
