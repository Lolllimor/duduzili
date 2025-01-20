import { Dashboard } from '@/components/dashboard/dashboard';
import GeneralLayout from '@/components/layout/generalLayout';
import { Suspense } from 'react';
const page = () => {
  return (
    <GeneralLayout pageTitle="Dashboard" className="border-t border-[#F0F0F1]">
      <Dashboard />
    </GeneralLayout>
  );
};

export default page;
