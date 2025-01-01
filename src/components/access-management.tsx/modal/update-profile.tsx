import { MultipleSelector } from '@/components/settings/privacy/multi-select';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react'
import { FaSpinner } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

export const UpdateProfile = () => {
  return (
       <Dialog >
      <DialogTrigger >
       Update Profile
      </DialogTrigger>
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
        <form
        //   onSubmit={handleSubmit(onSubmit)}
          className="font-poppins flex flex-col overflow-auto"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 ">
              <div className=" flex flex-col w-full  gap-2">
                <label
                  htmlFor="email"
                  className="text-sm text-[#2A2A2A] font-medium font-inter"
                >
                  Email Address
                </label>
                <Input
                //   {...register('email')}
                  placeholder="Enter email address"
                  className="h-12 border-[#E5E6E8] rounded-md placeholder:text-[#BDBDBD] font-normal text-[15px]"
                />
                {/* {errors.email && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.email.message}
                  </div>
                )} */}
              </div>
              <div className=" flex flex-col w-full  gap-2">
                <label
                  htmlFor="firstName"
                  className="text-sm text-[#2A2A2A] font-medium font-inter"
                >
                  First Name
                </label>
                <Input
                //   {...register('first_name')}
                  placeholder="John"
                  className="h-12 border-[#E5E6E8] rounded-md placeholder:text-[#BDBDBD] font-normal text-[15px]"
                />
                {/* {errors.first_name && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.first_name.message}
                  </div>
                )} */}
              </div>
              <div className=" flex flex-col w-full  gap-2">
                <label
                  htmlFor="last_name"
                  className="text-sm text-[#2A2A2A] font-medium font-inter"
                >
                  Last Name
                </label>
                <Input
                //   {...register('last_name')}
                  placeholder="Doe"
                  className="h-12 border-[#E5E6E8] rounded-md placeholder:text-[#BDBDBD] font-normal text-[15px]"
                />
                {/* {errors.last_name && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.last_name.message}
                  </div>
                )} */}
              </div>
           
            </div>
          </div>

          <Button
            type="submit"
            className="bg-[#4534B8] mt-10 border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center "
          >
            {/* {isLoading ? (
              <FaSpinner className="animate-spin" />
            ) : (
              '   Update Profile'
            )} */}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
