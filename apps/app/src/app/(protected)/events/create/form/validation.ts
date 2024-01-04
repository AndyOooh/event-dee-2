import * as yup from 'yup';

import { IeventDetailsSchema, eventDetailsSchema } from './event-info/validation';
import { IeventLocationSchema, eventLocationSchema } from './event-location/validation';
import { eventRoleSchema, eventRolesSchema, IeventRoleSchema, IeventRolesSchema } from './event-roles/validation';

export const createEventSchema = yup.object().shape({
  ...eventDetailsSchema.fields,
  ...eventLocationSchema.fields,
  // ...eventRolesSchema.fields,
  // roles: yup.array().of(eventRoleSchema),
  roles: yup.array().of(eventRoleSchema),
// }) as yup.ObjectSchema<IeventDetailsSchema & IeventLocationSchema & IeventRolesSchema>;
}) as yup.ObjectSchema<IeventDetailsSchema & IeventLocationSchema & IeventRoleSchema>;

export type IcreateEventSchema = yup.InferType<typeof createEventSchema>;
// export type IcreateEventSchema = yup.InferType<typeof eventDetailsSchema> & yup.InferType<typeof eventLocationSchema>;
