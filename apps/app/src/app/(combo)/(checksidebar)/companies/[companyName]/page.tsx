import { CompanyPublic } from './components/CompanyPublic';
import { AuthCompanyProfile } from './components/AuthCompanyProfile';
import { ComboSidebarLayoutProvider2 } from '../../LayoutProvider2';

// ComboSidebarLayoutProvider Checks if logged in and show page based on that,
// similar to facebook.

export default function CompanyPage() {
  return (
    <ComboSidebarLayoutProvider2>
      <AuthCompanyProfile />
      <CompanyPublic />
    </ComboSidebarLayoutProvider2>
  );
}
