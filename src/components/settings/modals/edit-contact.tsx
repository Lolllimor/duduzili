import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Textarea } from '@/components/ui/textarea';

import { z } from 'zod';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdAdd } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { ContactInfo } from '@/lib/settingTypes';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useFetchContactQuery,
  usePostContactMutation,
} from '@/redux/features/settingsApi';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';
import { encrypt } from '@/lib/encrypt';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  phone: z.string().regex(phoneRegex, 'Invalid Number!'),
  address: z.string().min(5, {
    message: 'Enter your address',
  }),
});

export const EditContact = () => {
  const [open, setOpen] = useState(false);
  const { data } = useFetchContactQuery();
  const [postContact, { isLoading: uploadingPost }] = usePostContactMutation();

  const { handleSubmit, register, formState, setValue } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      email: data ? data.data.contact_info[0].email : '',
      phone: data ? `+${data.data.contact_info[0].phone.toString()} ` : '',
      address: data ? data.data.contact_info[0].address : '',
    },
  });

  const { errors, isValid } = formState;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await postContact({ contact_info: [data] }).unwrap();

      toast.success('Successfully updated');
      setOpen(false);
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        asChild
        className="text-[#2A2A2A] flex gap-2 items-center cursor-pointer text-xs "
      >
        <Button className="h-10 px-4 rounded-[48px] text-sm font-semibold flex items-center gap-2 bg-[#4534B8] text-white justify-center font-inter">
          <IoMdAdd className="size-5" />
          {data?.data.contact_info ? 'Edit' : 'Add '} Info
        </Button>
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-[clamp(200px,50vw,645px)] [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto">
        <DialogTitle className="h-fit">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold font-inter">Contact Info</span>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 ">
              <div className=" flex flex-col w-full  gap-2">
                <label
                  htmlFor="email"
                  className="text-base text-[#2A2A2A] font-medium font-inter"
                >
                  Email
                </label>
                <Input
                  {...register('email')}
                  placeholder="Enter email address"
                  className="h-12 border-[#D9D9DB] rounded-lg placeholder:text-[#BDBDBD] placeholder:font-inter font-normal text-[15px]"
                />
                {errors.email && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div className=" flex flex-col w-full  gap-2">
                <label
                  htmlFor="phone number"
                  className="text-base text-[#2A2A2A] font-medium font-inter"
                >
                  Phone number
                </label>
                <Input
                  {...register('phone')}
                  placeholder="Enter phone number"
                  className="h-12 border-[#D9D9DB] rounded-lg placeholder:text-[#BDBDBD] placeholder:font-inter  font-normal text-[15px]"
                />
                {errors.phone && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.phone.message}
                  </div>
                )}
              </div>
            </div>
            <div className=" flex flex-col w-full  gap-1.5">
              <label
                htmlFor="address"
                className="text-base text-[#2A2A2A] font-medium font-inter"
              >
                Address
              </label>
              <Textarea
                {...register('address')}
                placeholder="Start typing..."
                className="resize-none h-[clamp(100px,5vh,110px)] placeholder:text-[#BDBDBD] text-[15px] placeholder:font-inter*"
              />
              {errors.address && (
                <div className="text-red-500 text-sm font-normal pt-1">
                  {errors.address.message}
                </div>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="bg-[#4534B8] mt-10 border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center "
          >
            {uploadingPost ? (
              <FaSpinner className="animate-spin" />
            ) : (
              ' Save Info'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
