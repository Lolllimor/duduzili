'use client';

import { flexRender, Table as ReactTable } from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Suspense, useState } from 'react';
import { RxCaretSort } from 'react-icons/rx';
import Paginator from './paginatkon';
import { Atom } from '@ibnlanre/portal';

interface DataTableProps<TData, TValue> {
  isLoading?: boolean;
  table: ReactTable<any>;
  totalCount: number;
  queryAtom: Atom<any, undefined>;
}

export function DataTable<TData, TValue>({
  isLoading,
  table,
  totalCount, queryAtom
}: DataTableProps<TData, TValue>) {
  return (
    <section className="w-full h-fit  flex flex-col">
      <div className="border-b border-[#E4E7EC] flex flex-col overflow-auto w-full h-full">
        <Table className="text-[#565D62]  text-sm w-full h-full ">
          <TableHeader className="bg-[#F9FAFB] font-medium text-xs">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-transparent "
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="px-6 text-nowrap !bg-[#F9FAFB] border-b  py-3 border-[#E5E6E8] text-[#344054] font-medium"
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer flex gap-1 items-center'
                              : 'flex justify-start ',

                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,

                            header.getContext()
                          )}

                          {{
                            asc: header.column.getCanSort() && <RxCaretSort />,

                            desc: header.column.getCanSort() && <RxCaretSort />,
                          }[header.column.getIsSorted() as string] ??
                            (header.column.getCanSort() && <RxCaretSort />)}
                        </div>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="font-normal overflow-auto">
            {isLoading ? (
              <TableRow className=" ">
                <TableCell
                  colSpan={table.getColumn.length}
                  className="h-24 text-center"
                >
                  <p>Loading</p>
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="border-b border-[#E5E6E8] py-[100px] text-nowrap overflow-auto "
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-6 py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="bg-white">
                <TableCell
                  colSpan={table.getAllColumns.length}
                  className="h-24 text-center"
                >
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
        <Paginator totalCount={totalCount}  queryAtom={queryAtom}/>
     
    </section>
  );
}
