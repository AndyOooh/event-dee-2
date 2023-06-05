import { PublicCompanyProfile } from './components/PublicCompanyProfile';
import { AuthCompanyProfile } from './components/AuthCompanyProfile';
import { ComboSidebarLayoutProvider2 } from '../../LayoutProvider2';

// ComboSidebarLayoutProvider Checks if logged in and show page based on that,
// similar to facebook.

export default function CompanyProfile() {
  return (
    <ComboSidebarLayoutProvider2>
      <AuthCompanyProfile />
      <PublicCompanyProfile />
    </ComboSidebarLayoutProvider2>
  );
}
