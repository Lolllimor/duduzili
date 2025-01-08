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
  placeholder: string;
}

export function MultipleSelector({
  data,
  selectedGroups,
  onSelectionChange,
  placeholder,
}: MultipleSelectorProps) {
  const [open, setOpen] = React.useState(false);

  const handleSetValue = (val: string) => {
    let newValue;
    if (selectedGroups.includes(val)) {
      newValue = selectedGroups.filter((item) => item !== val);
    } else {
      newValue = [...selectedGroups, val];
    }
    onSelectionChange(newValue); // Update the parent state with the selected values
  };

  console.log(data)
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
            {placeholder}
          </div>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="!w-full p-0"
        onFocusOutside={(e) => e.preventDefault()}
      >
        {data?.length ? (
          <Command className="!w-full">
            <CommandGroup>
              <CommandList>
                {data?.length &&
                  data.map((fw, idx) => (
                    <CommandItem
                      className="cursor-pointer"
                      key={idx}
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
        ) : (
          <p className='w-full px-10 h-8 flex items-center justify-center'>No data</p>
        )}
      </PopoverContent>
    </Popover>
  );
}
