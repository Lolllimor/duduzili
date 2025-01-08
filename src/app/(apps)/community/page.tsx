'use client';

import GeneralLayout from '@/components/layout/generalLayout';
import { useFetchCommunityListQuery } from '@/redux/features/communityApi';
import { CommunityTableHeader } from '@/components/community/community-table-header';
import { Skeleton } from '@/components/ui/skeleton';
import { EmptyState } from '@/components/settings/empty-state';
import { DataTable } from '@/lib/table-data';
import { CommunityColumn } from '@/components/community/community-table-column';

function page() {
  const { data, isLoading } = useFetchCommunityListQuery();
  console.log(data);
  return (
    <GeneralLayout pageTitle="Communities">
      <div className="px-6 flex flex-col gap-6 pb-6">
        <CommunityTableHeader />
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
          <div className="border rounded-lg h-full">
            <DataTable columns={CommunityColumn} data={data.data.results} />
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
