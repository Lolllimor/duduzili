'use client';

import DOMPurify from 'dompurify';
import { Skeleton } from '@/components/ui/skeleton';
import { AddEditAbout } from '../modals/add-edit-about';
import { useFetchAboutQuery } from '@/redux/features/settingsApi';

export const AboutFilled = () => {
  const { data, isLoading } = useFetchAboutQuery();
  const formatText = (text?: string) =>
    text
      ?.split(/\n\n/)
      .map(
        (paragraph) =>
          `<p>${paragraph
            .replace(/\n/g, '<br/>')
            .replace(/<p><\/p>/g, '<br/>')}</p>`
      )
      .join(' <br/>') || '<p>No content available.</p>';
  const formattedText = formatText(data?.data.about);
  const sanitizedText = DOMPurify.sanitize(formattedText);
  return (
    <div className="flex flex-col p-8 gap-10 h-full">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">About Duduzili</span>

        <AddEditAbout />
      </div>
      {isLoading ? (
        <div className="flex flex-col overflow-auto h-full text-xl">
          <Skeleton className="h-2 w-10" />
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-full" />
        </div>
      ) : (
        <div
          className="flex flex-col overflow-auto h-full text-xl font-inter"
          dangerouslySetInnerHTML={{
            __html: sanitizedText,
          }}
        ></div>
      )}
    </div>
  );
};
