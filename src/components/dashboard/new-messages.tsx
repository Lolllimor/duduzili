import React from "react";
import Image from "next/image";
import { messages, user } from "@/lib/dummy-data";
import { IoCheckmark } from "react-icons/io5";
import { CheckCheck } from "lucide-react";
export const NewMessages = () => {
  return (
    <div className="bg-white flex flex-col gap-7 rounded-[16px] p-6">
      {messages.map((item, idx) => (
        <section key={idx} className="">
          <div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image src={item.user} width={48} height={48} alt="" />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold font-sora text-sm text-[#2A2A2A]">
                      {item.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[#8F8E93]"></div>
                  <p className="font-normal font-inter text-xs text-[#8F8E93]">
                    5m
                  </p>
                </div>
              </div>
              <div className="w-fit relative">
                <p className="font-normal font-sora text-xs text-[##8F8E93]">
                  {item.date}
                </p>
                <div className="absolute -right-4 top-1">
                  <CheckCheck color="#81848F" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
