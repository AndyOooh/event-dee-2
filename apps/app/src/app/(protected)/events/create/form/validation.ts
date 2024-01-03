import * as yup from 'yup';

import { IeventDetailsSchema, eventDetailsSchema } from './event-info/validation';
import { IeventLocationSchema, eventLocationSchema } from './event-location/validation';

export const createEventSchema = yup.object().shape({
  ...eventDetailsSchema.fields,
  ...eventLocationSchema.fields,
}) as yup.ObjectSchema<IeventDetailsSchema & IeventLocationSchema>;

export type IcreateEventSchema = yup.InferType<typeof createEventSchema>;
// export type IcreateEventSchema = yup.InferType<typeof eventDetailsSchema> & yup.InferType<typeof eventLocationSchema>;
