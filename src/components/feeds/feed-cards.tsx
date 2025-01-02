'use client';

import { normalizeUrlParams } from '@/lib/normalize-url';
import { useFetchFeedDashboardQuery } from '@/redux/features/feedApi';
import { capitalize } from 'lodash';
import Image from 'next/image';

export const FeedCards = () => {
  const { data } = useFetchFeedDashboardQuery();
  console.log(data.data);
  return (
    <div className="flex items-center gap-6 font-inter flex-wrap">
      {Object.entries(data.data).map(([key, value]) => (
        <div key={key} className="w-[258px] h-[186px] rounded-xl border border-[#EAECF0] shadow-xl flex flex-col px-6 pb-4 pt-2.5 gap-6">
          <Image
            width={55}
            height={55}
            src="/feeds/feeds-card-icon.svg"
            alt="icon"
          />
          <div className="flex flex-col gap-2">
            <span className="text-[#475467] text-sm font-medium">
             {capitalize(normalizeUrlParams(key))}
            </span>
            <span className="text-[#101828] text-3xl font-semibold">{value as string | number}</span>
          </div>
        </div>
      ))}
    
    </div>
  );
};
