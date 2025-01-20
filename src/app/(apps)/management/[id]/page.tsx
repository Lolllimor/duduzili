'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import GeneralLayout from '@/components/layout/generalLayout';
import { EmptyState } from '@/components/settings/empty-state';
import { SearchIcon } from 'lucide-react';
import { DataTable } from '@/lib/table-data';
import { CSColumn } from '@/components/access-management.tsx/cs-table-column';
import {
  useFetchPermissionGroupQuery,
  useViewMembersQuery,
} from '@/redux/features/managementApi';
import { use } from 'react';
import { AddAdmin } from '@/components/access-management.tsx/modal/add-admin';
import { EditPermissionGroup } from '@/components/access-management.tsx/modal/edit-permission-group';
import { useCustomTable } from '@/lib/custom-data';
import { managementDetailAtom } from '@/lib/query-store';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { SearchForm } from '@/components/search-comp';
import { TableSkeleton } from '@/components/table-skeleton';

function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const router = useRouter();
  const [debounced, setDebounced] = useState<string>();
  const { data, isLoading } = useViewMembersQuery({
    id: id,
    search: debounced,
  });

  const { data: fetchPermissionGroup } = useFetchPermissionGroupQuery({
    id: id,
  });

  const groupName = fetchPermissionGroup?.data.results.find(
    (item: any) => item.group_id === id
  );

  const { table } = useCustomTable({
    tableData: data?.data.results,
    columns: CSColumn,
  });

  const handleSearch = (searchTerm: any) => {
    setDebounced(searchTerm);
  };

  useEffect(() => {
    if (!id) {
      router.replace('/management');
    }
  }, [id, router]);

  return (
    <GeneralLayout
      className="h-[calc(100vh-120px)]"
      pageTitle={['Access Management', `${groupName ? groupName?.name : ''}`]}
      moreOptions={
        <div className="flex gap-2.5 items-center font-inter">
          <EditPermissionGroup id={id} />
          <AddAdmin id={id} name={groupName ? groupName?.name : ''} />
        </div>
      }
    >
      <div className="px-6 flex flex-col gap-6  pb-6  w-full">
        <SearchForm placeholder="Search Group" onSearch={handleSearch} />
        {isLoading ? (
          <div className="flex flex-col bg-[#F9FAFB] rounded-2xl w-full h-full pb-5">
         <TableSkeleton/>
          </div>
        ) : data?.data.count ? (
          <div className="border rounded-lg w-full overflow-x-auto ">
            <DataTable
              queryAtom={managementDetailAtom}
              table={table}
              totalCount={data?.data.count}
            />
          </div>
        ) : (
          <EmptyState title={groupName?.name} paragraph="No admin added yet" />
        )}
      </div>
    </GeneralLayout>
  );
}

export default Page;
