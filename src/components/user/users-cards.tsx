"use client";

import { users } from "@/lib/dummy-data";
import { ArrowDown, ArrowUp } from "lucide-react";

export const UserCard = () => {
  return (
    <div className='px-6 bg-[#FFF] mb-5'>
      <div className=''>
        <div className='flex items-center gap-8 justify-between'>
          {users?.map((list, idx) => (
            <div
              key={idx}
              className={`flex flex-col bg-[#FFFFFF]  border border-[#EAECF0]  gap-6 shadow-userShadow rounded-[8px] p-6 w-full`}>
              <p
                className={` text-[#494850] font-semibold text-base font-sora `}>
                {list.active}
              </p>

              <div className='flex flex-col gap-4'>
                <p
                  className={` 
                       "text-[#494850] font-semibold font-sora text-2xl `}>
                  {list.number}
                </p>
                <div className='flex items-center gap-2'>
                  <div
                    className={`font-semibold flex items-center font-sora text-base ${
                      idx === 1 ? "text-[#B42318]" : "text-[#0DBF66]"
                    }`}>
                    {idx === 0 || idx === 2 ? (
                      <div>
                        <ArrowUp size={12} />
                      </div>
                    ) : (
                      idx === 1 && (
                        <div>
                          <ArrowDown size={12} />
                        </div>
                      )
                    )}
                    {list.cap}
                  </div>
                  <p
                    className={` 
                    text-[#667085] font-medium font-inter text-sm `}>
                    {list.month}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
