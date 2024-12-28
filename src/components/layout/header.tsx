import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const Header = ({ component }: { component?: string }) => {
  const { back } = useRouter();
  return (
    <div className="h-[103px] w-full bg-[#FFFFFF] gap-2 p-8 flex items-center sticky top-0 z-50">
      {/* <div
        onClick={() => back()}
        className="flex cursor-pointer items-center gap-1"
      >
        <ChevronLeft />
        <p className="font-semibold text-sm font-sora text-[#242428]">Back</p>
      </div> */}

      <div className="h-[38px] w-[1px] bg-[#EBEBEB]"></div>
      {component ? (
        <h1 className="text-[#101828] text-3xl font-medium">{component}</h1>
      ) : (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{component}</BreadcrumbLink>
            </BreadcrumbItem>
            {/* <BreadcrumbSeparator /> */}
            {/* <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem> */}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Frank Muller</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </div>
  );
};

export default Header;
