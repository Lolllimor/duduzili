import React from 'react';

import Image from 'next/image';
import toast from 'react-hot-toast';
import { API } from '@/axios-config';
import { useDispatch } from 'react-redux';
import { AddFaq } from '../modals/add-faq';
import { AppDispatch } from '@/redux/store';
import { FaqData } from '@/lib/settingTypes';
import { endpoints } from '@/redux/endpoint';
import { handleError } from '@/lib/errorHandler';
import { useMutation } from '@tanstack/react-query';
import { fetchFaq } from '@/redux/features/settings/faqSlice';

export const FaqFilled = ({ data }: { data: FaqData }) => {
  const dispatch: AppDispatch = useDispatch();
  const { mutate, isPending } = useMutation({
    mutationFn: async ({ faq_id }: { faq_id: string }) => {
      const response = await API.delete(endpoints.setting.faq.delete, {
        data: { faq_id },
      });
      return response.data;
    },
    onSuccess(data) {
      toast.success(' FAQ deleted successfully');
      dispatch(fetchFaq());
    },
    onError(error) {
      handleError(error);
    },
  });

  return (
    <div className="flex flex-col p-8 gap-10 overflow-auto h-full font-inter">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">Frequently Asked Questions</span>

        <AddFaq />
      </div>
      <div className="w-full h-full  gap-5 flex flex-col overflow-auto">
        {data.results.map((item, index) => (
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
              <Image
                onClick={() => mutate({ faq_id: item.faq_id })}
                src="/settings/bin.svg"
                alt="trash"
                width={24}
                height={24}
                className='cursor-pointer'
              />
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
