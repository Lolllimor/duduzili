

import { Dashboard } from '@/components/dashboard/page';
import GeneralLayout from '@/components/layout/generalLayout';
const page = () => {
  return (
    <GeneralLayout pageTitle="Dashboard">
      <Dashboard />
    </GeneralLayout>
  );
};

export default page;
