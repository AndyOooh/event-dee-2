import { toTitleCase } from '../utils/helpers';

export type IAttributes = {
  _type: string;
  _label: string;
  _placeholder: string;
  _autocomplete?: string;
  _rows?: number;
  _maxLenght?: number;
  _step?: number;
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
        _autocomplete: name === 'last_name' ? 'family-name' : 'given-name',
      };
      break;
    case 'email':
      attributes = {
        _type: 'email',
        _label: 'Email',
        _placeholder: 'your@email.com',
        _autocomplete: 'email',
      };
      break;
    case 'new_password':
    case 'confirm_password':
      attributes = {
        _type: 'password',
        _label: toTitleCase(name),
        _placeholder: '******',
        _autocomplete: 'new-password',
      };
      break;
    case 'current_password':
    case 'password':
      attributes = {
        _type: 'password',
        _label: toTitleCase(name),
        _placeholder: '******',
        _autocomplete: 'current-password',
      };
      break;
    case 'company_name':
      attributes = {
        _type: 'text',
        _label: 'Company Name',
        _placeholder: 'Eg. Google',
        _autocomplete: 'organization',
      };
      break;
    case 'invite_link':
      attributes = {
        _type: 'text',
        _label: 'Invite Link',
        _placeholder: '',
        _autocomplete: 'url',
      };
      break;
    case 'province':
      attributes = {
        _type: 'text',
        _label: 'Province',
        _placeholder: 'Eg. Bangkpl',
        _autocomplete: 'address-level1',
      };
      break;
    case 'gender':
      attributes = {
        _type: 'dropdown',
        _label: 'Gender',
        _placeholder: 'Eg. Female',
        _autocomplete: 'address-level1',
      };
      break;
    case 'pronouns':
      attributes = {
        _type: 'dropdown',
        _label: 'Pronouns',
        _placeholder: 'Eg. she/Her',
        _autocomplete: 'address-level1',
      };
      break;
    case 'links.0':
      attributes = {
        _type: 'text',
        _label: 'LinkedIn',
        _placeholder: 'https://www.linkedin.com/in/your-name',
        _autocomplete: 'url',
      };
      break;
    case 'links.1':
      attributes = {
        _type: 'text',
        _label: 'Instagram',
        _placeholder: 'https://www.instagram.com/your-name',
        _autocomplete: 'url',
      };
      break;
    case 'links.2':
      attributes = {
        _type: 'text',
        _label: 'Facebook',
        _placeholder: 'https://www.facebook.com/your-name',
        _autocomplete: 'url',
      };
      break;
    case 'links.3':
      attributes = {
        _type: 'text',
        _label: 'Twitter',
        _placeholder: 'https://www.twitter.com/your-name',
        _autocomplete: 'url',
      };
      break;
    case 'links.4':
      attributes = {
        _type: 'text',
        _label: 'TikTok',
        _placeholder: 'https://www.tiktok.com/@your-name',
        _autocomplete: 'url',
      };
      break;
    case 'links.5':
      attributes = {
        _type: 'text',
        _label: 'Youtube',
        _placeholder: 'https://www.youtube.com/your-name',
        _autocomplete: 'url',
      };
      break;
    case 'profile_header':
      attributes = {
        _type: 'text',
        _label: 'Profile Header',
        _placeholder: 'A one-liner about you',
        // _autocmplete: 'url',
        _maxLenght: 50,
      };
      break;
    case 'profile_text':
      attributes = {
        _type: 'textarea',
        _label: 'Profile Text',
        _placeholder: 'A bit more about you',
        // _autocmplete: 'url',
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
        _autocomplete: 'bday',
      };
      break;

    case 'event_header':
      attributes = {
        _type: 'text',
        _label: 'Event Header',
        _placeholder: 'E.g. 4 day event - need models!',
        // _autocmplete: 'url',
        _maxLenght: 50,
      };
      break;

    case 'event_name':
      attributes = {
        _type: 'text',
        _label: 'Event Name',
        _placeholder: 'Eg. Moto Expo',
        // _autocmplete: 'url',
      };
      break;

    // case 'event_type':
    //   attributes = {
    //     _type: 'text',
    //     _label: 'Event Type',
    //     _placeholder: 'Eg. Video shoot',
    //     // _autocmplete: 'url',
    //   };
    case 'description':
      attributes = {
        _type: 'textarea',
        _label: 'Description',
        _placeholder: 'A bit more about the event',
        // _autocmplete: 'url',
        _rows: 5,
        _maxLenght: 250,
      };
      break;

    case 'date':
    case 'event_date':
      attributes = {
        _type: 'date',
        _label: 'Date',
        _placeholder: 'Eg. 01/01/2024',
        // _autocmplete: '',
      };
      break;

    // case 'location':
    //   attributes = {
    //     _type: 'text',
    //     _label: 'Location',
    //     _placeholder: 'Eg. Bangkok',
    //     // _autocmplete: '',
    //   };
    //   break;
    case 'street_name':
      attributes = {
        _type: 'text',
        _label: 'Street Name',
        _placeholder: 'Eg. Sukhumvit',
        _autocomplete: 'street',
      };
      break;
    case 'street_number':
      attributes = {
        _type: 'text',
        _label: 'Street Number',
        _placeholder: 'Eg. 123',
        _autocomplete: 'street-number',
      };
      break;
    case 'khet_sublocality':
      attributes = {
        _type: 'text',
        _label: 'Khet/Sublocality',
        _placeholder: 'Eg. Khlong Toei',
        _autocomplete: 'address-level2',
      };
      break;
    case 'postal_code':
      attributes = {
        _type: 'text',
        _label: 'Postal Code',
        _placeholder: 'Eg. 10110',
        _autocomplete: 'postal-code',
      };
      break;
    case 'location_description':
      attributes = {
        _type: 'textarea',
        _label: 'Location Description',
        _placeholder: 'Eg. back entrance, 5th floor',
        _autocomplete: 'postal-code',
      };
      break;
    case 'number_workers':
      attributes = {
        _type: 'number',
        _label: 'Quantity',
        _placeholder: 'Eg. 2',
        _autocomplete: 'number',
      };
      break;
    case 'hourly':
      attributes = {
        _type: 'number',
        _label: 'Hourly Rate',
        _placeholder: 'Eg. 500',
        _autocomplete: 'salary',
        _step: 50,
      };
      break;
    case 'days':
      attributes = {
        _type: 'number',
        _label: 'Days',
        _placeholder: 'Eg. 2',
        _autocomplete: 'days',
      };
      break;
    case 'hours_per_day':
      attributes = {
        _type: 'number',
        _label: 'Hours/Day',
        _placeholder: 'Eg. 8',
        _autocomplete: 'hours',
        _step: 0.5,
      };
      break;
    case 'break_hours':
      attributes = {
        _type: 'number',
        _label: 'Break',
        _placeholder: 'Eg. 1',
        _autocomplete: 'hours',
      };
      break;
    case 'role_description':
      attributes = {
        _type: 'textarea',
        _label: 'Description',
        _placeholder: 'Eg. 2',
        // _autocomplete: 'hours',
      };
      break;
    case 'transport_covered':
      attributes = {
        _type: 'dropdown',
        _label: 'Transport',
        _placeholder: 'Eg. Yes',
        // _autocomplete: 'hours',
      };
      break;
    case 'overnight_covered':
      attributes = {
        _type: 'dropdown',
        _label: 'Overnight',
        _placeholder: 'Eg. Yes',
        // _autocomplete: 'hours',
      };
      break;
    case 'role_type':
      attributes = {
        _type: 'dropdown',
        _label: 'Role',
        _placeholder: 'Eg. Model',
        // _autocomplete: 'hours',
      };
      break;

    default:
      attributes = {
        _type: '',
        _label: '',
        _placeholder: '',
        _autocomplete: '',
      };
  }

  return attributes;
};

// {
//   title: 'search',
//   type: 'text',
//   tooltip: 'Enter search',
// },
// {
//   title: 'street_name',
//   type: 'text',
//   tooltip: 'Enter street name',
// },
// {
//   title: 'street_number',
//   type: 'text',
//   tooltip: 'Enter street number',
// },
// {
//   title: 'khet_sublocality',
//   type: 'text',
//   tooltip: 'Enter khet/sublocality',
// },
// {
//   title: 'province',
//   type: 'text',
//   tooltip: 'Enter province',
// },
// {
//   title: 'postal_code',
//   type: 'text',
//   tooltip: 'Enter postal code',
// },
