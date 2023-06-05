import { ComboSidebarLayoutProvider } from '../../LayoutProvider';
import { ProfilePageFreelancerPrivate } from './components/profilePrivate/ProfilePageFreelancerPrivate';
import { ProfilePageFreelancerPublic } from './components/profilePublic/ProfilePageFreelancerPublic';

// ComboSidebarLayoutProvider Checks if logged in and show page based on that,
// similar to facebook.

export default function FreelancerProfile() {
  return (
    <ComboSidebarLayoutProvider
      privatePage={<ProfilePageFreelancerPrivate />}
      publicPage={<ProfilePageFreelancerPublic />}
    />
  );
}
