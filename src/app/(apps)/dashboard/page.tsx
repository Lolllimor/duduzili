

import { Dashboard } from '@/components/dashboard/dashboard';
import GeneralLayout from '@/components/layout/generalLayout';
const page = () => {
  return (
    <GeneralLayout pageTitle="Dashboard">
      <Dashboard />
    </GeneralLayout>
  );
};

export default page;
