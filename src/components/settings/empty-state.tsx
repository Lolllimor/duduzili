import Image from 'next/image';
import React, { ReactNode } from 'react';
import { Button } from '../ui/button';
import { IoMdAdd } from 'react-icons/io';

export const EmptyState = ({
  title,
  paragraph,
  btnText,
}: {
  title: string;
  paragraph: string;
  btnText?: ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full h-full  font-inter">
      <Image
        src="/empty-state.svg"
        alt="empty-state-image"
        height={150}
        width={150}
      />
      <div className="flex flex-col gap-7 items-center ">
        <div className="flex flex-col gap-1 items-center">
          <span className="text-[18px] text-[#000000] font-semibold">
            {title}
          </span>
          <p className="max-w-[300px] text-sm text-[#475367] text-center">
            {paragraph}
          </p>
        </div>
        {btnText && (
          <Button className="h-10 w-[160px] rounded-[48px] text-sm font-semibold flex items-center gap-2.5 bg-[#4534B8] text-white">
            <IoMdAdd className="size-5" />
            {btnText}
          </Button>
        )}
      </div>
    </div>
  );
};
