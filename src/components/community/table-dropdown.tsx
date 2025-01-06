import { useToggleCommunityStatusMutation } from '@/redux/features/communityApi';
import { DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { normalizeUrl } from '@/lib/normalize-url';

export const TableDropdown = ({
  is_active,
  id,
  name,
}: {
  is_active: boolean;
  id: string;
  name: string;
}) => {
  const [toggle] = useToggleCommunityStatusMutation();

  const handleClick = async () => {
    try {
      const res = await toggle({ community_id: id }).unwrap();
      toast.success('Successfully toggled');
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };
  return (
    <DropdownMenuContent className="text-sm font-normal font-outfit rounded-lg ">
      <DropdownMenuItem>
        <Link href={`community/${normalizeUrl(name)}/${id}`}>
          View community
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>View on duduzili</DropdownMenuItem>{' '}
      <DropdownMenuItem
        onClick={handleClick}
        className={`${is_active ? '' : 'text-[#2D874E]'}`}
      >
        Make {is_active ? 'Inactive' : 'Active'}
      </DropdownMenuItem>
      <DropdownMenuItem className="text-[#F87A6D] focus:text-[#F87A6D]">
        Deactivate Community
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
