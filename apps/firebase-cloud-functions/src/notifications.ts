import * as admin from 'firebase-admin';
import { db } from '.';

export const createNotification = (userId: string, type: string, data: any) => {
  const notification = {
    userId,
    type, // event, comment on event, invite to contract, contract signed, etc.
    data,
    read: false,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };
  return db.collection('notifications').add(notification);
};
