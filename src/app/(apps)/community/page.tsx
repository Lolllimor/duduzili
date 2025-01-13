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


function page() {
    const [queries, setQueries] = usePortal.atom(communityAtom);
  const { data, isLoading } = useFetchCommunityListQuery({ page:queries.page_index });
  const { table } = useCustomTable({
    tableData: data?.data.results,
    columns: CommunityColumn,
  });
  return (
    <GeneralLayout pageTitle="Communities">
      <div className="px-6 flex flex-col gap-6  h-full pb-6  w-full">
        <CommunityTableHeader table={table} />
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
          <div className="border rounded-lg h-full flex overflow-auto">
            <DataTable queryAtom={communityAtom} table={table} totalCount={data?.data.count} />
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
