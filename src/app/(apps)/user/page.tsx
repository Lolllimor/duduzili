"use client";

import { DataTable } from "@/lib/table-data";
import { useCustomTable } from "@/lib/custom-data";
import { userAtom } from "@/lib/query-store";
import { Atom, usePortal } from "@ibnlanre/portal";
import GeneralLayout from "@/components/layout/generalLayout";
import { EmptyState } from "@/components/settings/empty-state";
import { TableSkeleton } from "@/components/table-skeleton";
import { SearchForm } from "@/components/search-comp";
import { useState } from "react";
import { useFetchUserListQuery } from "@/redux/features/userApi";
import { UserColumn } from "@/components/community/user-table-column";
import { UserCard } from "@/components/user/users-cards";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function page() {
  // const [queries, setQueries] = usePortal.atom(userAtom);

  const [filter, setFilter] = usePortal.atom(
    userAtom as Atom<{ page_index: number; page_size: number }, undefined>
  );

  const [debounced, setDebounced] = useState<string>();
  const { data, isLoading, isFetching } = useFetchUserListQuery({
    // page: queries.page_index,
    search: debounced,
  });

  const currentPage = filter.page_index ? +filter.page_index : 1;
  const totalPage = Math.ceil(data?.data.count / filter.page_size);

  const { table } = useCustomTable({
    tableData: data?.data.results,
    columns: UserColumn,
    pageIndex: filter.page_index,
    pageSize: filter.page_size,
  });

  const handleSearch = (searchTerm: any) => {
    setDebounced(searchTerm);
  };

  console.log(table);

  return (
    <GeneralLayout pageTitle='Users' className='h-[calc(100vh-120px)]'>
      <UserCard />
      <div className='px-6 flex flex-col gap-6  pb-6  w-full'>
        <div className='flex items-center'>
          <SearchForm placeholder='Search User' onSearch={handleSearch} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' className='ml-auto'>
                All Genders <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className='capitalize'
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }>
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
              {/* Doing this because the endpoint can't search either male or female */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {isLoading || isFetching ? (
          <div className='flex flex-col bg-[#F9FAFB] rounded-2xl'>
            <TableSkeleton />
          </div>
        ) : data?.data.count ? (
          <div className='border rounded-lg w-full overflow-x-auto  '>
            <DataTable
              queryAtom={userAtom}
              table={table}
              totalCount={data?.data.count}
              totalPage={totalPage}
              currentPage={currentPage}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
        ) : (
          <EmptyState title='Users' paragraph='No user found' />
        )}
      </div>
    </GeneralLayout>
  );
}

export default page;
