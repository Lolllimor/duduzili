'use client';
import { Skeleton } from '@/components/ui/skeleton';
import { EmptyState } from '../empty-state';

import { DataTable } from '@/lib/table-data';
import { DeletedColumn } from './table-column';
import { useCustomTable } from '@/lib/custom-data';
import { useFetchDeletedQuery } from '@/redux/features/settingsApi';
import { deletedAtom } from '@/lib/query-store';

export const DeletedFilled = () => {
  const { data, isLoading } = useFetchDeletedQuery();
  const { table } = useCustomTable({
    tableData: data.data.results,
    columns: DeletedColumn,
  });
  return (
    <div className="p-6 flex flex-col gap-8 bg-white h-full">
      <div className="flex justify-between">
        <span className="font-inter text-[2A2A2A] text-2xl font-bold">
          Deleted Accounts
        </span>
      </div>
      {isLoading ? (
        <div className="flex flex-col bg-[#F9FAFB] rounded-2xl">
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
        <div className=" rounded-lg h-full flex overflow-auto">
          <DataTable queryAtom={deletedAtom} table={table} totalCount={data.data.count} />
        </div>
      ) : (
        <EmptyState
          title="Communities"
          paragraph="No community have been created"
        />
      )}
    </div>
  );
};
