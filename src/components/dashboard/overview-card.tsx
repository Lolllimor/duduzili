import React from "react";

export const OverviewCard = () => {
  return (
    <div className="flex flex-col gap-7 shadow-custom rounded-[16px] p-6">
      <p>Users</p>

      <div>
        <div className="flex items-center gap-2">
          <p className="font-semibold font-sora text-2xl text-[#494850]">
            38.9k
          </p>
          <p className="font-semibold font-sora text-base text-[#0DBF66]">
            +3.4%
          </p>
        </div>
        <p className="font-normal font-sora text-sm text-[#8F8E93]">
          37.4K Last month
        </p>
      </div>
    </div>
  );
};
