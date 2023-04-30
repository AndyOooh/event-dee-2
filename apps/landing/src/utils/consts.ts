type NODE_ENV = 'production' | 'staging' | 'development';

const NODE_ENV = process.env.NODE_ENV as NODE_ENV;

console.log('🚀  file: consts.ts:2  NODE_ENV:', NODE_ENV);

// export const appUrl =
//   NODE_ENV === 'production'
//     ? 'https://app-event-dee2.vercel.app/'
//     : NODE_ENV === 'staging'
//     ? 'https://dev-event-dee2.vercel.app/'
//     : 'http://localhost:3000';
export const appUrl =
  NODE_ENV === 'staging'
    ? 'https://app-event-dee2.vercel.app'
    : NODE_ENV === 'production'
    ? 'https://dev-event-dee2.vercel.app'
    : 'http://localhost:3000';
