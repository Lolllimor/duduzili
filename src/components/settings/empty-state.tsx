import Image from 'next/image';
import React, { ReactNode } from 'react';
import { Button } from '../ui/button';
import { IoMdAdd } from 'react-icons/io';
import EmptyStateIcon from '../icons/empty-state';

export const EmptyState = ({
  title,
  paragraph,
  btn,
}: {
  title: string;
  paragraph: string;
  btn?: ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full h-full  font-inter">
      <EmptyStateIcon />
      <div className="flex flex-col gap-7 items-center ">
        <div className="flex flex-col gap-1 items-center">
          <span className="text-[18px] text-[#000000] font-semibold">
            {title}
          </span>
          <p className="max-w-[300px] text-sm text-[#475367] text-center">
            {paragraph}
          </p>
        </div>
        {btn}
      </div>
    </div>
  );
};
