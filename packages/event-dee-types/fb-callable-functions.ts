import { WhereFilterOp } from '@google-cloud/firestore';
import { CustomClaims } from '.';

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

export type FetchDocByIdParams = {
  collectionName: string;
  id: string;
};

export type SetCustomClaimsParams = {
  data: { uid: string; payload: CustomClaims };
  context?: any; // not in use, if needed find type in fb.
};
