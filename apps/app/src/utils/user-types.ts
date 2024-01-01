export const userTypes = {
  common: ['first_name', 'last_name', 'email', 'languages', 'location', 'socials'],

  freelancer: {
    common: ['nationality', 'english_profiency', 'thai_profiency'],
    model: ['ethnicity', 'height', 'weight', 'dob', 'video_url', 'portfolio'],
    photographer: ['portfolio'],
    staff: [],
  },
  business: [
    'company_name',
    'company_type',
    'company_size',
    'establised_year',
    'tax_id',
    'company_id',
    'kyc_status',
  ],
};
