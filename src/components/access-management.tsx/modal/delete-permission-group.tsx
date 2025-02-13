import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

import { IoClose } from 'react-icons/io5';

import Image from 'next/image';
import { useDeletePermissionGroupMutation } from '@/redux/features/managementApi';
import toast from 'react-hot-toast';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';
import { useState } from 'react';

export const DeletePermissionGroup = ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  const [open, setOpen] = useState(false);
  const [deletePermissionGroup] = useDeletePermissionGroupMutation();
  const handleClick = async () => {
    try {
      const res = await deletePermissionGroup({ group_id: id }).unwrap();
      toast.success('Successfully deleted');
      setOpen(false);
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="text-[#BA1A1A] focus:text-[#BA1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        Delete Group
      </DialogTrigger>
      <DialogContent className=" py-5 gap-0  w-[450px] [&>button]:hidden rounded-[16px] max-h-[376px] h-full  !px-0 flex flex-col">
        <DialogTitle />
        <DialogDescription />
        <div className="flex justify-end w-full px-8 z-10 ">
          <DialogClose aria-label="Close" className=" cursor-pointer">
            <IoClose className="size-6 text-[#667085] cursor-pointer" />
          </DialogClose>
        </div>
        <div className="px-8 flex flex-col items-start gap-5 mt-[-20px] mb-9">
          <Image src="/delete.svg" alt="delete-icon" height={60} width={60} />
          <div className="flex flex-col gap-4">
            <span className=" text-[22px] font-semibold text-[#242428]">
              Delete Permission Group
            </span>
            <p className="text-base text-[#5E606A] ">
              You are about to delete {name} permission group. All admins will
              lose access to this group. This is irreversible.
            </p>
          </div>
        </div>
        <div className="w-full border-none h-[1px] bg-[#EAECF0]"></div>
        <div className="flex justify-between font-medium pt-7 px-8 w-full h-fit">
          <DialogClose asChild>
            <Button className="bg-[#F4F4F4] hover:bg-[#F4F4F4] border-none rounded-[32px] h-[51px] w-[177px] text-[#2A2A2A] flex justify-center items-center ">
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={() => handleClick()}
            className="bg-[#D40000] hover:bg-[#D40000] border-none rounded-[32px] h-[51px]  w-[177px] text-white flex justify-center items-center"
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
