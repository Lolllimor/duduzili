'use client';

import { useFetchTrendingTopicsQuery } from '@/redux/features/feedApi';
import React from 'react';
import { Skeleton } from '../ui/skeleton';

export const TreandingTopics = () => {
  const { data, isLoading } = useFetchTrendingTopicsQuery();
  return (
    <div className="rounded-xl border border-[#F0F0F1] py-5 px-[15px] gap-4 flex flex-col  h-full w-full">
      <span className="text-base font-sora font-semibold text-[#2A2A2A]">
        Trending Topics
      </span>
      <div className="flex flex-col w-full">
        {isLoading ? (
          <div className="flex flex-col gap-5 w-full">
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <div key={idx} className="flex flex-col gap-1 w-full">
                  <Skeleton className="h-[15px] w-full rounded-xl" />
                  <Skeleton className="h-[15px] w-full rounded-xl" />
                  <Skeleton className="h-[15px] w-full rounded-xl" />
                </div>
              ))}
          </div>
        ) : data.data.count ? (
          <></>
        ) : (
          <p>No data available</p>
        )}
      </div>
      <div className=""></div>
    </div>
  );
};
