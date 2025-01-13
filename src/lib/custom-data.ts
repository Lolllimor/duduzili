import {
    ColumnFiltersState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';

interface ITableProps {
  tableData: any[] | undefined;
  columns: any[];
  columnsToHide?: Record<string, boolean>;
}

function useCustomTable({
  tableData,
  columns,
  columnsToHide = {},
}: ITableProps) {
  const data = useMemo(() => tableData || [], [tableData]);
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = useState(columnsToHide);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection,
      columnFilters,
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    enableRowSelection: true, //enable row selection for all rows

    onColumnFiltersChange: setColumnFilters,
    manualPagination: true,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return { table };
}

export { useCustomTable };

//  function useCustomTable = useReactTable({
//   data,
//   columns,
//   state: {
//     sorting,
//     columnFilters,
//     columnVisibility,
//   },
//   onColumnVisibilityChange: setColumnVisibility,
//   onSortingChange: setSorting,
//   getSortedRowModel: getSortedRowModel(),
//   getCoreRowModel: getCoreRowModel(),
//   getPaginationRowModel: getPaginationRowModel(),
//   onColumnFiltersChange: setColumnFilters,
//   getFilteredRowModel: getFilteredRowModel(),
// });
