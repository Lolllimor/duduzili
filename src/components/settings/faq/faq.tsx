'use client';
import React, { useEffect } from 'react';
import { FaqFilled } from './faq-filled';
import { AddFaq } from '../modals/add-faq';
import { EmptyState } from '../empty-state';
import { useFetchFaqQuery } from '@/redux/features/settingsApi';


export const Faq = () => {
  const { data } = useFetchFaqQuery();
  return (
    <div className="h-full w-full">
      {data?.data.count ? (
        <FaqFilled />
      ) : (
        <EmptyState
          btn={<AddFaq />}
          title="FAQ "
          paragraph=" Write a descriptive content about the platform for users to learn"
        />
      )}
    </div>
  );
};
