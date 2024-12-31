'use client';

import axios from 'axios';
import { encrypt } from '@/lib/encrypt';
import type { AxiosError } from 'axios';
import { decrypt } from '@/lib/decrypt';
import CryptoJS, { SHA256 } from 'crypto-js';
import { cookieStorage } from '@ibnlanre/portal';
import { createApi } from '@reduxjs/toolkit/query/react';
import { API, LOGIN_API } from '@/axios-config';
import { endpoints } from '../endpoint';



const token = cookieStorage.getItem('duduzili-auth');
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
          if (result.data) {
            result.data = decrypt(result.data);
          }

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
  ],
  endpoints: () => ({}),
});
