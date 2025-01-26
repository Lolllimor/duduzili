'use client';

import DOMPurify from 'dompurify';
import { AddEditPrivacy } from '../modals/add-edit-privacy';

export const TermsFilled = () => {
  // const { data } = useFetchPrivacyQuery();

  // const formattedText =
  //   data?.data.about
  //     ?.split(/\n\n/)
  //     .map(
  //       (paragraph: string) =>
  //         `<p>${paragraph
  //           .replace(/\n/, '<br/>')
  //           .replace(/<p><\/p>/, '<br/>')}</p>`
  //     )
  //     .join(' <br/>') || '<p>No content available.</p>';
  // const sanitizedText = DOMPurify.sanitize(formattedText);
  
  return (
    <div className="flex flex-col p-8 gap-10 overflow-auto h-full">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold font-inter">
          Terms and Conditions
        </span>

        <AddEditPrivacy />
      </div>
      <div
        className="flex flex-col overflow-auto h-full text-xl font-inter"
        // dangerouslySetInnerHTML={{
        //   __html: sanitizedText,
        // }}
      ></div>
    </div>
  );
};
