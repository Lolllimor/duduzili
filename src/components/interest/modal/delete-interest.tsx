import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

import { IoClose } from 'react-icons/io5';

import Image from 'next/image';

export const DeleteInterest = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-[#2A2A2A] flex gap-2 items-center text-xs ">
        <Image src="/edit.svg" alt="edit" width={16} height={16} />
        Edit topic
      </DialogTrigger>
      <DialogContent className=" py-5 gap-0  w-[450px] [&>button]:hidden rounded-[16px] max-h-[376px] h-full  !px-0 flex flex-col">
        <DialogTitle>
          <div className="flex justify-end w-full px-8 ">
            <DialogClose aria-label="Close" className="">
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
          <div
            role="button"
            className="bg-[#F4F4F4] border-none rounded-[32px] h-[51px] w-[177px] text-[#2A2A2A] flex justify-center items-center "
          >
            Cancel
          </div>
          <div
            role="button"
            className="bg-[#D40000] border-none rounded-[32px] h-[51px]  w-[177px] text-white flex justify-center items-center"
          >
            Delete
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
