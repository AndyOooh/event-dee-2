const { NODE_ENV } = process.env as { NODE_ENV: 'production' | 'staging' | 'development' };

export const appUrl =
  NODE_ENV === 'production'
    ? 'https://app-event-dee2.vercel.app'
    : NODE_ENV === 'staging'
    ? 'https://dev-event-dee2.vercel.app'
    : 'http://localhost:3001';
