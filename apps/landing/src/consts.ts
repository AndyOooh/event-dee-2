const { NODE_ENV } = process.env as { NODE_ENV: 'production' | 'staging' | 'development' };

export const appUrl =
  NODE_ENV === 'production'
    ? 'https://app.event-dee.vercel.app/'
    : NODE_ENV === 'staging'
    ? 'https://dev.event-dee.vercel.app/'
    : 'https://localhost:3000';
