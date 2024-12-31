'use client';
import dayjs from 'dayjs';
import { decrypt } from '@/lib/decrypt';
import { MoreOptions } from './more-option';
import { ColumnDef } from '@tanstack/react-table';
import { FetchPermissionGroupResult } from '@/lib/managementTypes';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export const CSColumn: ColumnDef<any>[] = [
  {
    accessorKey: 'username',
    header: 'Admin Name',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/dashboard/profile.svg" />
            <AvatarFallback>CN</AvatarFallback>
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
    accessorKey: 'admin_count',
    header: 'Admin ID',
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
    accessorKey: 'admin_date_joined',
    header: 'Date Assigned',
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
    header: '',
    cell: ({ row }) => {
      return (
        <MoreOptions
          group_id={row.original.group_id}
          is_active={row.original.is_active}
        />
      );
    },
    enableSorting: false,
  },
];
