import {
  ColumnFiltersState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";

interface ITableProps {
  tableData: any[] | undefined;
  columns: any[];
  columnsToHide?: Record<string, boolean>;
  pageIndex: number;
  pageSize: number;
}

function useCustomTable({
  tableData,
  columns,
  columnsToHide = {},
  pageIndex,
  pageSize,
}: ITableProps) {
  const data = useMemo(() => tableData || [], [tableData]);
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = useState(columnsToHide);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: pageIndex - 1, //initial page index
    pageSize: pageSize, //default page size
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection,
      columnFilters,
      columnVisibility,
      pagination,
    },
    onPaginationChange: setPagination, // update the pagination state when internal APIs mutate the pagination state
    onColumnVisibilityChange: setColumnVisibility,
    enableRowSelection: true, //enable row selection for all rows
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    // manualPagination: true, Not needed since server is auto paginated
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
