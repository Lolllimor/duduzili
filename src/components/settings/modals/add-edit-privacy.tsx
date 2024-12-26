'use client';
import { z } from 'zod';
import Image from 'next/image';
import { IoMdAdd } from 'react-icons/io';
import { FaSpinner } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';


import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import toast from 'react-hot-toast';
import { API } from '@/axios-config';
import { useForm } from 'react-hook-form';
import { endpoints } from '@/redux/endpoint';
import { handleError } from '@/lib/errorHandler';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrivacy } from '@/redux/features/settings/privacySlice';

const formSchema = z.object({
  text: z.string().min(5, {
    message: 'Enter your privacy',
  }),
});
export const AddEditPrivacy = () => {
  const [open, setOpen] = useState(false);

  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.privacy
  );


  const { mutate, isPending, isSuccess } = useMutation<
    void,
    unknown,
    { text: string }
  >({
    mutationFn: async (data: { text: string }) => {
      const response = await API.post(endpoints.setting.privacy.create, data);
      return response.data;
    },
    mutationKey: ['createPrivacy'],
    onSuccess(data) {
      toast.success(' You just created a new about');
      setOpen(false);
      dispatch(fetchPrivacy());
    },
    onError(error) {
      handleError(error);
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    mutate({ text: values.text });
  };

  const { handleSubmit, register, formState, setValue } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      text: data?.about ? data.about : '',
    },
  });


  const { errors, isValid } = formState;

  useEffect(() => {
    dispatch(fetchPrivacy());
  }, []);

  // useEffect(() => {
  //   if (data) setValue('text', data.about);
  // }, [data]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        asChild
        className="text-[#2A2A2A] flex gap-2 items-center text-xs "
      >
        <Button className="h-10 w-[160px] rounded-[48px] text-sm font-semibold flex items-center gap-2.5 bg-[#4534B8] text-white">
          <IoMdAdd className="size-5" />
          Privacy Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-fit [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto">
        <DialogTitle className="h-fit">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold">Privacy Policy</span>
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
          <div className="flex flex-col w-full gap-1.5">
            <label
              htmlFor="interest title"
              className="text-base font-inter text-[#242428] font-medium"
            >
              Policy
            </label>
            <Textarea
              {...register('text')}
              placeholder="Start typing..."
              className="text-base resize-none !h-[clamp(200px,50vh,545px)] border flex overflow-auto border-[#E5E6E8] w-[clamp(400px,40vw,740px)]"
            />
            {errors.text && (
              <div className="text-red-500 text-sm font-normal pt-1">
                {errors.text.message}
              </div>
            )}
          </div>
          <Button
            type="submit"
            className="bg-[#4534B8] border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center mt-5"
          >
            {isPending ? <FaSpinner className="animate-spin" /> : 'Save'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
