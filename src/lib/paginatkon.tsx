import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { generatePaginationLinks } from './generate-pages';

import { Atom, usePortal } from '@ibnlanre/portal';

type PaginatorProps = {
  totalCount: number;
  queryAtom: Atom<any, undefined>;
};

export default function Paginator({
  totalCount,
  queryAtom,
}: PaginatorProps) {
const [filter, setFilter] = usePortal.atom(
  queryAtom as Atom<{ page_index: number; page_size: number }, undefined>
);
  
  const currentPage = filter.page_index ? +filter.page_index : 1;
  const totalPage = Math.ceil(totalCount / filter.page_size);
  return (
    <div className="flex items-center justify-between px-6 py-6  ">
      <Pagination>
        <PaginationContent className="w-full flex items-center justify-between">
          <div className="flex  items-center justify-center text-sm text-[#667185]  font-inter font-semibold text-nowrap">
            Page {currentPage} of {totalPage ?? 0}
          </div>
          <div className="flex items-center gap-1">
            {generatePaginationLinks(queryAtom, totalPage)}
          </div>
          <div className="flex items-center gap-4">
            {totalPage ? (
              <PaginationItem>
                <PaginationPrevious
                  className={
                    currentPage <= 1
                      ? 'pointer-events-none opacity-50'
                      : undefined
                  }
                  onClick={() =>
                    setFilter({ ...filter, page_index: currentPage - 1 })
                  }
                  // disabled={currentPage - 1 < 1}
                />
              </PaginationItem>
            ) : null}
            {totalPage ? (
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setFilter({ ...filter, page_index: currentPage + 1 })
                  }
                  className={
                    currentPage >= totalPage
                      ? 'pointer-events-none opacity-50'
                      : undefined
                  }
                />
              </PaginationItem>
            ) : null}
          </div>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
