// import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { db, updateDoc } from '.';
import { Timestamp } from 'firebase-admin/firestore';

// export const createNotification = async (userId: string, type: string, data: any) => {
export const createNotification = (userId: string, type: string, data: any) => {
  // const fb1 = Timestamp
  // console.log('🚀  fb1:', fb1)
  // const fb99 = Timestamp.now()
  // console.log('🚀  fb99:', fb99)
  // const ts3 = admin.firestore.Timestamp?.fromDate(new Date());
  // console.log('🚀  ts3:', ts3)
  // const ts2 = admin.firestore.FieldValue.serverTimestamp();
  // console.log('🚀  ts2:', ts2)
  // const ts1 = Timestamp.now()
  // console.log('🚀  ts1:', ts1)
  const notification = {
    userId,
    type, // event, comment on event, invite to contract, contract signed, etc.
    data,
    read: false,
    // createdAt: admin.firestore.FieldValue.serverTimestamp(),
    createdAt: Timestamp.now(),
  };
  return notification;
  // const res = await db.collection('notifications').add(notification);
  // return res;
};

// listener for events creation, executes createNotification
export const eventCreated = functions.firestore
  .document('events/{eventId}')
  .onCreate(async (snapshot, context) => {
    console.log('🚀  context:', context);
    const event = snapshot.data();
    console.log('🚀  event:', event)

    const users = await db.collection('users').get();
    users.forEach(user => {
      const newNotification = createNotification(user.id, 'newEvent', context);
      const notifications = user.data().notifications || [];
      updateDoc('users', user.id, 'notifications', [newNotification, ...notifications]);
    });
  });
