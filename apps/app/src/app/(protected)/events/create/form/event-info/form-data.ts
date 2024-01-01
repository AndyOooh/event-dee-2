import { IeventDetailsSchema } from './validation';
import { SelectOptions } from 'event-dee-types';

type FormInput = {
  title: keyof IeventDetailsSchema;
  type: 'text' | 'select' | 'date';
  tooltip: string;
  options?: SelectOptions;
  prepend?: string;
  extraProps?: any;
};

export const formArrayEventDetails: FormInput[] = [
  {
    title: 'event_header',
    type: 'text',
    tooltip: 'Enter a header',
  },

  {
    title: 'event_name',
    type: 'text',
    tooltip: 'Enter name of the event',
  },
  {
    title: 'event_type',
    type: 'select',
    tooltip: 'Select type of the event',
    options: ['Video shoot', 'Photo shoot', 'Fashion show', 'Promotional event', 'Other'],
  },
  {
    title: 'date',
    type: 'date',
    tooltip: 'Enter date of the event',
  },
  {
    title: 'description',
    type: 'text',
    tooltip: 'Enter a description',
  },
];
