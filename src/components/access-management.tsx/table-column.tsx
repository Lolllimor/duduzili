'use client';
import dayjs from 'dayjs';
import { decrypt } from '@/lib/decrypt';
import { MoreOptions } from './more-option';
import { ColumnDef } from '@tanstack/react-table';
import { FetchPermissionGroupResult } from '@/lib/managementTypes';
import { ManagementMore } from './managemen-more';

export const ManagementColumn: ColumnDef<FetchPermissionGroupResult>[] = [
  {
    accessorKey: 'name',
    header: 'Permission Group',
    cell: (info) => (
      <p className="text-sm text-[#344054] font-inter font-medium">
        {info.getValue() as string}
      </p>
    ),
  },

  {
    accessorKey: 'admin_count',
    header: 'Number of Admins',
    cell: (info) => (
      <p className="text-sm text-[#344054] font-inter">
        {info.getValue() as string}
      </p>
    ),
  },
  {
    accessorKey: 'is_active',
    header: 'Status',
    cell: ({ row }) => {
      const isActive = row.original.is_active;
      return (
        <div
          className={`${
            isActive
              ? 'bg-[#E3FCEC] text-[#2D874E]'
              : 'bg-[#FEEEEF] text-[#94353A]'
          } px-3 h-[26px] rounded-2xl flex items-center justify-center w-fit`}
        >
          <span className="text-sm font-inter">
            {isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'created',
    header: 'Date Created',
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <p className="text-sm text-[#344054] font-inter">
            {dayjs(row.original.created).format('DD MMM, YYYY')}
          </p>
          <p className="text-sm text-[#667185] font-inter font-medium">
            {dayjs(row.original.created).format('H:mm A')}
          </p>
        </div>
      );
    },
    enableSorting: true,
  },

  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => {
      return (
        <MoreOptions>
          <ManagementMore
            name={row.original.name}
            group_id={row.original.group_id}
            is_active={row.original.is_active}
          />
        </MoreOptions>
      );
    },
    enableSorting: false,
  },
];
