import * as React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { ButtonProps, buttonVariants } from '@/components/ui/button';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn(' cursor-pointer', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      isActive
        ? 'flex items-center cursor-pointer justify-center h-6 w-6 text-[#4534B8] bg-[#EDF0FB] rounded-[6px] text-sm'
        : 'text-[#98A2B3] cursor-pointer flex items-center justify-center text-sm hover:bg-[#EDF0FB] rounded-[6px] h-6 w-6',

      className
    )}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn(
      ' h-9 w-[111px] bg-transparent hover:bg-transparent item-center flex gap-2 border border-[#D0D5DD] rounded-lg shadow-md',
      className
    )}
    {...props}
  >
    <ArrowLeft className="text-[#344054] h-5 w-5" />
    <span className="text-[#344054] text-sm font-semibold">Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn(
      ' h-9 w-[111px] bg-transparent hover:bg-transparent item-center flex gap-2 border border-[#D0D5DD] rounded-lg shadow-md',
      className
    )}
    {...props}
  >
    <span className="text-[#344054] text-sm font-semibold">Next</span>
    <ArrowRight className="text-[#344054] h-5 w-5" />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn(
      'flex h-9 w-9 text-[#98A2B3] items-center justify-center',
      className
    )}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
