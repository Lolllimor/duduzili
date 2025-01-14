'use client';
import { EmptyState } from '../empty-state';
import { useFetchDeactivatedQuery } from '@/redux/features/settingsApi';
import { DataTable } from '@/lib/table-data';
import { DeactivatedColumn } from './table-column';
import { useCustomTable } from '@/lib/custom-data';
import { deactivatedAtom } from '@/lib/query-store';
import { SearchForm } from '@/components/search-comp';
import { useState } from 'react';
import { usePortal } from '@ibnlanre/portal';
import { TableSkeleton } from '@/components/table-skeleton';

export const Deactivated = () => {
  const [debounced, setDebounced] = useState<string>();
  const [queries, setQueries] = usePortal.atom(deactivatedAtom);
  const { data, isLoading } = useFetchDeactivatedQuery({
    page: queries.page_index,
    search: debounced,
  });
  const { table } = useCustomTable({
    tableData: data?.data.results,
    columns: DeactivatedColumn,
  });


  const handleSearch = (searchTerm: any) => {
    setDebounced(searchTerm);
  };
  return (
    <div className="h-full w-full">
      {isLoading ? (
        <TableSkeleton />
      ) : data?.data.count ? (
        <div className="p-6 flex flex-col gap-8 bg-white h-full w-full overflow-auto">
          <div className="flex justify-between items-center">
            <span className="font-inter text-[2A2A2A] text-2xl font-bold">
              Deactivated Accounts
            </span>

            <SearchForm placeholder="Search User" onSearch={handleSearch} />
          </div>

          <DataTable
            queryAtom={deactivatedAtom}
            table={table}
            totalCount={data.data.count}
          />
        </div>
      ) : (
        <EmptyState
          title="Deactivated Accounts "
          paragraph=" No deactivated account"
        />
      )}
    </div>
  );
};
