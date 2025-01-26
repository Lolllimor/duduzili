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
import Paginator from '@/lib/paginatkon';
import { usePortal } from '@ibnlanre/portal';
import { interest } from '@/lib/query-store';
import { SearchForm } from '@/components/search-comp';
import { useState } from 'react';

function InterestPage() {
  const [queries, setQueries] = usePortal.atom(interest);

  const [debounced, setDebounced] = useState<string>();
  const { data, isLoading } = useFetchInterestQuery({
    page: queries.page_index,
    search: debounced,
  });

  const handleSearch = (searchTerm: any) => {
    setDebounced(searchTerm);
  };
  return (
    <GeneralLayout
      pageTitle="Interests"
      className=" flex flex-col overflow-hidden h-[calc(100vh-100px)] "
    >
      <hr className="w-full" />

      <div className="flex flex-col overflow-auto h-full p-8 gap-8">
        <SearchForm placeholder="Search Interest" onSearch={handleSearch} />
        <div className="flex  gap-8 flex-wrap  h-full overflow-auto">
          <AddInterestModal />

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
                          <DropdownMenuItem>
                            <AddInterestModal item={item} />
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-[#ED5556] focus:text-[#ED5556] flex gap-2 items-center text-xs">
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
        </div>
        <Paginator queryAtom={interest} totalCount={data?.data.count} />
      </div>
    </GeneralLayout>
  );
}

export default InterestPage;
