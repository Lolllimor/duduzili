'use client';
import { EmptyState } from '../empty-state';
import { DeactivatedFilled } from './deactivated-filled';
import { useFetchDeactivatedQuery } from '@/redux/features/settingsApi';

export const Deactivated = () => {
  const { data } = useFetchDeactivatedQuery();
  return (
    <div className="h-full">
      {data?.data.count ? (
        <DeactivatedFilled />
      ) : (
        <EmptyState
          title="Deactivated Accounts "
          paragraph=" No deactivated account"
        />
      )}
    </div>
  );
};
