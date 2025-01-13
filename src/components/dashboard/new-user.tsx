'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useFetchNewUserQuery } from '@/redux/features/dashboardApi';
import { Skeleton } from '../ui/skeleton';
import { getInitials } from '../community/profile-drawer';

export const NewUser = () => {
  const { data, isLoading } = useFetchNewUserQuery();
  return (
    <section className="bg-white flex flex-col gap-7 rounded-[16px] p-6">
      {isLoading
        ? Array(6)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-2 w-8" />
                  <Skeleton className="h-2 w-14" />
                </div>
              </div>
            ))
        : data?.data.count &&
          data.data.results.map(
            (
              item: {
                profile_picture: string;
                full_name: string;
                date_joined: string;
              },
              idx: number
            ) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 rounded-full">
                    <AvatarImage src={item.profile_picture} />
                    <AvatarFallback>
                                          {getInitials(item.full_name)}</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col gap-1">
                    <p className="font-semibold font-sora text-sm text-[#2A2A2A]">
                      {item.full_name}
                    </p>
                    <p className="font-normal font-sora text-xs text-[#8F8E93]">
                      Joined:{' '}
                      {dayjs(item.date_joined).format('MMMM DD, YYYY HH:mmA')}
                    </p>
                  </div>
                </div>

                {/* messages */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/messageicon.png"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                  <Image src="/erroricon.png" width={20} height={20} alt="" />
                </div>
              </div>
            )
          )}
    </section>
  );
};
