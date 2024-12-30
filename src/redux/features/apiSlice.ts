'use client';

import axios from 'axios';
import { encrypt } from '@/lib/encrypt';
import { decrypt } from '@/lib/decrypt';
import { endpoints } from '../endpoint';
import CryptoJS, { SHA256 } from 'crypto-js';
import { cookieStorage } from '@ibnlanre/portal';
import { createApi } from '@reduxjs/toolkit/query/react';
import toast from 'react-hot-toast';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';

const token = cookieStorage.getItem('duduzili-auth');
const parsedToken = token && JSON.parse(token);

let requestTs = String(Date.now());
const HASH_KEY = SHA256(
  (process.env.NEXT_PUBLIC_ADMIN_API_KEY as string) +
    (process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY as string) +
    requestTs
).toString(CryptoJS.enc.Hex);

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async (
    args,
    api,
    extraOptions
  ): Promise<{ data: any } | { error: any }> => {
    let { body, ...rest } = args;

    if (body) {
      body = encrypt(body);
    }

    const url = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}${rest.url}`;

    try {
      const response = await axios({
        method: rest.method,
        url,
        data: body ? body : undefined,
        headers: {
          // ...rest.headers,
          'Content-Type': 'application/json',
          'ADMIN-API-KEY': process.env.NEXT_PUBLIC_ADMIN_API_KEY,
          'ADMIN-HASH-KEY': HASH_KEY,
          'ADMIN-IDEMPOTENCY-KEY': requestTs,
          ...(parsedToken && {
            Authorization: `Bearer ${parsedToken.access_token}`,
          }),
        },
      });

      if (response.data) {
        response.data = decrypt(response.data);
      }

      return { data: response.data };
    } catch (error) {
      console.log(typeof (error as any).response.data.errors);

      return {
        error: {
          message:
            typeof (error as any).response.data.errors === 'object'
              ? Object.entries((error as any).response.data.errors).map(
                  (item: any[]) => {
                    if (item[1].length > 1) {
                      item[1].forEach((el: any) => {
                        if (typeof el === 'string') {
                          return el;
                        } else if (typeof el === 'object') {
                          Object.entries(el).map((item: any[]) => {
                            return item[1];
                          });
                        }
                      });
                    } else {
                      return item[1];
                    }
                  }
                )
              : (error as any).response?.data?.errors,
        },
      };
    }
  },

  tagTypes: ['About', 'Contact', 'Privacy', 'FAQ', 'SMI', 'Deactivated', "Deleted"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: endpoints.signin,
        method: 'POST',
        body: data,
      }),
    }),
    fetchAbout: builder.query<any, void>({
      query: () => ({ url: endpoints.setting.about.fetch, method: 'GET' }),
      providesTags: ['About'],
    }),
    postAbout: builder.mutation({
      query: (data) => ({
        url: endpoints.setting.about.create,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['About'],
    }),
    fetchContact: builder.query<any, void>({
      query: () => ({ url: endpoints.setting.contact.fetch, method: 'GET' }),
      providesTags: ['Contact'],
    }),
    postContact: builder.mutation({
      query: (data) => ({
        url: endpoints.setting.contact.create,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contact'],
    }),
    fetchPrivacy: builder.query<any, void>({
      query: () => ({ url: endpoints.setting.privacy.fetch, method: 'GET' }),
      providesTags: ['Privacy'],
    }),
    postPrivacy: builder.mutation({
      query: (data) => ({
        url: endpoints.setting.privacy.create,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Privacy'],
    }),
    fetchFaq: builder.query<any, void>({
      query: () => ({ url: endpoints.setting.faq.fetch, method: 'GET' }),
      providesTags: ['FAQ'],
    }),
    postFaq: builder.mutation({
      query: (data) => ({
        url: endpoints.setting.faq.create,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['FAQ'],
    }),
    deleteFaq: builder.mutation({
      query: (data) => ({
        url: endpoints.setting.faq.delete,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['FAQ'],
    }),
    fetchSmi: builder.query<any, void>({
      query: () => ({ url: endpoints.setting.smi.fetch, method: 'GET' }),
      providesTags: ['SMI'],
    }),
    toggleSmi: builder.mutation({
      query: (data) => ({
        url: endpoints.setting.smi.toggle,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['SMI'],
    }),
    fetchDeactivated: builder.query<any, void>({
      query: () => ({
        url: endpoints.setting.deactivated.fetch,
      }),
      providesTags: ['Deactivated'],
    }),
    activateDeactivated: builder.mutation({
      query: (data) => ({
        url: endpoints.setting.deactivated.activate,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Deactivated'],
    }),
    fetchDeleted: builder.query<any, void>({
      query: () => ({
        url: endpoints.setting.deleted.fetch,
      }),
      providesTags: ['Deleted'],
    }),
  }),
});

export const {
  useLoginMutation,
  useFetchFaqQuery,
  useFetchSmiQuery,
  useFetchAboutQuery,
  usePostFaqMutation,
  useToggleSmiMutation,
  usePostAboutMutation,
  useDeleteFaqMutation,
  useFetchPrivacyQuery,
  useFetchContactQuery,
  useFetchDeletedQuery,
  usePostContactMutation,
  usePostPrivacyMutation,
  useFetchDeactivatedQuery,
  useActivateDeactivatedMutation,
} = apiSlice;
