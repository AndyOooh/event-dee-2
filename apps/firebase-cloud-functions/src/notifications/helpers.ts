import { Timestamp } from 'firebase-admin/firestore';

/*
 * What the notification is about
 * event, comment on event, invite to contract, contract signed, etc.
 */
type Entity = 'event' | 'comment';
type NotificationType = 'newEvent' | 'newComment' | 'newContract' | 'contractSigned';

export const createNotificationDoc = (
  actorId: string, // userId of the user initiating the action
  entity: Entity,
  type: NotificationType,
  data: any
) => {
  const notification = {
    actorId,
    entity,
    type,
    data,
    createdAt: Timestamp.now(),
  };
  return notification;
};

// export const createUserNotification = async (userId: string, type: string, data: any) => {
// const createUserNotification = (docId: string) => {
//   return  {
//     docId,
//     read: false,
//   };
// };
