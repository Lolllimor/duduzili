'use client';

import DOMPurify from 'dompurify';
import { AddEditPrivacy } from '../modals/add-edit-privacy';

export const PrivacyFilled = ({ data }: { data?: string }) => {
  const formattedText =
    data
      ?.split('\n\n')
      .map((paragraph) => `<p>${paragraph.replace(/\n/g, '<br /><br/>')}</p>`)
      .join(' <br/>') || '';
  const sanitizedText = DOMPurify.sanitize(formattedText);
  return (
    <div className="flex flex-col p-8 gap-10 overflow-auto h-full">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">Privacy Policy</span>

        <AddEditPrivacy />
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
