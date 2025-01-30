import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { generatePaginationLinks } from "./generate-pages";

import { Atom, usePortal } from "@ibnlanre/portal";
import { Dispatch, SetStateAction } from "react";
import { Table as ReactTable } from "@tanstack/react-table";

type PaginatorProps = {
  totalPage: number;
  currentPage: number;
  queryAtom: Atom<any, undefined>;
  filter: { page_index: number; page_size: number };
  setFilter: Dispatch<
    SetStateAction<{ page_index: number; page_size: number }>
  >;
  table: ReactTable<any>;
};

export default function Paginator({
  totalPage,
  currentPage,
  queryAtom,
  filter,
  setFilter,
  table,
}: PaginatorProps) {
  return (
    <div className='flex items-center justify-between px-6 py-6  '>
      <Pagination>
        <PaginationContent className='w-full flex items-center justify-between'>
          <div className='flex  items-center justify-center text-sm text-[#667185]  font-inter font-semibold text-nowrap'>
            Page {currentPage} of {totalPage ?? 0}
          </div>
          <div className='flex items-center gap-1'>
            {generatePaginationLinks(queryAtom, totalPage, table)}
          </div>
          <div className='flex items-center gap-4'>
            <PaginationItem>
              <PaginationPrevious
                className={
                  currentPage <= 1
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
                onClick={() => {
                  setFilter({ ...filter, page_index: currentPage - 1 });
                  table.previousPage();
                }}
                // disabled={currentPage - 1 < 1}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                onClick={() => {
                  setFilter({ ...filter, page_index: currentPage + 1 });
                  table.nextPage();
                }}
                className={
                  currentPage >= totalPage
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
              />
            </PaginationItem>
          </div>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
