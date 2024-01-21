import { DEFAULT_PROFILE_PHOTO_URL } from '__utils/global-consts';

type ProfileFieldStatus = {
  title: string;
  completed: boolean | 'partial';
};

const getCompletionStatus = (fields: any[]) => {
  if (!fields) return false;
  const totalFields = fields.length;
  const completedFields = fields.filter(field => field).length;

  if (completedFields === totalFields) return true;
  if (completedFields === 0) return false;
  return 'partial';
};

export const getStatusList = (currentUser: any) => {
  const { type } = currentUser.customClaims;
  const isFreelancer = type === 'freelancer';

  const {
    photoURL,
    videoUrl,
    province,
    gender,
    pronoun,
    height,
    dob,
    links,
    emailVerified,
    portfolio,
    services,
    pricing,
    availability,
    languages,
    work_experience,
    english_profiency,
    profile_header,
    profile_text,
    company_name,
    company_type,
    company_size,
    establised_year,
    tax_id,
    kyc_status,
  } = currentUser;

  const profileStatusList: ProfileFieldStatus[] = [
    {
      title: isFreelancer ? 'Profile photo' : 'Company logo',
      completed: photoURL !== DEFAULT_PROFILE_PHOTO_URL,
    },
    {
      title: 'Social media',
      completed: getCompletionStatus(links),
    },
    {
      title: isFreelancer ? 'Payment information' : 'Banking information',
      completed: false,
    },
    {
      title: 'Email verification',
      completed: emailVerified,
    },
    {
      title: 'Portfolio',
      completed: portfolio,
    },
    {
      title: 'Services',
      completed: getCompletionStatus(services),
    },
    {
      title: 'Pricing',
      completed: !!pricing,
    },
    {
      title: 'Availability',
      completed: !!availability,
    },
    {
      title: 'Location',
      completed: !!province,
    },
    {
      title: 'Languages',
      completed: languages,
    },
    {
      title: 'English Level',
      completed: !!english_profiency,
    },

    {
      title: 'Video introduction',
      completed: !!videoUrl,
    },
    {
      title: 'Profile header & text',
      completed: getCompletionStatus([profile_header, profile_text]),
    },
  ];

  if (type === 'freelancer') {
    const freelancerExtras: ProfileFieldStatus[] = [
      {
        title: 'Personal information',
        completed: getCompletionStatus([province, gender, pronoun, height, dob]), // provinve belong here? Also have in location
      },
      {
        title: 'Experience',
        completed: !!work_experience,
      },
      {
        title: 'Age',
        completed: !!dob,
      },
    ];
    profileStatusList.push(...freelancerExtras);
  }

  if (type === 'business') {
    const busnessExtras: ProfileFieldStatus[] = [
      {
        title: 'Company details',
        completed: getCompletionStatus([company_name, company_type, company_size, establised_year]),
      },

      {
        title: 'Tax ID',
        completed: !!tax_id,
      },
      {
        title: 'KYC status',
        completed: !!kyc_status,
      },
    ];
    profileStatusList.push(...busnessExtras);
  }
  return profileStatusList;
};
