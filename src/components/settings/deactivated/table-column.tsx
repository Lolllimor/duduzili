'use client';
import dayjs from 'dayjs';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { DeactivatedResult } from '@/lib/settingTypes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ActivateBtn } from './activatebtn';

export const DeactivatedTableData = [
  {
    profile_picture: null,
    full_name: 'Owen Abaru',
    username: '@johnnyboy',
    date_of_deactivation: '2024-12-23T14:35:51+01:00',
    followers_count: 22,
    followings_count: 97,
    post_count: 33,
    community_count: 85,
  },
  {
    profile_picture: null,
    full_name: 'Owen Abaru',
    username: '@johnnyboy',
    date_of_deactivation: '2024-12-23T14:35:51+01:00',
    followers_count: 22,
    followings_count: 97,
    post_count: 33,
    community_count: 85,
  },
  {
    profile_picture: null,
    full_name: 'Owen Abaru',
    username: '@johnnyboy',
    date_of_deactivation: '2024-12-23T14:35:51+01:00',
    followers_count: 22,
    followings_count: 97,
    post_count: 33,
    community_count: 85,
  },
];

export const DeactivatedColumn: ColumnDef<DeactivatedResult>[] = [
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
    header: 'Name',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/dashboard/profile.svg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="font-medium font-sora text-sm text-[#101928]">
              {row.original.full_name}
            </p>
            <p className="font-normal text-sm font-sora text-[#475367]">
              {row.original.username}
            </p>
          </div>
        </div>
      );
    },
    enableSorting: false,
  },

  {
    accessorKey: 'followers_count',
    header: 'Followers',
    cell: (info) => (
      <p className="text-sm text-[#344054]">{info.getValue() as string}</p>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'followings_count',
    header: 'Following',
    cell: (info) => (
      <p className="text-sm text-[#344054]">{info.getValue() as string}</p>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'post_count',
    header: 'Posts',
    cell: (info) => (
      <p className="text-sm text-[#344054]">{info.getValue() as string}</p>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'community_count',
    header: 'Posts',
    cell: (info) => (
      <p className="text-sm text-[#344054]">{info.getValue() as string}</p>
    ),

    enableSorting: false,
  },
  {
    accessorKey: 'date_of_deactivation',
    header: 'Date Deactivated',
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <p className="text-sm text-[#344054]">
            {dayjs(row.original.date_of_deactivation).format('DD MMM, YYYY')}
          </p>
          <p className="text-sm text-[#667185]">
            {dayjs(row.original.date_of_deactivation).format('H:mm A')}
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
      return <ActivateBtn username={row.original.username} />;
      },
    enableSorting: false,
  },
];
