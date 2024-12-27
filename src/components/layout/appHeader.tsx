import { ArrowRight } from 'lucide-react';
import React, { ReactNode } from 'react';

interface HeaderProps {
  //   icon: ReactNode;
  pageTitle: string | Array<string>;
  moreOptions?: ReactNode;
}

export const AppHeader = ({ pageTitle, moreOptions }: HeaderProps) => {
  return (
    <div className="  w-full bg-[#FFFFFF] gap-2 p-8 flex items-center sticky top-0 z-50 justify-between">
      <div className="flex gap-2 items-center cursor-pointer">
        {typeof pageTitle === 'string' || pageTitle.length === 1 ? (
          <p className="text-[#101828] text-3xl font-medium">{pageTitle}</p>
        ) : (
          <div className="flex">
            <p>{pageTitle[0]}</p>
            {pageTitle.slice(1).map((item: string) => (
              <div className="flex gap-2 pl-2 items-center">
                <ArrowRight />
                <p className="">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {moreOptions}
    </div>
  );
};
