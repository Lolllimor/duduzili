'use client';

import { usePortal } from '@ibnlanre/portal';
import { DataTable } from '@/lib/table-data';
import { useCustomTable } from '@/lib/custom-data';
import { managementAtom, managementDetailAtom } from '@/lib/query-store';

import { useState } from 'react';
import { SearchForm } from '@/components/search-comp';
import { TableSkeleton } from '@/components/table-skeleton';
import GenaralLayout from '@/components/layout/generalLayout';
import { EmptyState } from '@/components/settings/empty-state';
import { HeaderBtn } from '@/components/access-management.tsx/header-btn';
import { useFetchPermissionGroupQuery } from '@/redux/features/managementApi';
import { ManagementColumn } from '@/components/access-management.tsx/table-column';

function Page() {
  const [queries, setQueries] = usePortal.atom(managementDetailAtom);
  const [debounced, setDebounced] = useState<string>();
  const { data, isLoading } = useFetchPermissionGroupQuery({
    page: queries.page_index,
    search: debounced,
  });

  const { table } = useCustomTable({
    tableData: data?.data.results,
    columns: ManagementColumn,
  });
  const handleSearch = (searchTerm: any) => {
    setDebounced(searchTerm);
  };

  return (
    <GenaralLayout pageTitle="Access Management" moreOptions={<HeaderBtn />}>
      <div className="px-6 flex flex-col gap-6 h-full mb-5  w-full">
        <SearchForm placeholder="Search Group" onSearch={handleSearch} />

        {isLoading ? (
          <div className="flex flex-col bg-[#F9FAFB] rounded-2xl w-full h-full pb-5">
            <TableSkeleton />
          </div>
        ) : data?.data.count ? (
          <div className="flex flex-col gap-6 w-full h-full ">
            <div className="border rounded-lg h-fit">
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
