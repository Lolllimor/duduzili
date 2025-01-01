import React from 'react';
import { Button } from '../ui/button';
import { IoMdAdd } from 'react-icons/io';
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import Image from 'next/image';

export const CreatePost = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-9 gap-2 flex items-center text-base rounded-[32px] bg-[#4534B8] font-inter">
          <IoMdAdd className="size-5" />
          Create Post
        </Button>
      </DialogTrigger>{' '}
      <DialogContent className="px-6 py-8 gap-5 w-[clamp(200px,50vw,645px)] shrink [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto">
        <DialogTitle className="h-fit">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold"> Admin Access</span>
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
      </DialogContent>
    </Dialog>
  );
};
