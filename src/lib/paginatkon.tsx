import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { generatePaginationLinks } from './generate-pages';
import useUrlParams from '@/hooks/use-url-params';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

type PaginatorProps = {
  totalCount: number;
  currentPageSize?: number;
};

export default function Paginator({
  totalCount,
  currentPageSize,
}: PaginatorProps) {
  const searchParams = useSearchParams();
  const { pushParam, query: pageParam } = useUrlParams('page');
  const pageSizeParam = searchParams.get('page_size');

  const pageSize = currentPageSize
    ? currentPageSize
    : pageSizeParam
    ? +pageSizeParam
    : 10;
  const currentPage = pageParam ? +pageParam : 1;
  const totalPage = Math.ceil(totalCount / pageSize);
  return (
    <div className="flex items-center justify-between px-8 py-6  ">
      <Suspense>
        <Pagination>
          <PaginationContent className="w-full flex items-center justify-between">
            <div className="flex  items-center justify-center text-sm text-[#667185]  font-inter font-semibold text-nowrap">
              Page {currentPage} of {totalPage ?? 0}
            </div>
            <div className="flex items-center gap-1">
              {generatePaginationLinks(currentPage, totalPage)}
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
                      pushParam({ key: 'page', value: currentPage - 1 })
                    }
                    // disabled={currentPage - 1 < 1}
                  />
                </PaginationItem>
              ) : null}
              {totalPage ? (
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      pushParam({ key: 'page', value: currentPage + 1 })
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
      </Suspense>
    </div>
  );
}
