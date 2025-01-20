'use client';
import Image from 'next/image';
import { EditContact } from './modals/edit-contact';
import { ContactInfo as ContactDataType } from '@/lib/settingTypes';
import { useFetchContactQuery } from '@/redux/features/settingsApi';
import ContactPhone from '../icons/contact-phone';
import ContactEnvelope from '../icons/contact-envelope';
import ContactLocation from '../icons/contact-location';

export const ContactInfo = () => {
  const { data} = useFetchContactQuery();

  return (
    <div className="flex flex-col p-8 gap-8 ">
      <div className="flex justify-between items-center ">
        <span className="text-2xl font-bold">Contact Info</span>
        <EditContact />
      </div>
      {data.data.contact_info.map((item: ContactDataType) => (
        <div
          key={item.phone}
          className=" w-full h-fit p-8 rounded-[20px] shadow gap-5 flex flex-col"
        >
          <div className="flex gap-4 items-center">
            <ContactEnvelope />
            <div className="flex flex-col justify-between">
              <span className="text-sm text-[#757575] font-inter">
                Email Address
              </span>
              <span className="text-[#2A2A2A] text-base font-medium font-inter">
                {item.email}
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <ContactPhone />
            <div className="flex flex-col justify-between">
              <span className="text-sm text-[#757575] font-inter">
                Phone Number
              </span>
              <span className="text-[#2A2A2A] text-base font-medium font-inter">
                +{item.phone}
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <ContactLocation />
            <div className="flex flex-col justify-between">
              <span className="text-sm text-[#757575] font-inter">Address</span>
              <span className="text-[#2A2A2A] text-base font-medium font-inter">
                {item.address}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
