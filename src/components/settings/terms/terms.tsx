'use client';

import DOMPurify from 'dompurify';
import { EmptyState } from '../empty-state';

import { AddEditPrivacy } from '../modals/add-edit-privacy';
import { useFetchPrivacyQuery } from '@/redux/features/settingsApi';
import { Skeleton } from '@/components/ui/skeleton';
import { IoMdAdd } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { TermsFilled } from './terms-filled';

export const Terms = () => {
  const { data, isLoading } = useFetchPrivacyQuery();

  const formattedText =
    data?.data.about
      ?.split('\n\n')
      .map(
        (paragraph: string) =>
          `<p>${paragraph
            .replace(/\n/g, '<br/>')
            .replace(/<p><\/p>/g, '<br/>')}</p>`
      )
      .join(' <br/>') || '';
  const sanitizedText = DOMPurify.sanitize(formattedText);
  return (
    <div className="h-full">
      <EmptyState
        // btn={<AddEditPrivacy />}
        title="Terms and Conditions "
        paragraph=" Write a descriptive content about the terms and conditions of the platform for users to abide with"
      />
      {/* {isLoading ? (
        <div className="flex flex-col p-8 gap-10 h-full">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold font-inter">
              Privacy Policy
            </span>

            <Button
              disabled
              className="h-10 px-4 font-inter rounded-[48px] text-sm font-semibold flex items-center gap-2 bg-[#4534B8] text-white"
            >
              <IoMdAdd className="size-5" />
              Privacy Policy
            </Button>
          </div>
          <div className="flex flex-col overflow-auto gap-3 h-full text-xl">
            {Array(25)
              .fill(0)
              .map((item, idx) => (
                <Skeleton key={idx} className="h-3 w-full" />
              ))}
          </div>
        </div>
      ) : data && data.data.about !== '' ? (
        <TermsFilled />
      ) : (
        <EmptyState
          // btn={<AddEditPrivacy />}
          title="Terms and Conditions "
          paragraph=" Write a descriptive content about the terms and conditions of the platform for users to abide with"
        />
      )} */}
    </div>
  );
};
