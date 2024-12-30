'use client';

import { EmptyState } from '../empty-state';
import { PrivacyFilled } from './privacy-filled';
import { AddEditPrivacy } from '../modals/add-edit-privacy';
import { useFetchPrivacyQuery } from '@/redux/features/apiSlice';

export const Privacy = () => {
  const { data } = useFetchPrivacyQuery();
  return (
    <div className="h-full">
      {data && data.data.about !== '' ? (
      <PrivacyFilled />
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
