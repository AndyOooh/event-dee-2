import * as yup from 'yup';

import { eventDetailsSchema } from './event-info/validation';
import { eventLocationSchema } from './event-location/validation';

export const createEventSchema = yup.object().shape({
  ...eventDetailsSchema.fields,
  ...eventLocationSchema.fields,
});

export type IcreateEventSchema = yup.InferType<typeof createEventSchema>;
