import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { Atom, usePortal } from '@ibnlanre/portal';
import { JSX } from 'react';

export const generatePaginationLinks = (
  queryAtom: Atom<any, undefined>,
  totalPages: number
) => {
  const pages: JSX.Element[] = [];
  const [filter, setFilter] = usePortal.atom(
    queryAtom as Atom<{ page_index: number; page_size: number }, undefined>
  );
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            className={`${i === 1 && 'pointer-events-none opacity-50'}`}
            onClick={() => setFilter({ ...filter, page_index: i })}
            isActive={i === filter.page_index}
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
            onClick={() => setFilter({ ...filter, page_index: i })}
            isActive={i === filter.page_index}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    if (2 < filter.page_index && filter.page_index < totalPages - 1) {
      pages.push(<PaginationEllipsis />);
      pages.push(
        <PaginationItem key={filter.page_index}>
          <PaginationLink
            onClick={() =>
              setFilter({ ...filter, page_index: filter.page_index })
            }
            isActive={true}
          >
            {filter.page_index}
          </PaginationLink>
        </PaginationItem>
      );
    }
    pages.push(<PaginationEllipsis />);
    for (let i = totalPages - 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => setFilter({ ...filter, page_index: i })}
            isActive={i === filter.page_index}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  }
  return pages;
};
