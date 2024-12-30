import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { z } from 'zod';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { API } from '@/axios-config';
import { IoMdAdd } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { endpoints } from '@/redux/endpoint';
import { Input } from '@/components/ui/input';
import { FaqRequest } from '@/lib/settingTypes';
import { Button } from '@/components/ui/button';
import { handleError } from '@/lib/errorHandler';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchFaq } from '@/redux/features/settings/faqSlice';
import {
  useFetchFaqQuery,
  usePostFaqMutation,
} from '@/redux/features/apiSlice';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';

const formSchema = z.object({
  question: z.string().min(8, { message: 'Minimum of 8 letter' }),
  answer: z.string().min(8, { message: 'Minimum of 8 letter' }),
});

export const AddFaq = () => {
  const [open, setOpen] = useState(false);
  const [postFaq, { isLoading, isError }] = usePostFaqMutation();

  const { handleSubmit, register, formState, reset } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      question: '',
      answer: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await postFaq(data).unwrap();
      toast.success('Successfully created');
      setOpen(false);
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };
  const { errors, isValid } = formState;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="text-[#2A2A2A] flex gap-2 items-center text-xs ">
        <div className="h-10 px-4 rounded-[48px] text-sm font-semibold flex items-center gap-2.5 bg-[#4534B8] text-white justify-center">
          <IoMdAdd className="size-5" />
          Add Question
        </div>
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-[clamp(200px,50vw,645px)] [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto text-inter">
        <DialogTitle className="h-fit">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold"> Add New FAQ</span>
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
          <div className=" flex flex-col w-full  gap-2 font-poppins">
            <label
              htmlFor="phone number"
              className="text-sm text-[#2A2A2A] font-medium "
            >
              Question
            </label>
            <Input
              {...register('question')}
              placeholder="e.g. How do I register on Duduzili"
              className="h-12 border-[#D9D9DB] rounded-lg placeholder:text-[#ABAEB5] font-normal text-[14px]"
            />
            {errors.question && (
              <div className="text-red-500 text-sm font-normal pt-1">
                {errors.question.message}
              </div>
            )}
          </div>

          <div className=" flex flex-col w-full  gap-1.5 font-poppins">
            <label
              htmlFor="answer"
              className="text-base text-[#2A2A2A] font-medium "
            >
              Answer
            </label>
            <Textarea
              {...register('answer')}
              placeholder="Enter text here..."
              className="resize-none h-[clamp(80px,15vh,114px)] placeholder:text-[#BDBDBD] text-[14px]"
            />
            {errors.answer ? (
              <div className="text-red-500 text-sm font-normal pt-1">
                {errors.answer.message}
              </div>
            ) : (
              <p className="text-[#81848F] text-sm">
                Not more than 200 characters
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="bg-[#4534B8] border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center mt-5 font-inter"
          >
            {isLoading ? <FaSpinner className="animate-spin" /> : 'Add FAQ'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
