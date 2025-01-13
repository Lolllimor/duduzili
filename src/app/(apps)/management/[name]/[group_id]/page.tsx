'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GeneralLayout from '@/components/layout/generalLayout';
import { EmptyState } from '@/components/settings/empty-state';
import { SearchIcon } from 'lucide-react';
import { DataTable } from '@/lib/table-data';
import { CSColumn } from '@/components/access-management.tsx/cs-table-column';
import { useViewMembersQuery } from '@/redux/features/managementApi';
import { use } from 'react';
import { normalizeUrlParams } from '@/lib/normalize-url';
import { AddAdmin } from '@/components/access-management.tsx/modal/add-admin';
import { EditPermissionGroup } from '@/components/access-management.tsx/modal/edit-permission-group';
import { useCustomTable } from '@/lib/custom-data';

function Page({
  params,
}: {
  params: Promise<{ name: string; group_id: string }>;
}) {
  const { name, group_id } = React.use(params);
  const router = useRouter();
  const { data } = useViewMembersQuery(group_id);

  const { table } = useCustomTable({
    tableData: data?.data.results,
    columns: CSColumn,
  });

  useEffect(() => {
    if (!group_id) {
      router.replace('/management');
    }
  }, [group_id, router]);

  return (
    <GeneralLayout
      pageTitle={['Access Management', `${normalizeUrlParams(name)}`]}
      moreOptions={
        <div className="flex gap-2.5 items-center font-inter">
          <EditPermissionGroup id={group_id} />
          <AddAdmin id={group_id} />
        </div>
      }
    >
      {data?.data.count ? (
        <div className="flex flex-col gap-6 px-6">
          <div className="h-[44px] border rounded-lg w-[277px] flex items-center pl-4 gap-2">
            <SearchIcon className="text-[#667085]" />
            <span className="text-[#667085]">Search group</span>
          </div>
          <div className="border rounded-lg h-full">
            <DataTable table={table} totalCount={data?.data.count} />
          </div>
        </div>
      ) : (
        <EmptyState
          title={normalizeUrlParams(name)}
          paragraph="No admin added yet"
        />
      )}
    </GeneralLayout>
  );
}

export default Page;
