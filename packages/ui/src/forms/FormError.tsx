import { FIREBASE_ERRORS } from '../utils/firebaseErrors';

type Props = {
  formError?: string;
  authError?: any;
};

export const FormError = ({ formError, authError }: Props) => {
  return formError || authError ? (
    <p className='text-xs text-error px-2'>
      {formError || FIREBASE_ERRORS[authError?.message as keyof typeof FIREBASE_ERRORS]}
    </p>
  ) : null;
};
