'use client';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { IoClose } from 'react-icons/io5';

import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';
import { Button } from '../ui/button';
import { useToggleCommunityStatusMutation } from '@/redux/features/communityApi';

interface DeactivateCommunityProps {
  is_active: boolean;
  id: string;
}

export const DeactivateCommunity = ({
  is_active,
  id,
}: DeactivateCommunityProps) => {
  const [open, setOpen] = useState(false);
  const [toggle] = useToggleCommunityStatusMutation();

  const handleClick = async () => {
    try {
      const res = await toggle({ community_id: id }).unwrap();
      toast.success(`Successfully ${is_active ? 'Deactivated' : 'Activated'}`);
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };

    console.log(is_active)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={` flex gap-2 items-center text-xs ${
          is_active ? 'text-[#F87A6D] focus:text-[#F87A6D]' : 'text-[#2D874E]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {is_active ? 'Deactivate' : 'Activate'} Community
      </DialogTrigger>
      <DialogContent className=" py-5 gap-0  w-[450px] [&>button]:hidden rounded-[16px] max-h-[336px] h-full  !px-0 flex flex-col">
        <DialogTitle>
          <div className="flex justify-end w-full px-8 ">
            <DialogClose aria-label="Close" className="z-10 cursor-pointer">
              <IoClose className="size-6 text-[#667085]" />
            </DialogClose>
          </div>
        </DialogTitle>
        <div className="px-8 flex flex-col items-start gap-5 mt-[-20px] mb-9">
          <Image src="/delete.svg" alt="delete-icon" height={60} width={60} />
          <div className="flex flex-col gap-4">
            <span className=" text-[22px] font-semibold text-[#242428]">
              Deactivate Community
            </span>
            <p className="text-base text-[#5E606A] ">
              You are about to permanently deactivate a Community
            </p>
          </div>
        </div>
        <hr className="" />
        <div className="flex justify-between font-medium pt-7 px-8 w-full h-fit">
          <Button className="bg-[#F4F4F4] hover:bg-[#F4F4F4]/70 border-none rounded-[32px] h-[51px] w-[177px] text-[#2A2A2A] flex justify-center items-center ">
            Cancel
          </Button>
          <Button
            onClick={() => handleClick()}
            className="bg-[#D40000] hover:bg-[#D40000]/70 border-none rounded-[32px] h-[51px]  w-[177px] text-white flex justify-center items-center"
          >
            Deactivate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
