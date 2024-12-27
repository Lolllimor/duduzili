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
  data: string[] | null;
}

export function MultipleSelector({ data }: MultipleSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string[]>([]);

  const handleSetValue = (val: string) => {
    if (value.includes(val)) {
      value.splice(value.indexOf(val), 1);
      setValue(value.filter((item) => item !== val));
    } else {
      setValue((prevValue) => [...prevValue, val]);
    }
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
          <div className="flex gap-2 justify-start">
            {value?.length
              ? value.map((val, i) => (
                  <div
                    key={i}
                    className="px-2 text-base py-1 text-[#2A2A2A] rounded-xl border bg-slate-200 "
                  >
                    {data && data.find((fw) => fw === val)}
                  </div>
                ))
              : 'Select group'}
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
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value.includes(fw) ? 'opacity-100' : 'opacity-0'
                      )}
                    />
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
