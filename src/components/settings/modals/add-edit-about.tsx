'use client';

import { z } from 'zod';
import Image from 'next/image';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { IoMdAdd } from 'react-icons/io';
import { FaSpinner } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useFetchAboutQuery,
  usePostAboutMutation,
} from '@/redux/features/settingsApi';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';
import TiptapEditor from '@/components/editor';

const formSchema = z.object({
  text: z.string().min(5, {
    message: 'Enter your about',
  }),
});
export const AddEditAbout = () => {
  const [open, setOpen] = useState(false);
  const { data } = useFetchAboutQuery();
  const [
    postAbout,
    {
      isSuccess: uploadSuccess,
      isLoading: uploadingPost,
      isError,
      error: uploadError,
    },
  ] = usePostAboutMutation();

  const [content, setContent] = useState('');
  const { handleSubmit, register, formState, setValue } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      text: content,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await postAbout(values)
      .unwrap()
      .then(
        () =>
          uploadSuccess &&
          (toast.success('Successfully updated'), setOpen(false))
      )
      .finally(() => isError && errorMessageHandler(uploadError as ErrorType));
  };

  const { errors, isValid } = formState;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="text-[#2A2A2A] flex gap-2 items-center text-xs "
        asChild
      >
        <Button className="h-10 px-4 font-inter rounded-[48px] text-sm font-semibold flex items-center gap-2 bg-[#4534B8] text-white">
          <IoMdAdd className="size-5" />
          About Duduzili
        </Button>
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-fit  [&>button]:hidden !rounded-[20px] max-h-[clamp(300px,75vh,823px)] overflow-auto text-inter">
        <DialogTitle className="h-fit">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold">About Duduzili</span>
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
          <div className=" flex flex-col w-full  gap-1.5">
            <label
              htmlFor="interest title"
              className="text-base font-inter text-[#242428] font-medium "
            >
              About
            </label>
            <TiptapEditor
              className="!h-[clamp(200px,50vh,545px)] w-[clamp(400px,40vw,740px)]"
              content={data?.data.about}
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
            className="bg-[#4534B8] border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center mt-5 "
          >
            {uploadingPost ? <FaSpinner className="animate-spin" /> : 'Save'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
