'use client';
import React, { useEffect } from 'react';
import { EmptyState } from '../empty-state';
import { ContactInfo } from '../contact-info';
import { EditContact } from '../modals/edit-contact';
import { useFetchContactQuery } from '@/redux/features/apiSlice';

export const Contact = () => {
  const { data } = useFetchContactQuery();

  return (
    <div className="h-full">
      {data &&
      typeof data.data.contact_info === 'object' &&
      Object.keys(data.data.contact_info).length !== 0 ? (
        <ContactInfo />
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
