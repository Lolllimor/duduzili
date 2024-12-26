"use client"
import React, { useEffect } from 'react';
import { FaqFilled } from './faq-filled';
import { AddFaq } from '../modals/add-faq';
import { EmptyState } from '../empty-state';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchFaq } from '@/redux/features/settings/faqSlice';

export const Faq = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.faq);

  useEffect(() => {
    dispatch(fetchFaq());
  }, []);

  return (
    <div className="h-full">
      {data?.count ? (
              <FaqFilled data={ data} />
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
