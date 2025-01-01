"use client"

import { useFetchFeedDashboardQuery } from "@/redux/features/feedApi"



export const FeedCards = () => {
    const { data } = useFetchFeedDashboardQuery()
    console.log(data)
  return (
    <div className='flex items-center gap-6'>FeedCards</div>
  )
}
