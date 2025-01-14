'use client';
import React from 'react';
import { DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { CreatePermissionGroup } from './modal/create-permission-group';
import { DeletePermissionGroup } from './modal/delete-permission-group';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';
import { useTogglePermissionGroupMutation } from '@/redux/features/managementApi';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { decrypt } from '@/lib/decrypt';
import { normalizeUrl } from '@/lib/normalize-url';

export const ManagementMore = ({
  group_id,
  is_active,
  name,
}: {
  group_id: any;
  is_active: boolean;
  name: string;
}) => {
  const [toggle, { isLoading }] = useTogglePermissionGroupMutation();
  const handleClick = async () => {
    try {
      const res = await toggle({ group_id: group_id }).unwrap();
      toast.success('Successfully toggled');
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };
  return (
    <DropdownMenuContent className="text-sm font-inter rounded-lg w-[128px]">
      <DropdownMenuItem>
        <Link href={`/management/${group_id}`}>
          View Group
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CreatePermissionGroup id={group_id} />
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={handleClick}
        className={`${is_active ? '' : 'text-[#2D874E]'}`}
      >
        Make {is_active ? 'Inactive' : 'Active'}
      </DropdownMenuItem>
      <DropdownMenuItem className="text-[#BA1A1A] focus:text-[#BA1A1A]">
        <DeletePermissionGroup id={group_id} name={name} />
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
