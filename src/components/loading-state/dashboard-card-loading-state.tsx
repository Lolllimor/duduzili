import React from 'react'
import { Skeleton } from '../ui/skeleton';

export const DashboardCardLoadingState = () => {
  return (
    <div className="flex items-center gap-8  flex-wrap">
      <Skeleton className="flex flex-col shrink-0 w-[clamp(300px,20vw,325px)] h-[161px] p-6  gap-7 shadow-custom rounded-[16px] " />
      <Skeleton className="flex flex-col shrink-0 w-[clamp(300px,20vw,325px)] h-[161px] p-6  gap-7 shadow-custom rounded-[16px] " />
      <Skeleton className="flex flex-col shrink-0 w-[clamp(300px,20vw,325px)] h-[161px] p-6  gap-7 shadow-custom rounded-[16px] " />
      <Skeleton className="flex flex-col shrink-0 w-[clamp(300px,20vw,325px)] h-[161px] p-6  gap-7 shadow-custom rounded-[16px] " />
    </div>
  );
}
