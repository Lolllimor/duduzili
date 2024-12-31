'use client';

import { endpoints } from '../endpoint';
import { decrypt } from '@/lib/decrypt';
import { API, LOGIN_API } from '@/axios-config';
import { createApi } from '@reduxjs/toolkit/query/react';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({
    url,
    method,
    body,
    params,
    headers,
  }: {
    url: string;
    method: string;
    body?: any;
    params?: any;
    headers?: any;
  }) => {
    try {
      const result =
        url === endpoints.signin
          ? await LOGIN_API({
              url: baseUrl + url,
              method,
              data: body,
              params,
              headers,
            })
          : await API({
              url: baseUrl + url,
              method,
              data: body,
              params,
              headers,
            });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as any;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_ADMIN_BASE_URL || '',
  }),

  tagTypes: [
    'About',
    'Contact',
    'Privacy',
    'FAQ',
    'SMI',
    'Deactivated',
    'Deleted',
    'Permission',
    'Community',
    'Feeds',
  ],
  endpoints: () => ({}),
});
