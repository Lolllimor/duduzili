import {
  ManagementColumn,
  ManagementData,
} from '@/components/access-management.tsx/table-column';
import GenaralLayout from '@/components/layout/generalLayout';
import { DataTable } from '@/lib/table-data';
import { SearchIcon } from 'lucide-react';
import React from 'react';

function Page() {
  return (
    <GenaralLayout pageTitle="Access Management">
      <div className="flex flex-col gap-6 px-6">
        <div className="h-[44px] border rounded-lg w-[277px] flex items-center pl-4 gap-2">
          <SearchIcon className="text-[#667085]" />
          <span className="text-[#667085]">Search group</span>
        </div>
        <div className='border rounded-lg h-full'>

        <DataTable columns={ManagementColumn} data={ManagementData} />
        </div>
      </div>
    </GenaralLayout>
  );
}

export default Page;
