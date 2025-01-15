import React from 'react';

import Image from 'next/image';
import toast from 'react-hot-toast';
import { AddFaq } from '../modals/add-faq';
import {
  useDeleteFaqMutation,
  useFetchFaqQuery,
} from '@/redux/features/settingsApi';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';
import { DeleteFaq } from '@/components/delete-faq';

interface FaqItem {
  faq_id: string;
  question: string;
  answer: string;
}

export const FaqFilled = () => {
  const { data } = useFetchFaqQuery();
  const [deleteFaq, { isSuccess, isLoading, isError, error }] =
    useDeleteFaqMutation();

  const handleClick = async (value: string) => {
    try {
      const res = await deleteFaq({ faq_id: value }).unwrap();
      toast.success('Successfully deleted');
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };

  return (
    <div className="flex flex-col p-8 gap-10 overflow-auto h-full font-inter">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">Frequently Asked Questions</span>

        <AddFaq />
      </div>
      <div className="w-full h-full  gap-5 flex flex-col overflow-auto">
        {data.data.results.map((item: FaqItem, index: number) => (
          <div key={index} className="flex flex-col ">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-2  w-[90%]">
                <span className="text-lg font-medium text-[#101828]">
                  {item.question}
                </span>
                <span className="text-[#667085] text-base font-normal">
                  {item.answer}
                </span>
              </div>
              <DeleteFaq id={ item.faq_id} />
            </div>
            {index !== data.count - 1 && (
              <div className="h-[1px] w-full bg-[#EAECF0] my-8"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
