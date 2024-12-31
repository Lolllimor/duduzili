'use client';
import React, { useEffect } from 'react';
import { FaqFilled } from './faq-filled';
import { AddFaq } from '../modals/add-faq';
import { EmptyState } from '../empty-state';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchFaq } from '@/redux/features/settings/faqSlice';
import { useFetchFaqQuery } from '@/redux/features/settingsApi';
import { decrypt } from '@/lib/decrypt';

export const Faq = () => {
  const { data } = useFetchFaqQuery();
  console.log(data)
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
