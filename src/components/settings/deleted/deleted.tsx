'use client';
import React, { useEffect } from 'react';
import { EmptyState } from '../empty-state';
import { useFetchDeletedQuery } from '@/redux/features/settingsApi';
import { DataTable } from '@/lib/table-data';
import { TableSkeleton } from '@/components/table-skeleton';
import { DeletedColumn } from './table-column';
import { useCustomTable } from '@/lib/custom-data';
import { deletedAtom } from '@/lib/query-store';
import { usePortal } from '@ibnlanre/portal';
import EmptyStateIcon2 from '@/components/icons/empty-state-2';

export const Deleted = () => {
  const [queries, setQueries] = usePortal.atom(deletedAtom);
  const { data, isLoading } = useFetchDeletedQuery({
    page: queries.page_index,
  });
  const { table } = useCustomTable({
    tableData: data?.data.results,
    columns: DeletedColumn,
  });
  return (
    <div className="h-full">
      {isLoading ? (
        <TableSkeleton />
      ) : data?.data.count ? (
        <div className="p-6 flex flex-col gap-8 bg-white h-full">
          <span className="font-inter text-[2A2A2A] text-2xl font-bold">
            Deleted Accounts
          </span>

          <DataTable
            queryAtom={deletedAtom}
            table={table}
            totalCount={data.data.count}
          />
        </div>
      ) : (
        <EmptyState
          icon={<EmptyStateIcon2 />}
          title="Deleted Accounts "
          paragraph=" No deleted account"
        />
      )}
    </div>
  );
};
