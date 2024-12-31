'use client';
import {
  ManagementColumn,
  ManagementData,
} from '@/components/access-management.tsx/table-column';
import { useEffect } from 'react';
import { SearchIcon } from 'lucide-react';
import { DataTable } from '@/lib/table-data';
import GenaralLayout from '@/components/layout/generalLayout';
import { EmptyState } from '@/components/settings/empty-state';
import { HeaderBtn } from '@/components/access-management.tsx/header-btn';
import { useFetchPermissionGroupQuery } from '@/redux/features/managementApi';
import { encrypt } from '@/lib/encrypt';
import { decrypt } from '@/lib/decrypt';

function Page() {
  const { data } = useFetchPermissionGroupQuery();
  console.log((data));
  return (
    <GenaralLayout pageTitle="Access Management" moreOptions={<HeaderBtn />}>
      <div></div>
      {data?.data.count === "" ? (
        <div className="flex flex-col gap-6 px-6">
          <div className="h-[44px] border rounded-lg w-[277px] flex items-center pl-4 gap-2">
            <SearchIcon className="text-[#667085]" />
            <span className="text-[#667085]">Search group</span>
          </div>
          <div className="border rounded-lg h-full">
            <DataTable columns={ManagementColumn} data={data.data.results} />
          </div>
        </div>
      ) : (
        <EmptyState
          title="Permission Group"
          paragraph="No permission has been granted"
        />
      )}
    </GenaralLayout>
  );
}

export default Page;
