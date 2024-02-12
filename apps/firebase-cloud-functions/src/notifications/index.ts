// import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { Timestamp } from 'firebase-admin/firestore';
import { updateDoc } from '../helpers';
import { db } from '..';

// export const createNotification = async (userId: string, type: string, data: any) => {
const createUserNotification = (userId: string, type: string, data: any) => {
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

/*
 * What the notification is about
 * event, comment on event, invite to contract, contract signed, etc.
 */
type Entity = 'event' | 'comment';
type NotificationType = 'newEvent' | 'newComment' | 'newContract' | 'contractSigned';

const createNotificationDoc = async (
  actorId: string, // useerId of the user initiating the action
  entity: Entity,
  type: NotificationType,
  data: any
) => {
  const notification = {
    actorId,
    entity,
    type,
    data,
    // read: false,
    createdAt: Timestamp.now(),
  };
  return notification;
};

// listener for events creation, executes createNotification
export const onCreateEvent = functions.firestore
  .document('events/{eventId}')
  .onCreate(async (snapshot, context) => {
    console.log('🚀  context:', context);
    const event = snapshot.data();
    console.log('🚀  event:', event);

    const notification = createNotificationDoc(event.userId, 'event', 'newEvent', context);
    await db.collection('notifications').add(notification);

    /* This can be filtered, e.g. to users in same province */
    const users = await db.collection('users').get();
    users.forEach(user => {
      const newNotification = createUserNotification(user.id, 'newEvent', context);
      const notifications = user.data().notifications || [];
      updateDoc('users', user.id, 'notifications', [newNotification, ...notifications]);
    });
  });
