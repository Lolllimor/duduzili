'use client';

import { useEffect } from 'react';
import { EmptyState } from '../empty-state';
import { PrivacyFilled } from './privacy-filled';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { AddEditPrivacy } from '../modals/add-edit-privacy';
import { fetchPrivacy } from '@/redux/features/settings/privacySlice';

export const Privacy = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.privacy
  );

  useEffect(() => {
    dispatch(fetchPrivacy());
  }, []);

  return (
    <div className="h-full">
      {data && data.about !== '' ? (
        <PrivacyFilled data={data.about} />
      ) : (
        <EmptyState
          btn={<AddEditPrivacy />}
          title="Privacy Policy "
          paragraph=" Write a descriptive content about the privacy policy of the platform for users to abide with"
        />
      )}
    </div>
  );
};
