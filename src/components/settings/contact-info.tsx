import React from 'react';
import { Button } from '../ui/button';
import { IoMdAdd } from 'react-icons/io';
import Image from 'next/image';

export const ContactInfo = () => {
  return (
    <div className="flex flex-col p-8 gap-8 ">
      <div className="flex justify-between items-center ">
        <span className="text-2xl font-bold">Contact Info</span>
        <Button className="h-10 px-4 rounded-[48px] text-sm font-semibold flex items-center gap-2.5 bg-[#4534B8] text-white">
          <IoMdAdd className="size-5" />
          Edit Info
        </Button>
      </div>
      <div className=" w-full h-fit p-8 rounded-[20px] shadow gap-5 flex flex-col">
        <div className="flex gap-4 items-center">
          <Image
            src="/settings/envelope.svg"
            alt="envelope"
            width={56}
            height={56}
          />
          <div className="flex flex-col justify-between">
            <span className="text-sm text-[#757575]">Email Address</span>
            <span className="text-[#2A2A2A] text-base font-medium">
              support@duduzili.com
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Image
            src="/settings/envelope.svg"
            alt="envelope"
            width={56}
            height={56}
          />
          <div className="flex flex-col justify-between">
            <span className="text-sm text-[#757575]">Phone number</span>
            <span className="text-[#2A2A2A] text-base font-medium">
              +2348106545067
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Image
            src="/settings/location.svg"
            alt="envelope"
            width={56}
            height={56}
          />
          <div className="flex flex-col justify-between">
            <span className="text-sm text-[#757575]">Address</span>
            <span className="text-[#2A2A2A] text-base font-medium">
              2nd Floor, Ajoke Christiana House, Idi-Ape, Iwo road, Ibadan,
              Nigeria
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
