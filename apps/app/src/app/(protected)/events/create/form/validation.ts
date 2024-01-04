import * as yup from 'yup';

import { IeventDetailsSchema, eventDetailsSchema } from './event-info/validation';
import { IeventLocationSchema, eventLocationSchema } from './event-location/validation';
import {
  eventRoleSchema,
  // eventRolesSchema,
  IeventRoleSchema,
  // IeventRolesSchema,
} from './event-roles/validation';

export const createEventSchema = yup.object().shape({
  ...eventDetailsSchema.fields,
  ...eventLocationSchema.fields,
  roles: yup.array().of(eventRoleSchema),
  // ...eventRolesSchema.fields,
  // }) as yup.ObjectSchema<IeventDetailsSchema & IeventLocationSchema & IeventRolesSchema>;
  // }) as yup.ObjectSchema<IeventDetailsSchema & IeventLocationSchema & IeventRoleSchema[]>;
  // }) as IeventDetailsSchema & IeventLocationSchema;
  // });
  // }) as IeventDetailsSchema & IeventLocationSchema & { roles: IeventRoleSchema[] };
}) as yup.ObjectSchema<IeventDetailsSchema & IeventLocationSchema & { roles: IeventRoleSchema[] }>;

export type IcreateEventSchema = yup.InferType<typeof createEventSchema>;
// export type IcreateEventSchema = yup.InferType<typeof eventDetailsSchema> & yup.InferType<typeof eventLocationSchema>;

// export type IcreateEventSchema = IeventDetailsSchema & IeventLocationSchema & IeventRoleSchema[];
// export type IcreateEventSchema = IeventRoleSchema[];
