import { https } from 'firebase-functions';
import { WhereFilterOp } from '@google-cloud/firestore';
import { db } from '.';
import { DocumentData } from 'firebase-admin/firestore';

// type DocData = { id: string; [key: string]: any };

// type FetchDocsWithQueryParams = {
//   collectionName: string;
//   field?: string;
//   operator?: WhereFilterOp;
//   value?: any;
//   limit?: number;
//   orderBy?: {
//     field: string;
//     direction: 'asc' | 'desc';
//   };
// };

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
export const fetchDocsWithQuery: FetchDocsWithQueryFunction = https.onCall(
  async ({
    collectionName,
    field,
    operator,
    value,
    limit = 10,
    orderBy,
  // }: FetchDocsWithQueryParams): Promise<DocData[]> => {
  } => {
    try {
      const collectionRef = db.collection(collectionName);
      let query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = collectionRef;

      if (field && operator && value) {
        query = query.where(field, operator, value);
      }

      if (orderBy) {
        query = query.orderBy(orderBy.field, orderBy.direction);
      }

      const querySnapshot = await query.limit(limit || Infinity).get();
      const documents: DocData[] = [];
      querySnapshot.forEach(doc => {
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

// export const fetchDocsWithQuery = https.onCall(
//   async ({
//     collectionName,
//     field,
//     operator,
//     value,
//     limit = 10,
//   }: FetchDocsWithQueryParams): Promise<DocData[]> => {
//     try {
//       const collectionRef = db.collection(collectionName);

//       if (field && operator && value) {
//         /* Fetch based on query */
//         const querySnapshot = await collectionRef
//           .where(field, operator, value)
//           .limit(limit || Infinity)
//           .get();

//         const documents: DocData[] = [];
//         querySnapshot.forEach(doc => {
//           documents.push({ id: doc.id, ...doc.data() });
//         });

//         console.log('Fetched documents:', documents);
//         return documents;
//       } else {
//         /* Fetch entire collection */
//         const querySnapshot = await collectionRef.limit(limit).get();

//         const documents: DocData[] = [];
//         querySnapshot.forEach(doc => {
//           documents.push({ id: doc.id, ...doc.data() });
//         });

//         console.log('Fetched entire collection:', documents);
//         return documents;
//       }
//     } catch (error) {
//       console.error('Error fetching documents, fetchDocsWithQuery:', error);
//       throw new https.HttpsError('internal', 'Error fetching documents', error);
//     }
//   }
// );

type fetchDocByIdParams = {
  collectionName: string;
  id: string;
};

/*
 * Callable
 * Fetch a document by its ID.
 */
export const fetchDocById = https.onCall(
  async ({ collectionName, id }: fetchDocByIdParams): Promise<DocumentData> => {
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
