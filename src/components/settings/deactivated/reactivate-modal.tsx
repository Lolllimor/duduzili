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
import { useActivateDeactivatedMutation } from '@/redux/features/settingsApi';
import { Button } from '@/components/ui/button';
import Activate from '@/components/icons/activate';

export const Reactivate = ({ username }: { username: string }) => {
  const [open, setOpen] = useState(false);
  const [activate] = useActivateDeactivatedMutation();
  const handleClick = async () => {
    try {
      const res = await activate({ username: username }).unwrap();
      toast.success('Successfully activated');
      setOpen(false);
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="bg-transparent text-[#0DBF66]   rounded-md  shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        Reactivate Account
      </DialogTrigger>
      <DialogContent className=" py-5 gap-0  w-[450px] [&>button]:hidden rounded-[16px] max-h-[376px] h-full  !px-0 flex flex-col">
        <DialogTitle>
          <div className="flex justify-end w-full px-8 ">
            <DialogClose aria-label="Close" className="z-10 cursor-pointer">
              <IoClose className="size-6 text-[#667085]" />
            </DialogClose>
          </div>
        </DialogTitle>
        <div className="px-8 flex flex-col items-start gap-5 mt-[-20px] mb-9">
          <Activate />
          <div className="flex flex-col gap-4">
            <span className=" text-[22px] font-semibold text-[#242428]">
              Reactivate Account?
            </span>
            <p className="text-base text-[#5E606A] ">
              You are about to reactivate a user’s account. This user will again
              have access on Duduzili.
            </p>
          </div>
        </div>
        <div className="w-full border-none h-[1px] bg-[#EAECF0]"></div>
        <div className="flex justify-between font-medium pt-7 px-8 w-full h-fit">
          <Button
            onClick={() => setOpen(false)}
            className="bg-[#F4F4F4] hover:bg-[#F4F4F4]  border-none rounded-[32px] h-[51px] w-[177px] text-[#2A2A2A] flex justify-center items-center "
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleClick()}
            className="bg-[#4534B8] hover:bg-[#4534B8] border-none rounded-[32px] h-[51px]  w-[177px] text-white flex justify-center items-center"
          >
            Reactivate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
