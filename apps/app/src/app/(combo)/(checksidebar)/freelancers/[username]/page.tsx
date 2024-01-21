import { Sidebar } from '__components/Sidebar/Sidebar';
import { ComboSidebarLayoutProvider } from '../../LayoutProvider';
import { FreelancerPrivate } from './components/FreelancerPrivate/FreelancerPrivate';
import { FreelancerPublic } from './components/FreelancerPublic/FreelancerPublic';

// ComboSidebarLayoutProvider Checks if logged in and show page based on that,
// similar to facebook.

export default function FreelancerPage() {
  return (
    <ComboSidebarLayoutProvider
      privatePage={<FreelancerPrivate />}
      publicPage={<FreelancerPublic />}
      sideBar={<Sidebar />}
    />
  );
}
