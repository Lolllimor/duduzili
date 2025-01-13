'use client';

import DOMPurify from 'dompurify';
import { EmptyState } from '../empty-state';
import { PrivacyFilled } from './privacy-filled';

import { AddEditPrivacy } from '../modals/add-edit-privacy';
import { useFetchPrivacyQuery } from '@/redux/features/settingsApi';
import { Skeleton } from '@/components/ui/skeleton';
import { IoMdAdd } from 'react-icons/io';
import { Button } from '@/components/ui/button';

export const Privacy = () => {
  const { data, isLoading } = useFetchPrivacyQuery();

  const formattedText =
    data?.data.about
      ?.split('\n\n')
      .map(
        (paragraph: string) =>
          `<p>${paragraph.replace(/\n/g, '<br/><br/>')}</p>`
      )
      .join(' <br/>') || '';
  const sanitizedText = DOMPurify.sanitize(formattedText);
  return (
    <div className="h-full">
      {isLoading ? (
        <div className="flex flex-col p-8 gap-10 h-full">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">Privacy Policy</span>

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
        <PrivacyFilled />
      ) : (
        <EmptyState
          btn={<AddEditPrivacy />}
          title="Privacy Policy "
          paragraph=" Write a descriptive content about the privacy policy of the platform for users to abide with"
        />
      )}
    </div>
  );
};
