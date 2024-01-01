export const PW_MIN_LENGTH = 6;

export const DEFAULT_PROFILE_PHOTO_URL =
  process.env.NEXT_PUBLIC_EMULATORS_ON === 'true'
    ? 'http://localhost:9199/event-dee-staging.appspot.com/misc/profile-photo-placeholder.jpg'
    : 'https://storage.cloud.google.com/event-dee-staging.appspot.com/misc/profile-photo-placeholder.jpg';
