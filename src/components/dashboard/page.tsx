"use client";
import { country, overview } from "@/lib/dummy-data";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { NewUser } from "./new-user";
import { NewMessages } from "./new-messages";

export const Dashboard = () => {
  return (
    <section className="flex flex-col gap-8">
      {/* Overview */}
      <div className="border-[2px] p-8 border-[#F5F5F5] bg-[#FCFCFD] rounded-[20px]">
        <div className="flex flex-col gap-5">
          <h3>Overview</h3>
          <div className="flex items-center gap-8 justify-between">
            {overview?.map((list, idx) => (
              <div key={idx}
                className={`flex flex-col ${
                  idx === 0
                    ? "bg-[#4534B8] text-white gap-7 shadow-custom rounded-[16px] p-6 w-full"
                    : "bg-[#FFFFFF]  gap-7 shadow-custom rounded-[16px] p-6 w-full"
                } `}
              >
                <p
                  className={` ${
                    idx === 0 ? "text-white" : "text-[#494850]"
                  } font-semibold text-base font-sora `}
                >
                  {list.header}
                </p>

                <div>
                  <div className="flex items-center gap-2">
                    <p
                      className={` ${
                        idx === 0 ? "text-white" : "text-[#494850]"
                      } font-semibold font-sora text-2xl `}
                    >
                      {list.price}
                    </p>
                    <p className="font-semibold font-sora text-base text-[#0DBF66]">
                      {list.marketcap}
                    </p>
                  </div>
                  <p
                    className={` ${
                      idx === 0 ? "text-white" : "text-[#8F8E93]"
                    } font-normal font-sora text-sm `}
                  >
                    {list.month}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="border-[2px] p-8 w-full flex items-center justify-between gap-8 border-[#F5F5F5] bg-[#FCFCFD] rounded-[20px]">
        <div className="rounded-[16px] bg-white h-[266px] p-6 w-1/2">
          <p className="font-sora font-semibold text-base text-[#23222C]">
            Gender ratio
          </p>
        </div>
        <div className="rounded-[16px] bg-white h-[266px] p-6 w-1/2">
          <p className="font-sora font-semibold text-base text-[#23222C]">
            Age group
          </p>
        </div>
      </div>
      {/* Second chart */}
      <div className="border-[2px] flex flex-col gap-5 p-8 w-full  border-[#F5F5F5] bg-[#FCFCFD] rounded-[20px]">
        <div className="flex items-center justify-between">
          <h3 className="font-sora font-semibold text-base text-[#23222C]">
            Users
          </h3>
          <div className="flex itwms-center gap-[17px]">
            <div className="relative flex items-center gap-[6px]">
              <Checkbox className="data-[state=checked]:bg-[#4534B8]" />

              <p className="font-normal font-sora text-sm text-[#4534B8]">
                All users
              </p>
            </div>
            <div className="relative flex items-center gap-[6px]">
              <Checkbox className="data-[state=checked]:bg-[#E59055]" />

              <p className="font-normal font-sora text-sm text-[#E59055]">
                Male
              </p>
            </div>
            <div className="relative flex items-center gap-[6px]">
              <Checkbox className="data-[state=checked]:bg-[#367EE8]" />

              <p className="font-normal font-sora text-sm text-[#367EE8]">
                Female
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[16px] bg-white h-[266px] p-6 w-full"></div>
      </div>

      {/* map section */}
      <div className="border-[2px] flex flex-col gap-5 p-8 w-full  border-[#F5F5F5] bg-[#FCFCFD] rounded-[20px]">
        <h3 className="font-sora font-semibold text-base text-[#23222C]">
          Countries
        </h3>

        <div className="rounded-[16px] flex items-start  bg-white  p-6 w-full">
          <div className="w-[30%] flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold font-sora text-[32px] text-[#2A2A2A]">
                4
              </h3>
              <p className="font-medium font-inter text-sm text-[#B0B7C3]">
                Countries in total
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {country?.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <figure>
                      <Image
                        src={item?.flag}
                        width={20}
                        height={18}
                        alt={item?.country}
                      />
                    </figure>
                    <p className="font-normal font-sora textxs text-[#8A94A6]">
                      {item?.country}
                    </p>
                  </div>
                  <p className="font-semibold text-xs font-sora text-[#2A2A2A]">
                    {item?.quantity}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-full w-[1px] bg-[#F3F3F3] mx-[40px]"></div>
          <div className="w-[70%]">
            <Image
              src="/map.svg"
              width={100}
              height={100}
              alt="Map"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* chat */}
      <div className="w-full gap-8 flex items-start justify-between">
        <div className="border-[2px] w-1/2 flex flex-col gap-5 p-8  border-[#F5F5F5] bg-[#FCFCFD] rounded-[20px]">
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
        <div className="border-[2px] w-1/2 flex flex-col gap-5 p-8  border-[#F5F5F5] bg-[#FCFCFD] rounded-[20px]">
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
