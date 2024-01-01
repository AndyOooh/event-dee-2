import * as yup from 'yup';

import { eventDetailsSchema } from './event-info/validation';

export const createEventSchema = yup.object().shape({
  ...eventDetailsSchema.fields,
});

export type IcreateEventSchema = yup.InferType<typeof createEventSchema>;
