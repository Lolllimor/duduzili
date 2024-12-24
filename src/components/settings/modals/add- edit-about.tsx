import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';

export const AddEditAbout = () => {

  return (
    <Dialog>
      <DialogTrigger className="text-[#2A2A2A] flex gap-2 items-center text-xs ">
        <Image src="/edit.svg" alt="edit" width={16} height={16} />
        Edit topic
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-[clamp(200px,50vw,645px)] [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto text-inter">
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
        <div className=" flex flex-col w-full  gap-1.5">
          <label
            htmlFor="interest title"
            className="text-sm text-[#242428] font-medium"
          >
            About
          </label>
          <Textarea
            placeholder="Start typing..."
            className="resize-none h-[clamp(200px,10vh,545px)]"
          />
        </div>

        <div
          role="button"
          className="bg-[#4534B8] border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center mt-5 "
        >
          Save
        </div>
      </DialogContent>
    </Dialog>
  );
};
