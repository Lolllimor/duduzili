'use client';
import React, { useEffect } from 'react';
import { EmptyState } from '../empty-state';
import { AboutFilled } from './about-filled';
import { AddEditAbout } from '../modals/add-edit-about';

import { useFetchAboutQuery } from '@/redux/features/apiSlice';

export const About = () => {
  const { data} = useFetchAboutQuery();

  return (
    <div className="h-full">
      {data?.data.about !== '' ? (
        <AboutFilled/>
      ) : (
        <EmptyState
          title="About Duduzili"
          paragraph=" Write a descriptive content about the platform for users
                      to learn"
          btn={<AddEditAbout/>}
        />
      )}
    </div>
  );
};
