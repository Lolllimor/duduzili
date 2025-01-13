import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import useUrlParams from '@/hooks/use-url-params';
import { JSX } from 'react';

export const generatePaginationLinks = (
  currentPage: number,
  totalPages: number
) => {
  const pages: JSX.Element[] = [];

  const { pushParam, query: pageParam } = useUrlParams('page');
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            className={`${i === 1 && 'pointer-events-none opacity-50'}`}
            onClick={() => pushParam({ key: 'page', value: i })}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  } else {
    for (let i = 1; i <= 2; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => pushParam({ key: 'page', value: i })}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    if (2 < currentPage && currentPage < totalPages - 1) {
      pages.push(<PaginationEllipsis />);
      pages.push(
        <PaginationItem key={currentPage}>
          <PaginationLink
            onClick={() => pushParam({ key: 'page', value: currentPage })}
            isActive={true}
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>
      );
    }
    pages.push(<PaginationEllipsis />);
    for (let i = totalPages - 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => pushParam({ key: 'page', value: i })}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  }
  return pages;
};
