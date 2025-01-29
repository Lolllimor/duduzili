import { ArrowLeft } from "lucide-react";
import React from "react";
// import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { UserTab } from "./tab";

export const UserProfile = () => {
  return (
    <section className="p-6">
      <div className=" flex items-start w-full">
        <div className="bg-white w-[70%] border border-[#F0F0F1] rounded-t-[12px]">
          <div className="flex items-center gap-2 p-5">
            <ArrowLeft />
            <h3 className="font-sora font-bold text-xl text-[#2A2A2A]">
              Babatunde Adekunle
            </h3>
          </div>
          {/* <Separator className="bg-[#F0F0F1] my-5" /> */}
          <section className="flex items-start gap-5 p-5">
            <div className="relative w-fit">
              <Image
                src="/newuser.png"
                width={100}
                height={100}
                alt="profile"
              />
              <div className="h-4 w-4 rounded-full bg-[#04802E] border border-white absolute bottom-2 right-2"></div>
            </div>
            <div>
              <h3 className="font-sora font-semibold text-2xl text-[#23222C]">
                Babatunde Adekunle
              </h3>
              <div className="flex items-center gap-2">
                <p className="font-sora font-normal text-base text-[#494850]">
                  @adetunes
                </p>
                <div className="h-[6px] w-[6px] rounded-full bg-[#8E9391]"></div>
                <p className="font-normal font-sora text-sm text-[#04802E]">
                  online
                </p>
              </div>
            </div>
          </section>
          {/* followes */}
          <section className="flex items-center p-5 gap-[40px]">
            <div className="flex flex-col gap-2">
              <p className="font-sora font-normal text-sm text-[#8F8E93]">
                Posts
              </p>
              <p className="font-sora font-semibold text-base text-[#2A2A2A]">
                1k
              </p>
            </div>

            <div className="bg-[#D9D9DB] w-[1px] h-[38px]"></div>

            <div className="flex flex-col gap-2">
              <p className="font-sora font-normal text-sm text-[#8F8E93]">
                Followers
              </p>
              <p className="font-sora font-semibold text-base text-[#2A2A2A]">
                21k
              </p>
            </div>
            <div className="bg-[#D9D9DB] w-[1px] h-[38px]"></div>

            <div className="flex flex-col gap-2 w-full">
              <p className="font-sora font-normal text-sm text-[#8F8E93]">
                Following
              </p>
              <div className="flex items-center gap-2 w-full">
                <p className="font-sora font-semibold text-base text-[#2A2A2A]">
                  1.1k
                </p>
                <div className="flex">
                  <Image
                    src="/newuser.png"
                    width={30}
                    height={30}
                    alt="profile"
                  />
                  <Image
                    src="/newuser.png"
                    width={30}
                    height={30}
                    alt="profile"
                    className="-ml-2"
                  />
                  <Image
                    src="/newuser.png"
                    width={30}
                    height={30}
                    alt="profile"
                    className="-ml-2"
                  />
                  <Image
                    src="/newuser.png"
                    width={30}
                    height={30}
                    alt="profile"
                    className="-ml-2"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Tabs */}
          <UserTab />
        </div>
        <div className="w-[30%]">
          <p className="text-red-500 font-bold">Sidebar for followers</p>
        </div>
        {/* repeat */}
      </div>
    </section>
  );
};
