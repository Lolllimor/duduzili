"use client";

import { flexRender, Table as ReactTable } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RxCaretSort } from "react-icons/rx";
import Paginator from "./pagination";
import { Atom } from "@ibnlanre/portal";
import { useRouter } from "next/navigation";

interface DataTableProps<TData, TValue> {
  isLoading?: boolean;
  table: ReactTable<any>;
  totalCount: number;
  queryAtom: Atom<any, undefined>;
}

export function DataTable<TData, TValue>({
  isLoading,
  table,
  totalCount,
  queryAtom,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();

  const redirect = (username: string) => {
    router.push(`/user/${username}`);
  };

  return (
    <div className='w-full h-full '>
      <div className='border-b border-[#E4E7EC] w-full h-full overflow-auto'>
        <Table className='text-[#565D62]  text-sm w-full h-full '>
          <TableHeader className='bg-[#F9FAFB] font-medium text-xs sticky top-0 '>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className='border-b border-transparent '>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className='px-6 text-nowrap !bg-[#F9FAFB] border-b  py-3 border-[#E5E6E8] text-[#344054] font-medium'>
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer flex gap-1 items-center"
                              : "flex justify-start ",

                            onClick: header.column.getToggleSortingHandler(),
                          }}>
                          {flexRender(
                            header.column.columnDef.header,

                            header.getContext()
                          )}

                          {{
                            asc: header.column.getCanSort() && (
                              <RxCaretSort className='h-4 w-3' />
                            ),

                            desc: header.column.getCanSort() && (
                              <RxCaretSort className='h-4 w-3' />
                            ),
                          }[header.column.getIsSorted() as string] ??
                            (header.column.getCanSort() && (
                              <RxCaretSort className='h-4 w-3' />
                            ))}
                        </div>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className='font-normal '>
            {isLoading ? (
              <TableRow className=' '>
                <TableCell
                  colSpan={table.getColumn.length}
                  className='h-24 text-center'>
                  <p>Loading</p>
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows.length ? (
              table.getRowModel().rows.map(
                (row) => (
                  console.log(row),
                  (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className='border-b border-[#E5E6E8] py-[100px] text-nowrap overflow-auto cursor-pointer'
                      onClick={() =>
                        row.original.link_to_profile &&
                        redirect(row.original.username)
                      }>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className='px-6 py-4'>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  )
                )
              )
            ) : (
              <TableRow className='bg-white'>
                <TableCell
                  colSpan={table.getAllColumns.length}
                  className='h-24 text-center'>
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Paginator totalCount={totalCount} queryAtom={queryAtom} />
    </div>
  );
}
