import Image from 'next/image';
import { IoMdAdd } from 'react-icons/io';
import { FaSpinner } from 'react-icons/fa';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MultipleSelector } from '../../settings/privacy/multi-select';

import { z } from 'zod';
import toast from 'react-hot-toast';
import {
  useAddAdminMutation,
  useAddAdminToGroupMutation,
  useFetchPermissionGroupQuery,
} from '@/redux/features/managementApi';
import { decrypt } from '@/lib/decrypt';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';

const formSchema = z.object({
  first_name: z.string().trim().min(1, 'First name is required'),
  last_name: z.string().trim().min(1, 'Last name is required'),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Must be a string',
    })
    .email({ message: 'Must be a valid email address' }),
});

export const AddAdmin = ({ id , name}: { id: string, name: string }) => {
  const [open, setOpen] = useState(false);
  const [postAddAdmin, { isLoading }] = useAddAdminMutation();

  const { handleSubmit, register, formState, reset } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await postAddAdmin({
        ...data,
        permission_group: [id],
      }).unwrap();
      toast.success('Successfully created');
      setOpen(false);
      reset()
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };

  const { errors, isValid } = formState;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-9 gap-2 flex items-center text-base rounded-[32px] bg-[#4534B8] font-inter">
          <IoMdAdd className="size-5" />
          Add Admin
        </Button>
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-[clamp(200px,50vw,645px)] shrink [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto">
        <DialogTitle className="h-fit">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold"> {name}</span>
            <DialogClose
              aria-label="Close"
              onClick={() => {
                reset();
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
        <form
          onSubmit={handleSubmit(onSubmit)}
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
                  {...register('email')}
                  placeholder="Enter email address"
                  className="h-12 border-[#E5E6E8] rounded-md placeholder:text-[#BDBDBD] font-normal text-[15px]"
                />
                {errors.email && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div className=" flex flex-col w-full  gap-2">
                <label
                  htmlFor="firstName"
                  className="text-sm text-[#2A2A2A] font-medium font-inter"
                >
                  First Name
                </label>
                <Input
                  {...register('first_name')}
                  placeholder="John"
                  className="h-12 border-[#E5E6E8] rounded-md placeholder:text-[#BDBDBD] font-normal text-[15px]"
                />
                {errors.first_name && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.first_name.message}
                  </div>
                )}
              </div>
              <div className=" flex flex-col w-full  gap-2">
                <label
                  htmlFor="last_name"
                  className="text-sm text-[#2A2A2A] font-medium font-inter"
                >
                  Last Name
                </label>
                <Input
                  {...register('last_name')}
                  placeholder="Doe"
                  className="h-12 border-[#E5E6E8] rounded-md placeholder:text-[#BDBDBD] font-normal text-[15px]"
                />
                {errors.last_name && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.last_name.message}
                  </div>
                )}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="bg-[#4534B8] mt-10 border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center "
          >
            {isLoading ? (
              <FaSpinner className="animate-spin" />
            ) : (
              '   Save Admin Access'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
