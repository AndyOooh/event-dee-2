// import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { Timestamp } from 'firebase-admin/firestore';
// import { updateDoc } from '../helpers';
import { db } from '..';

// export const createNotification = async (userId: string, type: string, data: any) => {
// const createUserNotification = (docId: string) => {
//   return  {
//     docId,
//     read: false,
//   };
// };

/*
 * What the notification is about
 * event, comment on event, invite to contract, contract signed, etc.
 */
type Entity = 'event' | 'comment';
type NotificationType = 'newEvent' | 'newComment' | 'newContract' | 'contractSigned';

const createNotificationDoc = (
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

    const newNotification = createNotificationDoc(event.creatorId, 'event', 'newEvent', context);
    console.log('🚀  newNotification:', newNotification);
    const res = await db.collection('notifications').add(newNotification);
    const notification = (await res.get()).data();
    console.log('🚀  notification:', notification);

    // /* This can be filtered, e.g. to users in same province */
    // const users = await db.collection('users').get();
    // users.forEach(user => {
    //   const newNotification = {
    //     notification.id,
    //     read: false,
    //   }
    //   const notifications = user.data().notifications || [];
    //   updateDoc('users', user.id, 'notifications', [newNotification, ...notifications]);
    // });
  });
