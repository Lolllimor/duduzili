'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { z } from 'zod';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IoAdd, IoClose } from 'react-icons/io5';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { MultipleSelector } from '@/components/settings/privacy/multi-select';
import {
  useFetchPermissionGroupListQuery,
  useFetchPermissionGroupQuery,
  useFetchPermissionQuery,
  usePostPermissionGroupMutation,
  useUpdatePermissionGroupMutation,
} from '@/redux/features/managementApi';
import { IoMdAdd } from 'react-icons/io';
import { FaSpinner } from 'react-icons/fa';
import { decrypt } from '@/lib/decrypt';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';

interface PermissionGroup {
  group_id: string;
  name: string;
  description: string;
  readable_permission: string[];
}

interface PermissionGroupData {
  data: {
    results: PermissionGroup[];
  };
}

const formSchema = z.object({
  name: z.string().nonempty('Name is required'),
  description: z.string().nonempty('Description is required'),
});
export const EditPermissionGroup = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const { data } = useFetchPermissionQuery();
  const { data: PermissionGroupData } = useFetchPermissionGroupQuery({});
  const [updatePermissionGroup, { isLoading }] =
    useUpdatePermissionGroupMutation();
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const filteredGroup: PermissionGroup | undefined =
    PermissionGroupData?.data?.results.find(
      (item: PermissionGroup) => item.group_id === id
    );

  const { handleSubmit, register, formState, reset, setValue } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
      permission_type: [''],
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await updatePermissionGroup({
        ...data,
        permission_type: selectedGroups,
        group_id: id,
      }).unwrap();

      toast.success('Successfully updated');
      setOpen(false);
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };

  const handleSelectionChange = (selectedValues: string[]) => {
    setSelectedGroups(selectedValues);
  };

  const handleRemoveGroup = (group: string) => {
    setSelectedGroups((prevGroups) =>
      prevGroups.filter((item) => item !== group)
    );
  };

  const { errors, isValid } = formState;

  useEffect(() => {
    if (filteredGroup) {
      setValue('name', filteredGroup?.name);
      setValue('description', filteredGroup?.description);
      setSelectedGroups(filteredGroup?.readable_permission);
    }
  }, [id, filteredGroup]);
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open);
        reset();
        setSelectedGroups([]);
      }}
    >
      <DialogTrigger asChild>
        <Button className="h-9 gap-2 flex items-center text-base rounded-[32px] bg-[#367EE8]">
          <IoMdAdd className="size-5" />
          Edit Permission Group
        </Button>
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-[clamp(200px,50vw,645px)] shrink [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto">
        <DialogTitle className="h-fit">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold">
              {id ? 'Edit' : 'Create New'} Permission Group
            </span>
            <DialogClose
              aria-label="Close"
              onClick={() => {
                reset();
                setSelectedGroups([]);
              }}
            >
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
        <DialogDescription />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="font-poppins flex flex-col overflow-auto"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 ">
              <div className=" flex flex-col w-full  gap-2">
                <label
                  htmlFor="email"
                  className="text-sm text-[#242428] font-medium font-poppins"
                >
                  Group Name
                </label>
                <Input
                  {...register('name')}
                  placeholder="e.g. Customer support"
                  className="h-12 border-[#E5E6E8] rounded-md placeholder:text-[#BDBDBD] font-normal text-base font-outfit"
                />
                {errors.name && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.name.message}
                  </div>
                )}
              </div>
              <div className=" flex flex-col w-full  gap-1.5 font-poppins">
                <label
                  htmlFor="answer"
                  className="text-sm text-[#242428] font-medium font-poppins"
                >
                  Group Description
                </label>
                <Textarea
                  {...register('description')}
                  placeholder="Enter text here..."
                  className="resize-none h-[clamp(80px,15vh,114px)] placeholder:text-[#BDBDBD] text-base font-outfit"
                />
                <p className="text-[#81848F] text-sm">
                  Not more than 200 characters
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className=" flex flex-col w-full  gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm text-[#242428] font-medium font-poppins"
                  >
                    Permission Group
                  </label>
                  <MultipleSelector
                    placeholder="Select permission"
                    data={data?.data}
                    selectedGroups={selectedGroups}
                    onSelectionChange={handleSelectionChange}
                  />

                  {errors.permission_type && (
                    <div className="text-red-500 text-sm font-normal pt-1">
                      {errors.permission_type.message}
                    </div>
                  )}
                </div>
                <div className=" flex gap-2.5 items-center flex-wrap">
                  {selectedGroups.map((item) => (
                    <div
                      key={item}
                      className=" flex border border-[#D0D5DD] h-11 rounded-lg px-4 gap-2 w-fit items-center cursor-pointer"
                    >
                      {item}
                      <IoClose
                        className="size-5 "
                        onClick={() => handleRemoveGroup(item)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Button
            disabled={isLoading}
            type="submit"
            className="bg-[#4534B8] mt-10 border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center "
          >
            {isLoading ? (
              <FaSpinner className="animate-spin" />
            ) : (
              `Update Permission Group`
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
