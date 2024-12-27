'use client';
import Image from 'next/image';
import { EditContact } from './modals/edit-contact';
import { ContactInfo as ContactDataType } from '@/lib/settingTypes';

export const ContactInfo = ({ data }: { data: ContactDataType }) => {
  return (
    <div className="flex flex-col p-8 gap-8 ">
      <div className="flex justify-between items-center ">
        <span className="text-2xl font-bold">Contact Info</span>
        <EditContact />
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
              {data.email}
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
              {data.phone}
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
              {data.address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
