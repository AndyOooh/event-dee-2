import { WhereFilterOp } from '@google-cloud/firestore';

// export type DocData = { id: string; [key: string]: any };

export type FetchDocsWithQueryParams = {
  collectionName: string;
  field?: string;
  operator?: WhereFilterOp;
  value?: any;
  limit?: number;
  orderBy?: {
    field: string;
    direction?: 'asc' | 'desc';
  };
};

export type fetchDocByIdParams = {
  collectionName: string;
  id: string;
};
