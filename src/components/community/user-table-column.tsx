"use client";
import dayjs from "dayjs";
import { Checkbox } from "../ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MoreOptions } from "../access-management.tsx/more-option";
import { TableDropdown } from "./table-dropdown";
import { getInitials } from "./profile-drawer";

export const UserColumn: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className='flex items-center gap-3 w-fit'>
          <Avatar>
            <AvatarImage src={row.original.cover_photo} />
            <AvatarFallback>
              {getInitials(row.original.full_name)}
            </AvatarFallback>
          </Avatar>
          <div className='flex flex-col font-medium font-inter text-sm text-[#101928] w-20'>
            <p className='truncate'> {row.original.full_name} </p>
            <p className='font-normal truncate'>@{row.original.username} </p>
          </div>
        </div>
      );
    },

    enableSorting: false,
  },

  {
    accessorKey: "phone_number",
    header: "Phone No.",
    cell: (info) => (
      <p className='text-sm text-[#344054] font-inter'>
        {(info.getValue() as string) || "08060618329"}
      </p>
    ),

    enableSorting: false,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => (
      <div className='text-sm text-[#344054] font-inter w-32'>
        <p className='truncate'> {info.getValue() as string}</p>
      </div>
    ),

    enableSorting: false,
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: (info) => {
      return (
        <div>
          <span className='text-sm font-inter'>
            {info.getValue() as string}
          </span>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "followers_count",
    header: "Followers",
    cell: (info) => {
      return (
        <div>
          <span className='text-sm font-inter'>
            {info.getValue() as string}
          </span>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "followings_count",
    header: "Following",
    cell: (info) => {
      return (
        <div>
          <span className='text-sm font-inter'>
            {info.getValue() as string}
          </span>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "post_count",
    header: "Post",
    cell: (info) => {
      return (
        <div>
          <span className='text-sm font-inter'>
            {info.getValue() as string}
          </span>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "community_count",
    header: "Community",
    cell: (info) => {
      return (
        <div>
          <span className='text-sm font-inter'>
            {info.getValue() as string}
          </span>
        </div>
      );
    },
    enableSorting: false,
  },
];
