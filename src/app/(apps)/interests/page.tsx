'use client';
import GeneralLayout from '@/components/layout/generalLayout';
import { AddInterestModal } from '@/components/interest/modal/add-interest';
import { useFetchInterestQuery } from '@/redux/features/interestsApi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { DeleteInterest } from '@/components/interest/modal/delete-interest';

import { Skeleton } from '@/components/ui/skeleton';
import useUrlParams from '@/hooks/use-url-params';
import Paginator from '@/lib/paginatkon';
import { Suspense } from 'react';

function InterestPage() {
  const { query: page } = useUrlParams('page');
  const { data, isLoading } = useFetchInterestQuery({ page });

  return (
    <GeneralLayout pageTitle="Interests">
      <hr />

      <div className="flex flex-col overflow-auto h-full">
        <div className="flex p-8 gap-8 flex-wrap  h-full overflow-auto">
          <AddInterestModal />

          <Suspense fallback={<SkeletonFallback />}>
            {isLoading
              ? Array(15)
                  .fill(0)
                  .map((item, idx) => (
                    <Skeleton
                      key={idx}
                      className="border border-[#F5F5F5] rounded-xl w-[346px] h-[300px] flex flex-col gap-1 shadow-interest-drop"
                    />
                  ))
              : data?.data.results.map(
                  (
                    item: {
                      name: string;
                      pf_id: string;
                      tags_name: String[];
                      tags_count: string;
                    },
                    idx: any
                  ) => (
                    <div
                      key={idx}
                      className="border border-[#F5F5F5] rounded-xl w-[346px] h-[300px] flex justify-center items-center bg-white hover:bg-white  flex-col gap-1 shadow-interest-drop"
                    >
                      <div className="py-[18px] flex justify-between w-full items-center px-6">
                        <span className="text-sm text-[#2A2A2A] font-semibold">
                          {item.name}
                        </span>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <HiOutlineDotsVertical />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="py-2 w-[137px]">
                            <DropdownMenuItem
                              onSelect={(e) => e.preventDefault()}
                            >
                              <AddInterestModal id={item} />
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-[#ED5556] focus:text-[#ED5556] flex gap-2 items-center text-xs"
                              onSelect={(e) => e.preventDefault()}
                            >
                              <DeleteInterest id={item.pf_id} />
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="flex gap-0.5 flex-wrap w-full h-full px-6">
                        {item.tags_name.map((tag, idx) => (
                          <p key={idx} className="text-[#494850] text-xs">
                            #{tag}
                          </p>
                        ))}
                      </div>
                      <div className="py-[18px] flex justify-end w-full  px-6">
                        <span className="text-sm text-[#4534B8] font-semibold">
                          #{item.tags_count}
                        </span>
                      </div>
                    </div>
                  )
                )}
          </Suspense>
        </div>
        <Paginator currentPageSize={50} totalCount={data?.data.count} />
      </div>
    </GeneralLayout>
  );
}

function SkeletonFallback() {
  return (
    <div className="flex flex-col bg-[#F9FAFB] rounded-2xl">
      {Array(15)
        .fill(0)
        .map((_, idx) => (
          <div className="w-full flex" key={idx}>
            <span className="table-cell w-full font-normal pl-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
              <Skeleton className="h-[15px]" />
            </span>
            <span className="table-cell w-full font-normal pl-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
              <Skeleton className="h-[15px]" />
            </span>
            <span className="table-cell w-full font-normal pl-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
              <Skeleton className="h-[15px]" />
            </span>
            <span className="table-cell w-full font-normal pl-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
              <Skeleton className="h-[15px]" />
            </span>
            <span className="table-cell w-full font-normal pl-6 pr-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
              <Skeleton className="h-[15px]" />
            </span>
          </div>
        ))}
    </div>
  );
}

export default InterestPage;
