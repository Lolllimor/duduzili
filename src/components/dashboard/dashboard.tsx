'use client';
import { country, overview } from '@/lib/dummy-data';
import React from 'react';
import { Checkbox } from '../ui/checkbox';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { NewUser } from './new-user';
import { NewMessages } from './new-messages';
import {
  useFetchDashboardOverviewQuery,
  useFetchUserCountryQuery,
} from '@/redux/features/dashboardApi';
import { AgeGenderChart } from './age-gender-chart';
import { UserGraph } from './user-graph';
import { Skeleton } from '../ui/skeleton';
import LightGreenArrow from '../icons/light-green-arrow';
import GreenArrow from '../icons/green-arrow';
import { useRouter } from 'next/navigation';
import { DashboardCardLoadingState } from '../loading-state/dashboard-card-loading-state';

export const Dashboard = () => {
  const { data, isLoading } = useFetchDashboardOverviewQuery();

  const { push } = useRouter();
  const { data: userCountry, isLoading: userCountryLoading } =
    useFetchUserCountryQuery();
  return (
    <section className="flex flex-col gap-8 p-8">
      {/* Overview */}
      <div className="border-[2px] p-8 border-[#F5F5F5] bg-[#FCFCFD] rounded-[20px]">
        <div className="flex flex-col gap-5 font-sora">
          <h3 className="text-base font-semibold">Overview</h3>
          <div className="flex items-center gap-8  flex-wrap">
            {isLoading ? (
              <DashboardCardLoadingState />
            ) : (
              Object.entries(data?.data || {}).map(([key, value], idx) => (
                <div
                  key={key}
                  onClick={() => {
                    if (key === 'community') {
                      push('/community');
                    }
                  }}
                  className={`flex flex-col shrink-0 w-[clamp(300px,20vw,325px)] p-6 cursor-pointer gap-7 shadow-custom rounded-[16px]  ${
                    idx === 0 ? 'bg-[#4534B8] text-white  ' : 'bg-[#FFFFFF] '
                  }`}
                >
                  <p
                    className={`${
                      idx === 0 ? 'text-white' : 'text-[#494850]'
                    } font-semibold text-base font-sora`}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <p
                        className={`${
                          idx === 0 ? 'text-white' : 'text-[#494850]'
                        } font-semibold font-sora text-2xl`}
                      >
                        {(value as { total_count: number }).total_count}
                      </p>
                      <div className="flex items-center gap-[6px]">
                        <div
                          className={`font-semibold font-sora text-base flex items-center gap-[6px] ${
                            key === 'user' ? 'text-[#C5F0DA]' : 'text-[#0DBF66]'
                          } `}
                        >
                          +
                          {(value as { percentage: number }).percentage.toFixed(
                            2
                          )}
                          %
                          {key === 'user' ? (
                            <LightGreenArrow />
                          ) : (
                            <GreenArrow />
                          )}
                        </div>
                      </div>
                    </div>
                    <p
                      className={`${
                        idx === 0 ? 'text-white' : 'text-[#8F8E93]'
                      } font-normal font-sora text-sm`}
                    >
                      {(value as { last_month: string }).last_month} Last month
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Chart */}
      <AgeGenderChart />
      {/* Second chart */}

      <UserGraph />

      {/* map section */}
      <div className="border-[2px] flex flex-col gap-5 p-8 w-ful h-full   border-[#F5F5F5] bg-[#FCFCFD] rounded-[20px]">
        <h3 className="font-sora font-semibold text-base text-[#23222C]">
          Countries
        </h3>

        <div className="rounded-[16px] flex items-start  bg-white  p-6 w-full h-[373px] min-h-[300px]">
          <div className="w-[30%] flex flex-col gap-12 h-full">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold font-sora text-[32px] text-[#2A2A2A]">
                {userCountry?.data.length}
              </h3>
              <p className="font-medium font-inter text-sm text-[#B0B7C3]">
                Countries in total
              </p>
            </div>
            <div className="flex flex-col gap-6 overflow-auto">
              {userCountryLoading ? (
                <div className="flex flex-col gap-6 overflow-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Skeleton className="w-5 h-[18px]" />
                      <Skeleton className="h-2 w-12" />
                    </div>
                    <Skeleton className="w-3 h-2" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Skeleton className="w-5 h-[18px]" />
                      <Skeleton className="h-2 w-12" />
                    </div>
                    <Skeleton className="w-3 h-2" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Skeleton className="w-5 h-[18px]" />
                      <Skeleton className="h-2 w-12" />
                    </div>
                    <Skeleton className="w-3 h-2" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Skeleton className="w-5 h-[18px]" />
                      <Skeleton className="h-2 w-12" />
                    </div>
                    <Skeleton className="w-3 h-2" />
                  </div>
                </div>
              ) : (
                userCountry?.data.map(
                  (
                    item: {
                      flag_url: string;
                      name: string;
                      user_count: string;
                    },
                    idx: number
                  ) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <figure>
                          <Image
                            src={item?.flag_url}
                            width={20}
                            height={18}
                            alt={item?.name}
                          />
                        </figure>
                        <p className="font-normal font-sora text-xs text-[#8A94A6]">
                          {item?.name}
                        </p>
                      </div>
                      <p className="font-semibold text-xs font-sora text-[#2A2A2A]">
                        {item?.user_count}
                      </p>
                    </div>
                  )
                )
              )}
            </div>
          </div>
          <div className="h-full w-[1px] bg-[#F3F3F3] mx-[40px]"></div>
          <div className="w-[70%]">
            <Image
              src="/map.svg"
              width={100}
              height={100}
              alt="Map"
              className="w-full h-[300px]"
            />
          </div>
        </div>
      </div>

      {/* chat */}
      <div className="w-full gap-8 flex  justify-between h-[570px] ">
        <div className="border-[2px] w-1/2 flex flex-col gap-5 p-8  border-[#F5F5F5] bg-[#FCFCFD] h-full rounded-[20px]">
          <div className="flex items-center justify-between">
            <p className="font-sora font-semibold text-base text-[#23222C]">
              New user
            </p>
            <div className="flex items-center gap-3">
              <p className="font-semibold font-sora text-sm text-[#4534B8]">
                View all
              </p>
              <ChevronRight color="#4534B8" />
            </div>
          </div>
          <NewUser />
        </div>
        {/* New message */}
        <div className="border-[2px] w-1/2 flex flex-col gap-5 p-8  border-[#F5F5F5] bg-[#FCFCFD] rounded-[20px] h-full">
          <div className="flex items-center justify-between">
            <p className="font-sora font-semibold text-base text-[#23222C]">
              New messages
            </p>
            <div className="flex items-center gap-3">
              <p className="font-semibold font-sora text-sm text-[#4534B8]">
                View all
              </p>
              <ChevronRight color="#4534B8" />
            </div>
          </div>
          <NewMessages />
        </div>
      </div>
    </section>
  );
};
