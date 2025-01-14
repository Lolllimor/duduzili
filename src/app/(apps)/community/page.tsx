'use client';

import { DataTable } from '@/lib/table-data';
import { Skeleton } from '@/components/ui/skeleton';
import { useCustomTable } from '@/lib/custom-data';
import { communityAtom } from '@/lib/query-store';
import { usePortal } from '@ibnlanre/portal';
import GeneralLayout from '@/components/layout/generalLayout';
import { EmptyState } from '@/components/settings/empty-state';
import { useFetchCommunityListQuery } from '@/redux/features/communityApi';
import { CommunityColumn } from '@/components/community/community-table-column';
import { CommunityTableHeader } from '@/components/community/community-table-header';
import { TableSkeleton } from '@/components/table-skeleton';
import { SearchForm } from '@/components/search-comp';
import { useState } from 'react';

function page() {
  const [queries, setQueries] = usePortal.atom(communityAtom);

  const [debounced, setDebounced] = useState<string>();
  const { data, isLoading } = useFetchCommunityListQuery({
    page: queries.page_index,
    search: debounced,
  });
  const { table } = useCustomTable({
    tableData: data?.data.results,
    columns: CommunityColumn,
  });
  const handleSearch = (searchTerm: any) => {
    setDebounced(searchTerm);
  };
  return (
    <GeneralLayout pageTitle="Communities">
      <div className="px-6 flex flex-col gap-6  h-full pb-6  w-full">
        <SearchForm placeholder="Search Group" onSearch={handleSearch} />
        {isLoading ? (
          <div className="flex flex-col bg-[#F9FAFB] rounded-2xl">
            <TableSkeleton />
          </div>
        ) : data?.data.count ? (
          <div className="border rounded-lg h-full flex overflow-auto">
            <DataTable
              queryAtom={communityAtom}
              table={table}
              totalCount={data?.data.count}
            />
          </div>
        ) : (
          <EmptyState
            title="Communities"
            paragraph="No community have been created"
          />
        )}
      </div>
    </GeneralLayout>
  );
}

export default page;
