'use client';

import DOMPurify from 'dompurify';
import { AddEditAbout } from '../modals/add-edit-about';
import { useFetchAboutQuery } from '@/redux/features/settingsApi';

export const AboutFilled = () => {
  const { data } = useFetchAboutQuery();

  const formattedText =
    data?.data.about
      .split('\n\n')
      .map(
        (paragraph: string) =>
          `<p>${paragraph.replace(/\n/g, '<br/><br/>')}</p>`
      )
      .join(' <br/>') || '';
  const sanitizedText = DOMPurify.sanitize(formattedText);
  return (
    <div className="flex flex-col p-8 gap-10 h-full">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">About Duduzili</span>

        <AddEditAbout />
      </div>
      <div
        className="flex flex-col overflow-auto h-full text-xl"
        dangerouslySetInnerHTML={{
          __html: sanitizedText,
        }}
      ></div>
    </div>
  );
};
