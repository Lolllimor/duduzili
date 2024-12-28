"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Edit, Trash2 } from "lucide-react";

export interface PaymentHistory {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  gender: string;
  follower: string;
  following: string;
  post: string;
  community: string;
}

export const paymentHistoryData = [
  {
    id: 1,
    name: "Owen Abaru",
    phoneNumber: "08106534526",
    email: "olamideakintan@gmail.com",
    gender: "male",
    follower: "22",
    following: "97",
    post: "33",
    community: "85",
  },
  {
    id: 2,
    name: "Owen Abaru",
    phoneNumber: "08106534526",
    email: "olamideakintan@gmail.com",
    gender: "male",
    follower: "22",
    following: "97",
    post: "33",
    community: "85",
  },
  {
    id: 2,
    name: "Owen Abaru",
    phoneNumber: "08106534526",
    email: "olamideakintan@gmail.com",
    gender: "male",
    follower: "22",
    following: "97",
    post: "33",
    community: "85",
  },
];

export const paymentHistoryColumns: ColumnDef<PaymentHistory>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
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
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name = row?.original;
      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/dashboard/profile.svg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="font-medium font-sora text-sm text-[#101928]">
              {name?.name}
            </p>
            <p className="font-normal text-sm font-sora text-[#475367]">
              {name?.email}
            </p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "follower",
    header: "Follower",
  },
  {
    accessorKey: "following",
    header: "Following",
  },
  {
    accessorKey: "post",
    header: "Posts",
  },
  {
    accessorKey: "community",
    header: "Community",
  },
];
