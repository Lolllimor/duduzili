'use client';
import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeaderProps {
  //   icon: ReactNode;
  pageTitle: string | Array<string>;
  moreOptions?: ReactNode;
}

export const AppHeader = ({ pageTitle, moreOptions }: HeaderProps) => {
  const { back } = useRouter();
  return (
    <div className="  w-full bg-[#FFFFFF] font-sora  gap-2 p-8 flex items-center sticky top-0 z-50 justify-between">
      <div className="flex gap-2 items-center cursor-pointer">
        {typeof pageTitle === 'string' || pageTitle.length === 1 ? (
          <p className="text-[#101828] text-3xl font-bold">{pageTitle}</p>
        ) : (
          <div className="flex items-center gap-2 font-poppins">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => back()}
            >
              <ChevronLeft className="size-5 text-[#242428]" />
              <p className="text-[#242428] font-semibold text-sm">Back</p>
            </div>
            <div className="flex w-[1px] h-[38px] bg-[#EBEBEB] border-none"></div>
            <div className="flex items-center">
              <p className="text-[#5E606A]">{pageTitle[0]}</p>
              {pageTitle.slice(1).map((item: string) => (
                <div key={item} className="flex gap-2 pl-2 items-center">
                  <ChevronRight className="size-4 text-[#ABAEB5]" />
                  <p className="text-[#101828] font-semibold text-xl">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {moreOptions}
    </div>
  );
};
