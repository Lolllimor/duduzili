import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';
import { CreatePermissionGroup } from './modal/create-permission-group';
import { DeletePermissionGroup } from './modal/delete-permission-group';
import { useTogglePermissionGroupMutation } from '@/redux/features/managementApi';
import { encrypt } from '@/lib/encrypt';

export const MoreOptions = ({
  group_id,
  is_active,
}: {
  group_id: any;
  is_active: boolean;
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
  console.log(group_id);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="border-[#E4E7EC] cursor-pointer border rounded-lg h-8 w-8 flex items-center justify-center">
            <HiOutlineDotsVertical />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-sm font-inter rounded-lg w-[128px]">
          <DropdownMenuItem>
            <Link href={`/management/customer-support?id=${group_id}`}>
              View Group
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <CreatePermissionGroup id={group_id} />
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleClick}>
            Make {is_active ? 'Inactive' : 'Active'}
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className="text-[#BA1A1A] focus:text-[#BA1A1A]"
          >
            <DeletePermissionGroup id={group_id} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
