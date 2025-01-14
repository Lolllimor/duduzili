import React from 'react';
import { Skeleton } from './ui/skeleton';

export const TableSkeleton = () => {
  return Array(15)
    .fill(0)
    .map((item, idx) => (
      <div className="w-full flex " key={idx}>
        <span className="table-cell  w-full font-normal pl-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
          <Skeleton className="h-[15px]" />
        </span>
        <span className="table-cell  w-full font-normal pl-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
          <Skeleton className="h-[15px]" />
        </span>
        <span className="table-cell  w-full font-normal pl-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
          <Skeleton className="h-[15px]" />
        </span>
        <span className="table-cell  w-full font-normal pl-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
          <Skeleton className="h-[15px]" />
        </span>
        <span className="table-cell  w-full font-normal pl-6 pr-6 bg-[#F9FAFB] text-[14px] text-uacs-neutral-9 py-4 border-b border-[#F5F5F5]">
          <Skeleton className="h-[15px]" />
        </span>
      </div>
    ));
};
