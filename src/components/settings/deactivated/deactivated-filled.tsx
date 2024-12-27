import { DataTable } from '@/lib/table-data';
import { DeactivatedData } from '@/lib/settingTypes';
import { DeactivatedColumn, DeactivatedTableData } from './table-column';

export const DeactivatedFilled = ({ data }: { data: DeactivatedData }) => {
  return (
    <div className="p-6 flex flex-col gap-8 bg-white h-full">
      <div className="flex justify-between">
        <span className="font-inter text-[2A2A2A] text-2xl font-bold">
          Deactivated Accounts
        </span>
      </div>
      <DataTable columns={DeactivatedColumn} data={DeactivatedTableData} />
    </div>
  );
};
