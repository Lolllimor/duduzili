import { DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import Link from 'next/link';
import { normalizeUrl } from '@/lib/normalize-url';
import { DeactivateCommunity } from './deactivate-communtiy';

export const TableDropdown = ({
  is_active,
  id,
  name,
}: {
  is_active: boolean;
  id: string;
  name: string;
}) => {
  return (
    <DropdownMenuContent className="text-sm font-normal font-outfit rounded-lg ">
      <DropdownMenuItem>
        <Link href={`community/${normalizeUrl(name)}/${id}`}>
          View community
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>View on duduzili</DropdownMenuItem>{' '}
      <DropdownMenuItem>
        <DeactivateCommunity is_active={is_active} id={id} />
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
