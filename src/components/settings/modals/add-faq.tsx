'use client';
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
import { IoMdAdd } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useEditFaqMutation,
  useFetchFaqQuery,
  usePostFaqMutation,
} from '@/redux/features/settingsApi';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';
import EditBlackIcon from '@/components/icons/edit-black-icon';

interface FaqItem {
  faq_id: string;
  question: string;
  answer: string;
}

const formSchema = z.object({
  question: z.string().nonempty('A question is required'),
  answer: z.string().nonempty('An answer is required'),
});

export const AddFaq = ({ faq_id }: { faq_id?: string }) => {
  const [open, setOpen] = useState(false);
  const [editFaq, { isLoading }] = useEditFaqMutation();

  const { data } = useFetchFaqQuery();
  const editData = data?.data.results.find(
    (item: FaqItem) => item.faq_id === faq_id
  );

  const { handleSubmit, register, formState, reset } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      question: editData?.question || '',
      answer: editData?.answer || '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await editFaq({ ...data, faq_id: faq_id }).unwrap();
      toast.success(`Successfully ${faq_id ? 'updated' : 'added'} FAQ`);
      setOpen(false);
      reset();
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };
  const { errors, isValid } = formState;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="text-[#2A2A2A] flex gap-2 items-center text-xs "
        asChild
      >
        {faq_id ? (
          <EditBlackIcon className="cursor-pointer" />
        ) : (
          <Button className="h-10 px-4 rounded-[48px] text-sm font-semibold flex items-center gap-2 font-inter bg-[#4534B8] text-white justify-center ">
            <IoMdAdd className="size-5" />
            Add FAQ
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-[clamp(200px,50vw,645px)] [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto text-inter">
        <DialogTitle className="h-fit">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold font-inter">
              {faq_id ? 'Edit' : 'Add New'} FAQ
            </span>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className=" flex flex-col w-full  gap-2 font-poppins">
              <label
                htmlFor="phone number"
                className="text-sm text-[#2A2A2A] font-medium font-inter"
              >
                Question
              </label>
              <Input
                {...register('question')}
                placeholder="e.g. How do I register on Duduzili"
                className="h-12 border-[#D9D9DB] rounded-lg placeholder:text-[#ABAEB5] font-normal text-[14px] placeholder:font-inter"
              />
              {errors.question && (
                <div className="text-red-500 text-sm font-normal pt-1">
                  {errors.question.message}
                </div>
              )}
            </div>

            <div className=" flex flex-col w-full  gap-1.5 font-inter">
              <label
                htmlFor="answer"
                className="text-sm text-[#2A2A2A] font-medium font-inter"
              >
                Answer
              </label>
              <Textarea
                {...register('answer')}
                placeholder="Enter text here..."
                className="resize-none h-[clamp(80px,15vh,114px)] placeholder:text-[#BDBDBD] text-[14px] placeholder:font-inter"
              />
              {errors.answer ? (
                <div className="text-red-500 text-sm font-normal pt-1">
                  {errors.answer.message}
                </div>
              ) : (
                <p className="text-[#81848F] text-sm font-inter">
                  Not more than 200 characters
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="bg-[#4534B8] border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center mt-5 font-inter"
          >
            {isLoading ? (
              <FaSpinner className="animate-spin" />
            ) : faq_id ? (
              'Update FAQ'
            ) : (
              'Add FAQ'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
