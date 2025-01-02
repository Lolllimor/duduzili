import { DataTable } from '@/lib/table-data';
import { DeactivatedData } from '@/lib/settingTypes';
import { DeactivatedColumn } from './table-column';
import { useFetchDeactivatedQuery } from '@/redux/features/settingsApi';
import { SearchIcon } from 'lucide-react';

export const DeactivatedFilled = () => {
  const { data } = useFetchDeactivatedQuery();
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
      <DataTable columns={DeactivatedColumn} data={data.data.results} />
    </div>
  );
};
