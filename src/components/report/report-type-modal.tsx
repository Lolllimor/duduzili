import React from 'react';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { IoMdAdd } from 'react-icons/io';

export const CreateReportTypeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-9 gap-2 flex items-center text-base rounded-[32px] bg-[#367EE8] font-inter">
          <IoMdAdd className="size-5" />
          Create Report Type
        </Button>
      </DialogTrigger>
    </Dialog>
  );
};
