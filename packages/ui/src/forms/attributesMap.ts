import { toTitleCase } from '../utils/helpers';

export type IAttributes = {
  _type: string;
  _label: string;
  _placeholder: string;
  _autocmplete: string;
};

export const getAttributes = (name: string) => {
//   console.log('🚀  file: attributesMap.ts:11  name:', name);
  let attributes: IAttributes;
  switch (name) {
    case 'name':
    case 'first_name':
    case 'last_name':
      attributes = {
        _type: 'text',
        _label: `Your ${toTitleCase(name)}`,
        _placeholder: `Eg. ${name === 'last_name' ? 'Doe' : 'John'}`,
        _autocmplete: name === 'last_name' ? 'family-name' : 'given-name',
      };
      break;
    case 'email':
      attributes = {
        _type: 'email',
        _label: 'Email',
        _placeholder: 'your@email.com',
        _autocmplete: 'email',
      };
      break;
    case 'new_password':
    case 'confirm_password':
      attributes = {
        _type: 'password',
        _label: toTitleCase(name),
        _placeholder: '******',
        _autocmplete: 'new-password',
      };
      break;
    case 'password':
      attributes = {
        _type: 'password',
        _label: toTitleCase(name),
        _placeholder: '******',
        _autocmplete: 'current-password',
      };
      break;
    default:
      attributes = {
        _type: '',
        _label: '',
        _placeholder: '',
        _autocmplete: '',
      };
  }

  return attributes;
};
