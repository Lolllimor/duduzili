'use client';
import React, { useEffect } from 'react';
import { EmptyState } from '../empty-state';
import { useFetchDeletedQuery } from '@/redux/features/settingsApi';
import { DeletedFilled } from './deleted-filled';

export const Deleted = () => {
  const { data } = useFetchDeletedQuery();
  return (
    <div className="h-full">
      {data?.data.count ? (
        <DeletedFilled />
     
      ) : (
        <EmptyState title="Deleted Accounts " paragraph=" No deleted account" />
      )}
    </div>
  );
};
