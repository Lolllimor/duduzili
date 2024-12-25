import React from 'react';
import { Button } from '../ui/button';
import { IoMdAdd } from 'react-icons/io';
import Image from 'next/image';

export const Faq = () => {
  const seedData = [
    {
      question: 'Is there a free trial available?',
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: 'Can I change my plan later?',
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: 'Can other info be added to an invoice?',
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: 'How does billing work?',
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: 'How do I change my account email?',
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  return (
    <div className="flex flex-col p-8 gap-10 overflow-auto h-full font-inter">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">Frequently Asked Questions</span>

        <Button className="h-10 w-[160px] rounded-[48px] text-sm font-semibold flex items-center gap-2.5 bg-[#4534B8] text-white">
          <IoMdAdd className="size-5" />
          Add Question
        </Button>
      </div>
      <div className="w-full h-full  gap-5 flex flex-col overflow-auto">
        {seedData.map((data, index) => (
          <div key={index} className="flex flex-col ">
            <div className="flex gap-6 items-start">
              <div className="flex flex-col gap-2 ">
                <span className="text-lg font-medium text-[#101828]">
                  {data.question}
                </span>
                <span className="text-[#667085] text-base font-normal">
                  {data.answer}
                </span>
              </div>
              <Image
                src="/settings/bin.svg"
                alt="trash"
                width={24}
                height={24}
              />
            </div>
            {index !== seedData.length - 1 && (
              <div className="h-[1px] w-full bg-[#EAECF0] my-8"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
