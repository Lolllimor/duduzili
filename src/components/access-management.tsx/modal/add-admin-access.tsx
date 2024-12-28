import Image from 'next/image';
import { IoMdAdd } from 'react-icons/io';
import { FaSpinner } from 'react-icons/fa';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { IoClose } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import { MultipleSelector } from '../../settings/privacy/multi-select';
import { Input } from '@/components/ui/input';

export const AddAdminAccess = () => {
  const group = [
    { label: 'Customer support', value: 'support' },
    { label: 'Compliance team', value: 'compliance' },
    { label: 'Developers', value: 'developers' },
    { label: 'Finance members', value: 'finance' },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-9 gap-2 flex items-center text-base rounded-[32px] bg-[#367EE8] font-inter">
          <IoMdAdd className="size-5" />
          Add Admin Access
        </Button>
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
        <form className="font-poppins flex flex-col overflow-auto">
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
                  htmlFor="email"
                  className="text-sm text-[#2A2A2A] font-medium font-inter"
                >
                  First Name
                </label>
                <Input
                  //   {...register('email')}
                  placeholder="John"
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
                  htmlFor="email"
                  className="text-sm text-[#2A2A2A] font-medium font-inter"
                >
                  Last Name
                </label>
                <Input
                  //   {...register('email')}
                  placeholder="Doe"
                  className="h-12 border-[#E5E6E8] rounded-md placeholder:text-[#BDBDBD] font-normal text-[15px]"
                />
                {/* {errors.email && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.email.message}
                  </div>
                )} */}
              </div>
              <div className="flex flex-col gap-4">
                <div className=" flex flex-col w-full  gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm text-[#2A2A2A] font-medium font-inter"
                  >
                    Permission Group
                  </label>
                  {/* <MultipleSelector framework={group} /> */}
                  <Select>
                    <SelectTrigger className="w-full h-12 border-[#E5E6E8] rounded-md font-normal text-[15px] data-[placeholder]:text-[#BDBDBD]">
                      <SelectValue placeholder="Select group" />
                    </SelectTrigger>
                    <SelectContent>
                      {group.map((item) => (
                        <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* {errors.email && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.email.message}
                  </div>
                )} */}
                </div>
                <div className=" flex gap-2.5 items-center flex-wrap">
                  {group.map((item) => (
                    <div
                      key={item.value}
                      className=" flex border border-[#D0D5DD] h-11 rounded-lg px-4 gap-2 w-fit items-center cursor-pointer"
                    >
                      {item.label}
                      <IoClose className="size-5 " />
                    </div>
                  ))}
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
              Save Admin Access
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};
