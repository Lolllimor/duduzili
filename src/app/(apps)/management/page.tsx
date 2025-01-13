'use client';

import { SearchIcon } from 'lucide-react';
import { DataTable } from '@/lib/table-data';
import { useCustomTable } from '@/lib/custom-data';
import GenaralLayout from '@/components/layout/generalLayout';
import { EmptyState } from '@/components/settings/empty-state';
import { HeaderBtn } from '@/components/access-management.tsx/header-btn';
import { useFetchPermissionGroupQuery } from '@/redux/features/managementApi';
import { ManagementColumn } from '@/components/access-management.tsx/table-column';
import { Skeleton } from '@/components/ui/skeleton';
import { managementAtom, managementDetailAtom } from '@/lib/query-store';
import { usePortal } from '@ibnlanre/portal';

function Page() {
  const [queries, setQueries] = usePortal.atom(managementDetailAtom);
  const { data, isLoading } = useFetchPermissionGroupQuery({
    page: queries.page_index,
  });

  const { table } = useCustomTable({
    tableData: data?.data.results,
    columns: ManagementColumn,
  });

  return (
    <GenaralLayout pageTitle="Access Management" moreOptions={<HeaderBtn />}>
      <div className="px-6 flex flex-col gap-6  h-full pb-6  w-full">
        <div className="h-[44px] border rounded-lg w-[277px] flex items-center pl-4 gap-2">
          <SearchIcon className="text-[#667085]" />
          <span className="text-[#667085]">Search group</span>
        </div>
        {isLoading ? (
          <div className="flex flex-col bg-[#F9FAFB] rounded-2xl w-full h-full pb-5">
            {Array(15)
              .fill(0)
              .map((item, idx) => (
                <div className="w-full flex " key={idx}>
                  <span className="table-cell  w-full font-normal pl-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
                    <Skeleton className="h-[15px]" />
                  </span>
                  <span className="table-cell  w-full font-normal pl-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
                    <Skeleton className="h-[15px]" />
                  </span>
                  <span className="table-cell  w-full font-normal pl-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
                    <Skeleton className="h-[15px]" />
                  </span>
                  <span className="table-cell  w-full font-normal pl-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
                    <Skeleton className="h-[15px]" />
                  </span>
                  <span className="table-cell  w-full font-normal pl-6 pr-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
                    <Skeleton className="h-[15px]" />
                  </span>
                </div>
              ))}
          </div>
        ) : data?.data.count ? (
          <div className="flex flex-col gap-6 w-full h-full">
            <div className="border rounded-lg h-full">
              <DataTable
                table={table}
                totalCount={data.data.count}
                queryAtom={managementAtom}
              />
            </div>
          </div>
        ) : (
          <EmptyState
            title="Permission Group"
            paragraph="No permission has been granted"
          />
        )}
      </div>
    </GenaralLayout>
  );
}

export default Page;
