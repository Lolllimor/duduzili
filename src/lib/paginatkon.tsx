import { Table } from '@tanstack/react-table';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-4 py-6">
      <div className="flex  items-center justify-center text-sm text-[#667185]  font-inter font-semibold">
        Page {table.getState().pagination.pageIndex + 1} of{' '}
        {table.getPageCount()}
      </div>
      <div className="flex items-center ">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className=" h-9 w-[111px] item-center flex gap-2 border border-[#D0D5DD] rounded-lg shadow-md"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ArrowLeft className="text-[#344054] h-5 w-5" />
            <span className="text-[#344054] text-sm font-semibold">
              Previous
            </span>
          </Button>
          <Button
            variant="outline"
            className=" h-9 w-[111px] item-center flex gap-2 border border-[#D0D5DD] rounded-lg shadow-md"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="text-[#344054] text-sm font-semibold">Next</span>
            <ArrowRight className="text-[#344054] h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
