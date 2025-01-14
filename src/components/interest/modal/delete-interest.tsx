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
import { Button } from '../../ui/button';
import { useDeleteInterestMutation } from '@/redux/features/interestsApi';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';
import TrashIcon from '@/components/icons/trash-icon';

export const DeleteInterest = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const [deleteInterest] = useDeleteInterestMutation();
  const handleClick = async () => {
    try {
      const red = await deleteInterest({ pf_id: id }).unwrap();
      toast.success('Successfully deleted');
      setOpen(false);
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="text-[#ED5556] focus:text-[#ED5556] flex gap-2 items-center text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <TrashIcon />
        Delete interest
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
          <Image src="/delete.svg" alt="delete-icon" height={60} width={60} />
          <div className="flex flex-col gap-4">
            <span className=" text-[22px] font-semibold text-[#242428]">
              Delete Interest
            </span>
            <p className="text-base text-[#5E606A] ">
              You are about to permanently delete an Interest, including all
              associated hashtags. This action cannot be undone.
            </p>
          </div>
        </div>
        <div className="w-full border-none h-[1px] bg-[#EAECF0]"></div>
        <div className="flex justify-between font-medium pt-7 px-8 w-full h-fit">
          <Button className="bg-[#F4F4F4] border-none rounded-[32px] h-[51px] w-[177px] text-[#2A2A2A] flex justify-center items-center ">
            Cancel
          </Button>
          <Button
            onClick={() => handleClick()}
            className="bg-[#D40000] border-none rounded-[32px] h-[51px]  w-[177px] text-white flex justify-center items-center"
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
