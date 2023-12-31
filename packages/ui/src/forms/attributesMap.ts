import { toTitleCase } from '../utils/helpers';

export type IAttributes = {
  _type: string;
  _label: string;
  _placeholder: string;
  _autocmplete: string;
  _rows?: number;
  _maxLenght?: number;
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
        _label: `${toTitleCase(name)}`,
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
    case 'current_password':
    case 'password':
      attributes = {
        _type: 'password',
        _label: toTitleCase(name),
        _placeholder: '******',
        _autocmplete: 'current-password',
      };
      break;
    case 'company_name':
      attributes = {
        _type: 'text',
        _label: 'Company Name',
        _placeholder: 'Eg. Google',
        _autocmplete: 'organization',
      };
      break;
    case 'invite_link':
      attributes = {
        _type: 'text',
        _label: 'Invite Link',
        _placeholder: '',
        _autocmplete: 'url',
      };
      break;
    case 'province':
      attributes = {
        _type: 'text',
        _label: 'Province',
        _placeholder: 'Eg. Bangkpl',
        _autocmplete: 'address-level1',
      };
      break;
    case 'gender':
      attributes = {
        _type: 'dropdown',
        _label: 'Gender',
        _placeholder: 'Eg. Female',
        _autocmplete: 'address-level1',
      };
      break;
    case 'pronouns':
      attributes = {
        _type: 'dropdown',
        _label: 'Pronouns',
        _placeholder: 'Eg. she/Her',
        _autocmplete: 'address-level1',
      };
      break;
    case 'links.0':
      attributes = {
        _type: 'text',
        _label: 'LinkedIn',
        _placeholder: 'https://www.linkedin.com/in/your-name',
        _autocmplete: 'url',
      };
      break;
    case 'links.1':
      attributes = {
        _type: 'text',
        _label: 'Instagram',
        _placeholder: 'https://www.instagram.com/your-name',
        _autocmplete: 'url',
      };
      break;
    case 'links.2':
      attributes = {
        _type: 'text',
        _label: 'Facebook',
        _placeholder: 'https://www.facebook.com/your-name',
        _autocmplete: 'url',
      };
      break;
    case 'links.3':
      attributes = {
        _type: 'text',
        _label: 'Twitter',
        _placeholder: 'https://www.twitter.com/your-name',
        _autocmplete: 'url',
      };
      break;
    case 'links.4':
      attributes = {
        _type: 'text',
        _label: 'TikTok',
        _placeholder: 'https://www.tiktok.com/@your-name',
        _autocmplete: 'url',
      };
      break;
    case 'links.5':
      attributes = {
        _type: 'text',
        _label: 'Youtube',
        _placeholder: 'https://www.youtube.com/your-name',
        _autocmplete: 'url',
      };
      break;
    case 'profile_header':
      attributes = {
        _type: 'text',
        _label: 'Profile Header',
        _placeholder: 'A one-liner about you',
        _autocmplete: 'url',
        _maxLenght: 50,
      };
      break;
    case 'profile_text':
      attributes = {
        _type: 'textarea',
        _label: 'Profile Text',
        _placeholder: 'A bit more about you',
        _autocmplete: 'url',
        _rows: 5,
        _maxLenght: 250,
      };
      break;
    case 'dob':
      attributes = {
        _type: 'date',
        // _type: 'text',
        _label: 'Date of Birth',
        _placeholder: 'Eg. 01/01/1990',
        _autocmplete: 'bday',
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
