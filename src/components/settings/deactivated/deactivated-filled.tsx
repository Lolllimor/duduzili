'use client';
import { DataTable } from '@/lib/table-data';
import { DeactivatedColumn } from './table-column';
import { useFetchDeactivatedQuery } from '@/redux/features/settingsApi';
import { SearchIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useCustomTable } from '@/lib/custom-data';

export const DeactivatedFilled = () => {
  const { data, isLoading } = useFetchDeactivatedQuery();
  const { table } = useCustomTable({
    tableData: data.data.results,
    columns: DeactivatedColumn,
  });
  return (
    <div className="p-6 flex flex-col gap-8 bg-white h-full">
      <div className="flex justify-between items-center">
        <span className="font-inter text-[2A2A2A] text-2xl font-bold">
          Deactivated Accounts
        </span>
        <div className="h-[44px] border rounded-lg w-[277px] flex items-center pl-4 gap-2">
          <SearchIcon className="text-[#667085]" />
          <span className="text-[#667085]">Search User</span>
        </div>
      </div>
      {isLoading ? (
        Array(15)
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
          ))
      ) : (
        <DataTable table={table} totalCount={data.data.count} />
      )}
    </div>
  );
};
