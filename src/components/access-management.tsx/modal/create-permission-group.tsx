'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { IoMdAdd } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IoClose } from 'react-icons/io5';
import { Textarea } from '@/components/ui/textarea';
import { MultipleSelector } from '@/components/settings/privacy/multi-select';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPermssion } from '@/redux/features/management/managementSlice';
export const CreatePermissionGroup = () => {


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-9 gap-2 flex items-center text-base rounded-[32px] bg-[#4534B8]">
          <IoMdAdd className="size-5" />
          Permission Group
        </Button>
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-[clamp(200px,50vw,645px)] shrink [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto">
        <DialogTitle className="h-fit">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold">
              {' '}
              Create New Permission Group
            </span>
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
        <form className="font-poppins flex flex-col overflow-auto">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 ">
              <div className=" flex flex-col w-full  gap-2">
                <label
                  htmlFor="email"
                  className="text-sm text-[#2A2A2A] font-medium font-inter"
                >
                  Group Name
                </label>
                <Input
                  //   {...register('email')}
                  placeholder="e.g. Customer support"
                  className="h-12 border-[#E5E6E8] rounded-md placeholder:text-[#BDBDBD] font-normal text-[15px]"
                />
                {/* {errors.email && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.email.message}
                  </div>
                )} */}
              </div>
              <div className=" flex flex-col w-full  gap-1.5 font-poppins">
                <label
                  htmlFor="answer"
                  className="text-sm text-[#2A2A2A] font-medium font-inter"
                >
                  Group Decription
                </label>
                <Textarea
                  //   {...register('answer')}
                  placeholder="Enter text here..."
                  className="resize-none h-[clamp(80px,15vh,114px)] placeholder:text-[#BDBDBD] text-[15px]"
                />
                <p className="text-[#81848F] text-sm">
                  Not more than 200 characters
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className=" flex flex-col w-full  gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm text-[#2A2A2A] font-medium font-inter"
                  >
                    Permission Group
                  </label>
                  {/* <MultipleSelector data={data.data?.results} /> */}

                  {/* {errors.email && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.email.message}
                  </div>
                )} */}
                </div>
                <div className=" flex gap-2.5 items-center flex-wrap">
                  {/* {group.map((item) => (
                    <div
                      key={item.value}
                      className=" flex border border-[#D0D5DD] h-11 rounded-lg px-4 gap-2 w-fit items-center cursor-pointer"
                    >
                      {item.label}
                      <IoClose className="size-5 " />
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>

          <DialogClose aria-label="Submit" className="w-full" asChild>
            <Button
              type="submit"
              className="bg-[#4534B8] mt-10 border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center "
            >
              {/* {isPending ? (
                <FaSpinner className="animate-spin" />
              ) : (
                ' Save Info'
              )} */}
              Create Permission Group
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};
