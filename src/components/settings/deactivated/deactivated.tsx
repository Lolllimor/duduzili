'use client';
import React, { useEffect } from 'react';
import { EmptyState } from '../empty-state';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { DeactivatedFilled } from './deactivated-filled';
import { fetchDeactivated } from '@/redux/features/settings/deactivatedSlice';

export const Deactivated = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.deactivated);

  useEffect(() => {
    dispatch(fetchDeactivated());
  }, []);

  return (
    <div className="h-full">
      {data?.count  ? (
        <DeactivatedFilled data={data} />
      ) : (
        <EmptyState
          title="Deactivated Accounts "
          paragraph=" No deactivated account"
        />
      )}
    </div>
  );
};
