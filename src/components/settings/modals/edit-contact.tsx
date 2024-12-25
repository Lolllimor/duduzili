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
import { Textarea } from '@/components/ui/textarea';

export const EditContact = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-[#2A2A2A] flex gap-2 items-center text-xs ">
        <Image src="/edit.svg" alt="edit" width={16} height={16} />
        Contact Info
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-[clamp(200px,50vw,645px)] [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto">
        <DialogTitle className="h-fit">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold">About Duduzili</span>
            <DialogClose aria-label="Close">
              <Image
                src="/close.svg"
                height={36}
                width={36}
                alt="close-btn"
                className="cursor-pointer"
              />
            </DialogClose>
          </div>
        </DialogTitle>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 ">
            <div className=" flex flex-col w-full  gap-2">
              <label
                htmlFor="email"
                className="text-base text-[#2A2A2A] font-medium font-inter"
              >
                Email
              </label>
              <Input
                placeholder="Enter email address"
                className="h-12 border-[#D9D9DB] rounded-lg placeholder:text-[#BDBDBD] font-normal text-[15px]"
              />
            </div>
            <div className=" flex flex-col w-full  gap-2">
              <label
                htmlFor="phone number"
                className="text-base text-[#2A2A2A] font-medium font-inter"
              >
                Phone number
              </label>
              <Input
                placeholder="Enter phone number"
                className="h-12 border-[#D9D9DB] rounded-lg placeholder:text-[#BDBDBD] font-normal text-[15px]"
              />
            </div>
          </div>
          <div className=" flex flex-col w-full  gap-1.5">
            <label
              htmlFor="address"
              className="text-base text-[#2A2A2A] font-medium font-inter"
            >
              Address
            </label>
            <Textarea
              placeholder="Start typing..."
              className="resize-none h-[clamp(100px,5vh,110px)] placeholder:text-[#BDBDBD] text-[15px]"
            />
          </div>
        </div>

        <div
          role="button"
          className="bg-[#4534B8] mt-10 border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center "
        >
          Save Info
        </div>
      </DialogContent>
    </Dialog>
  );
};
