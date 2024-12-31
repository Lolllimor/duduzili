'use client';
import React from 'react';
import { EmptyState } from '../empty-state';
import { SocialFilled } from './social-filled';
import { useFetchSmiQuery } from '@/redux/features/settingsApi';

export const SocialMediaIntegration = () => {
  const { data } = useFetchSmiQuery();

  console.log(data);
  return (
    <div className="h-full">
      {data && data.count ? (
        <SocialFilled />
      ) : (
        <EmptyState
          title="Social Media Integration"
          paragraph=" No social integrated"
        />
      )}
    </div>
  );
};
