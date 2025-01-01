import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { ReactNode } from 'react';

export const MoreOptions = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="border-[#E4E7EC] cursor-pointer border rounded-lg h-8 w-8 flex items-center justify-center">
            <HiOutlineDotsVertical />
          </div>
        </DropdownMenuTrigger>
        {children}
      </DropdownMenu>
    </div>
  );
};
