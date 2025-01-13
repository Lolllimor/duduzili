'use client';
import GeneralLayout from '@/components/layout/generalLayout';
import { ReportColumn } from '@/components/report/report-column';
import { ReportTableHeader } from '@/components/report/report-table-header';
import { EmptyState } from '@/components/settings/empty-state';
import { Skeleton } from '@/components/ui/skeleton';
import { useCustomTable } from '@/lib/custom-data';
import { DataTable } from '@/lib/table-data';
import { useFetchReportingListQuery } from '@/redux/features/reportApi';

function page() {
  const { data, isLoading } = useFetchReportingListQuery();

  const { table } = useCustomTable({
    tableData: data.data.results,
    columns: ReportColumn,
  });
  return (
    <GeneralLayout pageTitle="Reporting List">
      <div className="px-6 flex flex-col gap-6 pb-6 h-full">
        <ReportTableHeader />
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
            <DataTable totalCount={data?.data.count} table={table} />
          </div>
        ) : (
          <EmptyState
            title="Reporting List"
            paragraph="No report has been made"
          />
        )}
      </div>
    </GeneralLayout>
  );
}

export default page;
