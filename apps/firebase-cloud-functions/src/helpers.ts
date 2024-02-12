import { db } from '.';

/*
 * Is this complete?
 */
export const updateDoc = async (collection: string, docId: string, field: string, data: any) => {
  console.log('🚀  data:', data);
  console.log('🚀  field:', field);
  const docRef = db.collection(collection).doc(docId);
  await docRef.update({ [field]: data });
};
