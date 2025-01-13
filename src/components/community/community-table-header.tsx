import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { ChevronDown, SearchIcon } from 'lucide-react';
import { Input } from '../ui/input';

export const CommunityTableHeader = ({table}:{table:any}) => {
  return (
    <div className="flex justify-between items-center ">
      <div className="h-[44px] border rounded-lg w-[277px] flex items-center pl-4 gap-2">
        <SearchIcon className="text-[#667085]" />
        <Input
          className="p-0 border-none focus:border-none placeholder:text-[#667085] shadow-none"
          placeholder="Search Community"
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
        />
      </div>
      {/* <DropdownMenu>
        <DropdownMenuTrigger
          defaultValue="All Categories"
          className="w-[189px] flex items-center justify-between bg-white px-3.5 py-3 h-[44px] border-[1px] text-[#101828] font-medium font-inter text-base border-[#D0D5DD] shadow-xs rounded-lg"
        >
          All Categories
          <ChevronDown className="h-5 w-5 opacity-50" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-sm font-normal font-outfit"></DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
};
