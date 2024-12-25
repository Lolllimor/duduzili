import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

export const AddFaq = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-[#2A2A2A] flex gap-2 items-center text-xs ">
        <Image src="/edit.svg" alt="edit" width={16} height={16} />
        Add New FAQ
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-[clamp(200px,50vw,645px)] [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto text-inter">
        <DialogTitle className="h-fit">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold"> Add New FAQ</span>
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
        <div className=" flex flex-col w-full  gap-2 font-poppins">
          <label
            htmlFor="phone number"
            className="text-sm text-[#2A2A2A] font-medium "
          >
            Question
          </label>
          <Input
            placeholder="Enter phone number"
            className="h-12 border-[#D9D9DB] rounded-lg placeholder:text-[#ABAEB5] font-normal text-[14px]"
          />
        </div>

        <div className=" flex flex-col w-full  gap-1.5 font-poppins">
          <label
            htmlFor="answer"
            className="text-base text-[#2A2A2A] font-medium "
          >
            Answer
          </label>
          <Textarea
            placeholder="Enter text here..."
            className="resize-none h-[clamp(80px,5vh,114px)] placeholder:text-[#BDBDBD] text-[14px]"
          />
        </div>

        <div
          role="button"
          className="bg-[#4534B8] border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center mt-5 font-inter"
        >
          Add FAQ
        </div>
      </DialogContent>
    </Dialog>
  );
};
