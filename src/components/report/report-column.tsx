'use client';
import dayjs from 'dayjs';
import { ColumnDef } from '@tanstack/react-table';
import { FetchPermissionGroupResult } from '@/lib/managementTypes';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Checkbox } from '../ui/checkbox';
import { getInitials } from '../community/profile-drawer';

export const ReportColumn: ColumnDef<any>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'username',
    header: 'Reporter',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/dashboard/profile.svg" />
            <AvatarFallback>{ getInitials(row.original.username)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="font-medium font-sora text-sm text-[#101928]">
              {row.original.username}
            </p>
            <p className="font-normal text-sm font-sora text-[#475367]">
              {row.original.email}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'Type',
    header: 'Type',
    cell: (info) => (
      <p className="text-sm text-[#344054]">{info.getValue() as string}</p>
    ),
  },
  {
    accessorKey: 'username',
    header: 'Reportee',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/dashboard/profile.svg" />
            <AvatarFallback>{ getInitials(row.original.username)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="font-medium font-sora text-sm text-[#101928]">
              {row.original.username}
            </p>
            <p className="font-normal text-sm font-sora text-[#475367]">
              {row.original.email}
            </p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: 'No. of reports',
    header: 'No. of reports',
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
    accessorKey: 'Type',
    header: 'Reason',
    cell: (info) => (
      <p className="text-sm text-[#344054]">{info.getValue() as string}</p>
    ),
  },

  {
    accessorKey: 'action',
    header: '',
    cell: ({ row }) => {
      return (
        <></>
        // <MoreOptions>
        //   <CSMore
        //     name={row.original.username}
        //     is_active={row.original.is_active}
        //   />
        // </MoreOptions>
      );
    },
    enableSorting: false,
  },
];
