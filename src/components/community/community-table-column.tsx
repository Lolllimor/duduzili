'use client';
import dayjs from 'dayjs';
import { Checkbox } from '../ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { MoreOptions } from '../access-management.tsx/more-option';
import { TableDropdown } from './table-dropdown';
import { getInitials } from './profile-drawer';

export const CommunityColumn: ColumnDef<any>[] = [
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
    accessorKey: 'name',
    header: 'Community',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={row.original.cover_photo} />
            <AvatarFallback>{getInitials(row.original.name)}</AvatarFallback>
          </Avatar>
          <p className="font-medium font-inter text-sm text-[#101928]">
            {row.original.name}
          </p>
        </div>
      );
    },
  },

  {
    accessorKey: 'members_count',
    header: 'Members',
    cell: (info) => (
      <p className="text-sm text-[#344054]">{info.getValue() as string}</p>
    ),
  },
  {
    accessorKey: 'posts_count',
    header: 'Posts',
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
    enableSorting: true,
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
    header: '',
    cell: ({ row }) => {
      return (
        <MoreOptions>
          <TableDropdown
            is_active={row.original.is_active}
            name={row.original.name}
            id={row.original.community_id}
          />
        </MoreOptions>
      );
    },
    enableSorting: false,
  },
];
