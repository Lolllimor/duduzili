'use client';
import { SearchIcon } from 'lucide-react';
import { DataTable } from '@/lib/table-data';
import GenaralLayout from '@/components/layout/generalLayout';
import { EmptyState } from '@/components/settings/empty-state';
import { useFetchListQuery } from '@/redux/features/communityApi';

const page = () => {
  const { data } = useFetchListQuery();
  console.log(data);
  return (
    <GenaralLayout pageTitle="Communities">
      <></>
      {/* {data?.data.count === '' ? (
        <div className="flex flex-col gap-6 px-6">
          <div className="h-[44px] border rounded-lg w-[277px] flex items-center pl-4 gap-2">
            <SearchIcon  className="text-[#667085]" />
            <span className="text-[#667085]">Search group</span>
          </div>
          <div className="border rounded-lg h-full">
            <DataTable columns={ManagementColumn} data={data.data.results} />
          </div>
        </div>
      ) : (
        <EmptyState
          title="Communities"
          paragraph="No community has been created"
        />
      )} */}
    </GenaralLayout>
  );
};

export default page;
