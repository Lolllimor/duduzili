import React from "react";
import Image from "next/image";
import { user } from "@/lib/dummy-data";
export const NewUser = () => {
  return (
    <div className="bg-white flex flex-col gap-7 rounded-[16px] p-6">
      {user.map((item, idx) => (
        <section key={idx} className="flex items-center justify-between">
          <div className="flex items-start gap-4">
            <Image src={item.user} width={48} height={48} alt="" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold font-sora text-sm text-[#2A2A2A]">
                {item.name}
              </p>
              <p className="font-normal font-sora text-xs text-[##8F8E93]">
                {item.date}
              </p>
            </div>
          </div>

          {/* messages */}
          <div className="flex items-center gap-4">
            <Image src="/messageicon.png" width={20} height={20} alt="icon" />
            <Image src="/erroricon.png" width={20} height={20} alt="" />
          </div>
        </section>
      ))}
    </div>
  );
};
