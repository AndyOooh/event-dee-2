import { https } from 'firebase-functions';
import { db } from '.';
import { DocumentData, Query } from 'firebase-admin/firestore';
import {
  // DocData,
  FetchDocsWithQueryParams,
  FetchDocByIdParams,
} from 'event-dee-types';

/**
 * Callable
 * Fetch documents based on a query or fetch entire collection.
 * @param {string} collectionName - Name of the Firestore collection.
 * @param {string} [field] - Field to query on.
 * @param {WhereFilterOp} [operator] - Query operator (e.g., '==', '>', '<').
 * @param {any} [value] - Value to compare in the query.
 * @param {number} [limit] - Number of documents to limit the result to.
 * @param {object} [orderBy] - Field to order by and direction.
 * @returns {Promise<DocData[]>} - Array of documents matching the query or the entire collection.
 */

export const fetchDocsWithQuery = https.onCall(
  async ({
    collectionName,
    field,
    operator,
    value,
    limit = 10,
    orderBy,
  }: FetchDocsWithQueryParams): Promise<DocumentData[]> => {
    try {
      const collectionRef = db.collection(collectionName);
      let query: Query<DocumentData> = collectionRef;

      if (field && operator && value) {
        query = query.where(field, operator, value);
      }

      if (orderBy) {
        query = query.orderBy(orderBy.field, orderBy.direction || 'asc');
      }

      const querySnapshot = await query.limit(limit || Infinity).get();
      const documents: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });

      console.log('Fetched documents:', documents);
      return documents;
    } catch (error) {
      console.error('Error fetching documents, fetchDocsWithQuery:', error);
      throw new https.HttpsError('internal', 'Error fetching documents', error);
    }
  }
);

/*
 * Callable
 * Fetch a document by its ID.
 * @param {string} collectionName - Name of the Firestore collection.
 * @param {string} id - ID of the document to fetch.
 */
export const fetchDocById = https.onCall(
  async ({ collectionName, id }: FetchDocByIdParams): Promise<DocumentData> => {
    try {
      const collectionRef = db.collection(collectionName);

      const querySnapshot = await collectionRef.doc(id).get();

      const document = querySnapshot.data()!;
      return document;
    } catch (error) {
      console.error('Error fetching documents, fetchDocById:', error);
      throw new https.HttpsError('internal', 'Error fetching documents', error);
    }
  }
);
