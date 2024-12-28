import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { FetchPermissionGroupResult } from '@/lib/managementTypes';

export const MoreOptions = ({ data }: { data: FetchPermissionGroupResult }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <HiOutlineDotsVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-sm font-inter rounded-lg w-[128px]">
          <DropdownMenuItem>View Group</DropdownMenuItem>
          <DropdownMenuItem>Edit Group</DropdownMenuItem>
          <DropdownMenuItem>Make Inactive</DropdownMenuItem>
          <DropdownMenuItem className="text-[#BA1A1A] focus:text-[#BA1A1A]">
            Delete Group
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
