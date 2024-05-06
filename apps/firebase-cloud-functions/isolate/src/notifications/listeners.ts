import * as functions from 'firebase-functions';
import { updateDoc } from '../helpers';
import { db } from '..';
import { createNotificationDoc } from './helpers';

/*
 * Listener - on create event
 * Creates a new notification for all users
 */
export const onCreateEvent = functions.firestore
  .document('events/{eventId}')
  .onCreate(async (snapshot, context) => {
    try {
      const event = snapshot.data();
      const newNotification = createNotificationDoc(event.creatorUid, 'event', 'newEvent', event);
      const res = await db.collection('notifications').add(newNotification);

      /* This can be filtered, e.g. to users in the same province */
      const users = await db.collection('users').get();
      users.forEach(user => {
        /* Skip creator */
        if (user.id !== event.creatorId) {
          const newUserNotification = {
            id: res.id,
            read: false,
          };
          const notifications = user.data().notifications || [];
          updateDoc('users', user.id, 'notifications', [newUserNotification, ...notifications]);
        }
      });
    } catch (error) {
      console.log('🚀  error:', error);
      throw error;
    }
  });
