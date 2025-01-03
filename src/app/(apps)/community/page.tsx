'use client';

import { useFetchCommunityListQuery } from '@/redux/features/communityApi';
import React from 'react';

function page() {
  const { data } = useFetchCommunityListQuery();
  return <div>page</div>;
}

export default page;
