'use client';

import Image from 'next/image';
import { user } from '@/lib/dummy-data';
import { useFetchNewUserQuery } from '@/redux/features/dashboardApi';
import dayjs from 'dayjs';
export const NewUser = () => {
  const { data } = useFetchNewUserQuery();
  return (
    <div className="bg-white flex flex-col gap-7 rounded-[16px] p-6">
      {data?.data.count &&
        data.data.results.map(
          (
            item: {
              profile_picture: string;
              full_name: string;
              date_joined: string;
            },
            idx: number
          ) => (
            <section key={idx} className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <Image
                  src={item.profile_picture}
                  width={48}
                  height={48}
                  alt=""
                  className="rounded-full h-12 w-12"
                />
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
            </section>
          )
        )}
    </div>
  );
};
