import { IeventLocationSchema } from './validation';
import { SelectOptions } from 'event-dee-types';

type FormInput = {
  title: keyof IeventLocationSchema;
  type: 'text' | 'select' | 'date';
  tooltip: string;
  options?: SelectOptions;
  prepend?: string;
  extraProps?: any;
};

// export const formArrayEventDetails: FormInput[] = [
//   {
//     title: 'search',
//     type: 'text',
//     tooltip: 'Enter search',
//   },
//   {
//     title: 'street_name',
//     type: 'text',
//     tooltip: 'Enter street name',
//   },
//   {
//     title: 'street_number',
//     type: 'text',
//     tooltip: 'Enter street number',
//   },
//   {
//     title: 'khet_sublocality',
//     type: 'text',
//     tooltip: 'Enter khet/sublocality',
//   },
//   {
//     title: 'province',
//     type: 'text',
//     tooltip: 'Enter province',
//   },
//   {
//     title: 'postal_code',
//     type: 'text',
//     tooltip: 'Enter postal code',
//   },
// ];
