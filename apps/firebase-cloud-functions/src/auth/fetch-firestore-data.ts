import { https, Response } from 'firebase-functions';
// import { db } from './path-to-firebase'; // Adjust the import path based on your project structure
import { WhereFilterOp } from '@google-cloud/firestore';
import { db } from '..';

type Params = {
  collectionName: string;
  field?: string;
  operator?: WhereFilterOp;
  value?: any;
  limit?: number;
};

type DocumentData = { id: string; [key: string]: any };

type Return = Promise<DocumentData[]>;

/**
 * Fetch documents based on a query or fetch entire collection.
 * @param {string} collectionName - Name of the Firestore collection.
 * @param {string} [field] - Field to query on.
 * @param {WhereFilterOp} [operator] - Query operator (e.g., '==', '>', '<').
 * @param {any} [value] - Value to compare in the query.
 * @param {number} [limit] - Number of documents to limit the result to.
 * @returns {Promise<Array>} - Array of documents matching the query or the entire collection.
 */
export const fetchDocs = https.onCall(
  async ({ collectionName, field, operator, value, limit }: Params): Return => {
    try {
      console.log('in fetchDocs');

      const collectionRef = db.collection(collectionName);

      if (field && operator && value) {
        // Fetch based on query
        const querySnapshot = await collectionRef
          .where(field, operator, value)
          .limit(limit || Infinity)
          .get();

        const documents: DocumentData[] = [];
        querySnapshot.forEach(doc => {
          documents.push({ id: doc.id, ...doc.data() });
        });

        console.log('Fetched documents:', documents);
        return documents;
      } else {
        // Fetch entire collection
        const querySnapshot = await collectionRef.limit(limit || Infinity).get();

        const documents: DocumentData[] = [];
        querySnapshot.forEach(doc => {
          documents.push({ id: doc.id, ...doc.data() });
        });

        console.log('Fetched entire collection:', documents);
        return documents;
      }
    } catch (error) {
      console.error('Error fetching documents:', error);
      throw new https.HttpsError('internal', 'Error fetching documents', error);
    }
  }
);
