'use client';
import React, { use } from 'react';
import toast from 'react-hot-toast';
import { UpdateProfile } from './modal/update-profile';
import { DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import {
  useToggleUserStatusMutation,
} from '@/redux/features/managementApi';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';
import { usePathname } from 'next/navigation';
import { RevokeAccess } from './modal/revoke-access';

export const CSMore = ({
  is_active,
  name,
}: {
  is_active: boolean;
  name: string;
}) => {
  const pathname = usePathname();
  const id = pathname.split('/').pop() || '';

  const [toggle, { isLoading }] = useToggleUserStatusMutation();

  const handleClick = async () => {
    try {
      const res = await toggle({ group_id: id, username: name }).unwrap();
      toast.success('Successfully toggled');
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };

  return (
    <DropdownMenuContent className="text-sm font-inter rounded-lg w-[128px]">
      <DropdownMenuItem>
        <UpdateProfile />
      </DropdownMenuItem>
      <DropdownMenuItem onClick={handleClick}>
        Make {is_active ? 'Inactive' : 'Active'}
      </DropdownMenuItem>
      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
        {/* <CreatePermissionGroup id={group_id} />
         */}
        Reset Password
      </DropdownMenuItem>
      <DropdownMenuItem
        onSelect={(e) => e.preventDefault()}
        className="text-[#BA1A1A] focus:text-[#BA1A1A]"
      >
        <RevokeAccess id={id} username={name} />
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
