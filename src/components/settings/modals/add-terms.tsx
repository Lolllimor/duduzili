'use client';
import { z } from 'zod';
import Image from 'next/image';
import { IoMdAdd } from 'react-icons/io';
import { FaSpinner } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
import {
  useFetchPrivacyQuery,
  useFetchTermsQuery,
  usePostPrivacyMutation,
  usePostTermsMutation,
} from '@/redux/features/settingsApi';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';
import TiptapEditor from '@/components/editor';

const formSchema = z.object({
  text: z.string().min(5, {
    message: 'Enter your terms',
  }),
});

export const AddEditTerms = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useFetchTermsQuery();
  const [postTerms, { isLoading: uploadingPost }] = usePostTermsMutation();

  const [content, setContent] = useState('');
  const { handleSubmit, register, formState, setValue } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      text: data?.data.terms_and_conditions ? data.data.terms_and_conditions : '',
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await postTerms(values).unwrap();
      toast.success('Successfully updated');
      setOpen(false);
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };

  const { errors, isValid } = formState;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        asChild
        className="text-[#2A2A2A] flex gap-2 items-center text-xs "
      >
        <Button className="h-10 px-4 font-inter rounded-[48px] text-sm font-semibold flex items-center gap-2 bg-[#4534B8] text-white">
          <IoMdAdd className="size-5" />
          Terms and Conditions
        </Button>
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-fit [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto">
        <DialogTitle className="h-fit">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold">Terms and Conditions</span>
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
        <DialogDescription></DialogDescription>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full gap-1.5">
            <label
              htmlFor="interest title"
              className="text-base font-inter text-[#242428] font-medium"
            >
              Terms and Conditions
            </label>
            <TiptapEditor
              className="!h-[clamp(200px,50vh,545px)] w-[clamp(400px,40vw,740px)]"
              content={data?.data.terms_and_conditions}
              onChange={(val) => {
                setValue('text', val);
                setContent(val);
              }}
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
            {uploadingPost ? <FaSpinner className="animate-spin" /> : 'Save'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
