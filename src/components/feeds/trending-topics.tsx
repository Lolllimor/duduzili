"use client"

import { useFetchTrendingTopicsQuery } from '@/redux/features/feedApi'
import React from 'react'

export const TreandingTopics = () => {
    const { data } = useFetchTrendingTopicsQuery()
  return (
      <div className="rounded-xl border border-[#F0F0F1] py-5 px-[15px] gap-4 flex flex-col  h-full">
          <span className='text-base font-sora font-semibold text-[#2A2A2A]'>Trending Topics</span>
          <div className=''></div>
    </div>
  );
}
