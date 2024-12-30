'use client';
import React, { useEffect } from 'react';
import { EmptyState } from '../empty-state';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchDeactivated } from '@/redux/features/settings/deactivatedSlice';
import { useFetchDeletedQuery } from '@/redux/features/apiSlice';

export const Deleted = () => {
  const { data } = useFetchDeletedQuery();


  return (
    <div className="h-full">
      {data?.count ? (
              // <DeactivatedFilled data={data} />
      <></>
        
      ) : (
        <EmptyState
          title="Deleted Accounts "
          paragraph=" No deleted account"
        />
      )}
    </div>
  );
};
