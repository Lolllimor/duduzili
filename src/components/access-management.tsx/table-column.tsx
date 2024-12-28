'use client';
import dayjs from 'dayjs';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { FetchPermissionGroupResult } from '@/lib/managementTypes';
import { MoreOptions } from './more-option';



export const ManagementData = [
  {
    name: 'Engineering Team',
    admin_count: 5,
    is_active: true,
    created: '2023-10-01T10:00:00Z',
    group_id: 'grp001',
  },
  {
    name: 'Marketing Team',
    admin_count: 3,
    is_active: false,
    created: '2023-06-15T14:30:00Z',
    group_id: 'grp002',
  },
  {
    name: 'Design Team',
    admin_count: 2,
    is_active: true,
    created: '2024-01-01T08:45:00Z',
    group_id: 'grp003',
  },
  {
    name: 'Product Team',
    admin_count: 4,
    is_active: false,
    created: '2023-12-10T12:15:00Z',
    group_id: 'grp004',
  },
];

export const ManagementColumn: ColumnDef<FetchPermissionGroupResult>[] = [
  {
    accessorKey: 'name',
    header: 'Permission Group',
    cell: (info) => (
      <p className="text-sm text-[#344054]">{info.getValue() as string}</p>
    ),
  },

  {
    accessorKey: 'admin_count',
    header: 'Number of Admins',
    cell: (info) => (
      <p className="text-sm text-[#344054]">{info.getValue() as string}</p>
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
          <span className="text-sm">{isActive ? 'Active' : 'Inactive'}</span>
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
          <p className="text-sm text-[#344054]">
            {dayjs(row.original.created).format('DD MMM, YYYY')}
          </p>
          <p className="text-sm text-[#667185]">
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
      return <MoreOptions data={row.original} />;
      // return <ActivateBtn username={row.original.username} />;
    },
    enableSorting: false,
  },
];
