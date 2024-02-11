import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { db } from '.';

export const createNotification = async (userId: string, type: string, data: any) => {
  const notification = {
    userId,
    type, // event, comment on event, invite to contract, contract signed, etc.
    data,
    read: false,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };
  const res = await db.collection('notifications').add(notification);
  return res;
};

// listener for events creation, executes createNotification
export const eventCreated = functions.firestore
  .document('events/{eventId}')
  .onCreate(async (snapshot, context) => {
    // sent noti to all users
    const event = snapshot.data();
    console.log('🟣🟣🟣🟣🟣  event:', event)
    
    const notification = {
      title: 'New event!',
      body: `A new event has been created: ${event.title}`,
    };
    const users = await db.collection('users').get();
    users.forEach(user => {
      const notification = createNotification(user.id, 'newEvent', {});
      // todo: update user doc with new notification pushed to aray

      


      
    });
  });
