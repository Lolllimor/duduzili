'use client';

import DOMPurify from 'dompurify';
import { EmptyState } from '../empty-state';

import { AddEditPrivacy } from '../modals/add-edit-privacy';
import { useFetchPrivacyQuery, useFetchTermsQuery } from '@/redux/features/settingsApi';
import { Skeleton } from '@/components/ui/skeleton';
import { IoMdAdd } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { TermsFilled } from './terms-filled';
import { AddEditTerms } from '../modals/add-terms';

export const Terms = () => {
  const { data, isLoading } = useFetchTermsQuery();


  return (
    <div className="h-full">
      {isLoading ? (
        <div className="flex flex-col p-8 gap-10 h-full">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold font-inter">
              Terms and Condition
            </span>

            <Button
              disabled
              className="h-10 px-4 font-inter rounded-[48px] text-sm font-semibold flex items-center gap-2 bg-[#4534B8] text-white"
            >
              <IoMdAdd className="size-5" />
              Terms and Conditions
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
      ) : data && data.data.terms_and_conditions !== '' ? (
        <TermsFilled />
      ) : (
        <EmptyState
          btn={<AddEditTerms />}
          title="Terms and Conditions "
          paragraph=" Write a descriptive content about the terms and conditions of the platform for users to abide with"
        />
      )}
    </div>
  );
};
