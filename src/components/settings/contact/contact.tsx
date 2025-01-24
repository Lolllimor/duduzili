'use client';
import Image from 'next/image';
import { IoMdAdd } from 'react-icons/io';
import { EmptyState } from '../empty-state';
import { ContactInfo } from '../contact-info';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { EditContact } from '../modals/edit-contact';
import { useFetchContactQuery } from '@/redux/features/settingsApi';
import EmptyStateIcon2 from '@/components/icons/empty-state-2';

export const Contact = () => {
  const { data, isLoading } = useFetchContactQuery();

  return (
    <div className="h-full">
      {isLoading ? (
        <div className="flex flex-col p-8 gap-8 ">
          <div className="flex justify-between items-center ">
            <span className="text-2xl font-bold font-inter">Contact Info</span>
            <Button
              disabled
              className="h-10 px-4 rounded-[48px] text-sm font-semibold flex items-center gap-2 bg-[#4534B8] text-white justify-center font-inter"
            >
              <IoMdAdd className="size-5" />
              Add Info
            </Button>
          </div>
          <div className=" w-full h-fit p-8 rounded-[20px] shadow gap-5 flex flex-col ">
            <div className="flex gap-4 items-center max-w-[594px]">
              <Image
                src="/settings/envelope.svg"
                alt="envelope"
                width={56}
                height={56}
              />
              <div className="flex flex-col justify-between w-full">
                <span className="text-sm text-[#757575]">Email Address</span>
                <Skeleton className="h-3 w-full" />
              </div>
            </div>
            <div className="flex gap-4 items-center max-w-[594px]">
              <Image
                src="/settings/phone.svg"
                alt="envelope"
                width={56}
                height={56}
              />
              <div className="flex flex-col justify-between w-full">
                <span className="text-sm text-[#757575]">Phone Number</span>

                <Skeleton className="h-3 w-full" />
              </div>
            </div>
            <div className="flex gap-4 items-center max-w-[594px]">
              <Image
                src="/settings/location.svg"
                alt="envelope"
                width={56}
                height={56}
              />
              <div className="flex flex-col justify-between w-full">
                <span className="text-sm text-[#757575]">Address</span>

                <Skeleton className="h-3 w-full" />
              </div>
            </div>
          </div>
        </div>
      ) : data.data ? (
        <ContactInfo />
      ) : (
        <EmptyState
          icon={<EmptyStateIcon2 />}
          btn={<EditContact />}
          title="Contact Info "
          paragraph=" Add contact information like email address and phone number that will appear on the Duduzili website"
        />
      )}
    </div>
  );
};
