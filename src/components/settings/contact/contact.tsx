'use client';
import React, { useEffect } from 'react';
import { EmptyState } from '../empty-state';
import { ContactInfo } from '../contact-info';
import { EditContact } from '../modals/edit-contact';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchContact } from '@/redux/features/settings/contactSlice';

export const Contact = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.contact
  );

  useEffect(() => {
    dispatch(fetchContact());
  }, []);

  return (
    <div className="h-full">
      {data &&
      typeof data.contact_info === 'object' &&
      Object.keys(data.contact_info).length !== 0 ? (
        <ContactInfo data={data.contact_info} />
      ) : (
        <EmptyState
          btn={<EditContact />}
          title="Contact Info "
          paragraph=" Write a descriptive content about the platform for users
                          to learn"
        />
      )}{' '}
    </div>
  );
};
