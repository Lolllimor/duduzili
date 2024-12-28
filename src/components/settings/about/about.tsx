'use client';
import React, { useEffect } from 'react';
import { EmptyState } from '../empty-state';
import { AboutFilled } from './about-filled';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAbout } from '@/redux/features/settings/aboutSlice';
import { AddEditAbout } from '../modals/add-edit-about';

export const About = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.about
  );

  useEffect(() => {
    dispatch(fetchAbout());
  }, []);
  return (
    <div className="h-full">
      {data?.about !== '' ? (
        <AboutFilled paragraphs={data?.about} />
      ) : (
        <EmptyState
          title="About Duduzili"
          paragraph=" Write a descriptive content about the platform for users
                      to learn"
          btn={<AddEditAbout />}
        />
      )}
    </div>
  );
};
