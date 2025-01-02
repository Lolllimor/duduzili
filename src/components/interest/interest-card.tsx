
import { useFetchInterstListQuery } from '@/redux/features/interestApi';
import React from 'react'

export const InterestCard = () => {
    const { data } = useFetchInterstListQuery();
    
    console.log(data)
    
  return (
    <div>InterestCard</div>
  )
}
