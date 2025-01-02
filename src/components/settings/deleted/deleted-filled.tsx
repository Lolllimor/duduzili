"use client"
import { DataTable } from '@/lib/table-data';
import { DeletedColumn } from './table-column';
import { useFetchDeletedQuery } from '@/redux/features/settingsApi';

export const DeletedFilled = () => {
  const { data } = useFetchDeletedQuery();
  return (
    <div className="p-6 flex flex-col gap-8 bg-white h-full">
      <div className="flex justify-between">
        <span className="font-inter text-[2A2A2A] text-2xl font-bold">
          Deleted Accounts
        </span>
      </div>
      <DataTable columns={DeletedColumn} data={data.data.results} />
    </div>
  );
};
