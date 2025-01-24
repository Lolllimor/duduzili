import { endpoints } from '../endpoint';
import { baseApi } from './base-api';

export const settingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: endpoints.signin,
        method: 'POST',
        body: data,
      }),
    }),
    fetchAbout: builder.query<any, void>({
      query: () => ({
        url: endpoints.setting.about.fetch,
        method: 'GET',
      }),
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
    editFaq: builder.mutation({
      query: (data) => ({
        url: endpoints.setting.faq.edit,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['FAQ'],
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
    fetchDeactivated: builder.query({
      query: (arg) => {
        const { page, ...otherParams } = arg || {};
        return {
          url: endpoints.setting.deactivated.fetch,
          method: 'GET',
          params: {
            ...(page && { page }),
            ...otherParams,
          },
        };
      },
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
    fetchDeleted: builder.query({
      query: (arg) => {
        const { ...params } = arg || {};
        return {
          url: endpoints.setting.deleted.fetch,
          method: 'GET',
          params: {
            ...params,
          },
        };
      },
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
  useEditFaqMutation,
  usePostContactMutation,
  usePostPrivacyMutation,
  useFetchDeactivatedQuery,
  useActivateDeactivatedMutation,
} = settingsApi;
