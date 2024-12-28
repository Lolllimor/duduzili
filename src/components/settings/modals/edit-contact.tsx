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
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { API } from '@/axios-config';
import { IoMdAdd } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { endpoints } from '@/redux/endpoint';
import { handleError } from '@/lib/errorHandler';
import { ContactInfo } from '@/lib/settingTypes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchContact } from '@/redux/features/settings/contactSlice';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const formSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  phone: z.string().min(11, { message: 'Enter a valid phone number' }),
  address: z.string().min(5, {
    message: 'Enter your address',
  }),
});

export const EditContact = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.contact
  );

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ContactInfo) => {
      const response = await API.post(endpoints.setting.contact.create, {
        contact_info: data,
      });
      return response.data;
    },
    mutationKey: ['createContact'],
    onSuccess(data) {
      toast.success(' You just created a new contact');
      dispatch(fetchContact());
    },
    onError(error) {
      handleError(error);
    },
  });

  const { handleSubmit, register, formState, setValue } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      phone: '',
      address: '',
    },
  });

  const { errors, isValid } = formState;

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutate({ email: data.email, phone: data.phone, address: data.address });
  };

  useEffect(() => {
    dispatch(fetchContact());
  }, []);
  useEffect(() => {
    if (data?.contact_info) {
      setValue('address', data?.contact_info.address);
      setValue('email', data?.contact_info.email);
      setValue('phone', String(data?.contact_info.phone));
    }
  }, [data]);

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="text-[#2A2A2A] flex gap-2 items-center cursor-pointer text-xs "
      >
        <div className="h-10 px-4 rounded-[48px] text-sm font-semibold flex items-center gap-2.5 bg-[#4534B8] text-white justify-center">
          <IoMdAdd className="size-5" />
          {data?.contact_info ? 'Edit' : 'Add '} Info
        </div>
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-[clamp(200px,50vw,645px)] [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto">
        <DialogTitle className="h-fit">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold">Contact Info</span>
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
                  className="h-12 border-[#D9D9DB] rounded-lg placeholder:text-[#BDBDBD] font-normal text-[15px]"
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
                  className="h-12 border-[#D9D9DB] rounded-lg placeholder:text-[#BDBDBD] font-normal text-[15px]"
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
                className="resize-none h-[clamp(100px,5vh,110px)] placeholder:text-[#BDBDBD] text-[15px]"
              />
              {errors.address && (
                <div className="text-red-500 text-sm font-normal pt-1">
                  {errors.address.message}
                </div>
              )}
            </div>
          </div>

          <DialogClose aria-label="Submit" className="w-full" asChild>
            <Button
              type="submit"
              className="bg-[#4534B8] mt-10 border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center "
            >
              {isPending ? (
                <FaSpinner className="animate-spin" />
              ) : (
                ' Save Info'
              )}
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};
