import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

import { IoClose } from 'react-icons/io5';


export const AddInterestModal = () => {
  const tags = [
    'teachersofinstagram',
    'training',
    'life',
    'studyabroad',
    'health',
    'facts',
    'educationmatters',
    'career',
    'upsc',
    'educational',
    'nonprofit',
    'preschool',
    'fun',
    'engineering',
    'studygram',
    'parenting',
    'follow',
    'onlinelearning',
    'studentlife',
    'elearning',
    'entrepreneur',
    'leadership',
    'family',
    'history',
    'support',
    'like',
    'parents',
    'nature',
    'charity',
    'travel',
  ];
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="text-[#2A2A2A] flex gap-2 items-center text-xs "
      >
        <Button className="border-2 border-dashed border-[#D9D9DB] rounded-xl w-[346px] h-[300px] flex justify-center items-center bg-white hover:bg-white gap-6 flex-col ">
          <div className="w-20 h-20 rounded-full bg-[#ECEBF8] flex items-center justify-center">
            <Image
              src="/hashtag.svg"
              alt="hashtag-image"
              width={32}
              height={32}
            />
          </div>
          <span className="text-[#242428] text-base">Add New Topic</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-[645px] [&>button]:hidden !rounded-[20px] max-h-[634px] h-full overflow-auto">
        <DialogTitle>
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold">Add Interest</span>
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
            Interest Title
          </label>
          <Input
            placeholder="Enter title"
            className="h-14 border-[#E5E6E8] rounded-sm placeholder:text-[#ABAEB5] font-normal pl-4"
          />
        </div>
        <div className=" flex flex-col w-full  gap-1.5">
          <label
            htmlFor="username"
            className="text-sm text-[#242428] font-medium"
          >
            Hashtags
          </label>
          <Input
            placeholder="Start typing...."
            className="h-14 border-[#E5E6E8] rounded-sm placeholder:text-[#ABAEB5] font-normal pl-4"
          />
        </div>
        <div className="overflow-auto flex gap-2.5 flex-wrap w-full">
          {tags.map((item) => (
            <Button
              key={item}
              className="shadow-sm h-11 px-4 flex gap-2 bg-transparent border text-[#242428] border-[#D0D5DD] hover:bg-transparent items-center"
            >
              <span className=" text-base">{item}</span>
              <IoClose className="size-2.5 " />
            </Button>
          ))}
        </div>
        <div
          role="button"
          className="bg-[#4534B8] border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center mt-5 "
        >
          Save Interest
        </div>
      </DialogContent>
    </Dialog>
  );
};
