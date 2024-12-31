'use client';

import * as React from 'react';
import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface MultipleSelectorProps {
  data?: string[] | null;
  selectedGroups: string[]; 
  onSelectionChange: (selectedValues: string[]) => void;
}


export function MultipleSelector({
  data,
  selectedGroups,
  onSelectionChange,
}: MultipleSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string[]>([]);
  
    const handleSetValue = (val: string) => {
      let newValue;
      if (selectedGroups.includes(val)) {
        newValue = selectedGroups.filter((item) => item !== val);
      } else {
        newValue = [...selectedGroups, val];
      }
      onSelectionChange(newValue); // Update the parent state with the selected values
    };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full hover:bg-transparent h-12 text-[15px] justify-between font-normal text-[#BDBDBD] hover:text-[#BDBDBD]"
        >
          <div className="flex gap-2 justify-start text-[#ABAEB5] text-sm font-normal">
            Select permissions
          </div>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="!w-full p-0">
        <Command className="w-full">
          {/* <CommandInput placeholder="Search framework..." className='w-full'/>
          <CommandEmpty>No data</CommandEmpty> */}
          <CommandGroup>
            <CommandList>
              {data &&
                data.map((fw) => (
                  <CommandItem
                    key={fw}
                    value={fw}
                    onSelect={() => {
                      handleSetValue(fw);
                    }}
                  >
                    
                    {fw}
                  </CommandItem>
                ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
