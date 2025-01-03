import React from 'react';
import { Skeleton } from '../ui/skeleton';

function LinkPreviewSkeleton() {
  return (
    <div className="flex flex-col">
      <div className="h-[149px] rounded-t-lg">
        <Skeleton className="h-[149px]" />
      </div>
      <div className="bg-duduzili-neutral-200 rounded-b-lg py-3 px-2 flex flex-col gap-1">
        <Skeleton className="h-3 rounded-lg" />
        <Skeleton className="h-3 rounded-lg" />
      </div>
    </div>
  );
}

export default LinkPreviewSkeleton;
