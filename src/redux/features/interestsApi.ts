import { baseApi } from './base-api';
import { endpoints } from '../endpoint';

export const interestsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchInterest: builder.query<any, { page?: string }>({
      query: (arg) => {
        const page = arg?.page;
        return {
          url: endpoints.interests.fetchInterestList,
          method: 'GET',
          params: page ? { page } : undefined,
        };
      },
      providesTags: ['Interest'],
    }),

    fetchUnasssociatedTags: builder.query<any, void>({
      query: () => ({
        url: endpoints.interests.fetchUnassociatedTags,
        method: 'GET',
      }),
      providesTags: ['Interest'],
    }),
    createInterest: builder.mutation({
      query: (data) => ({
        url: endpoints.interests.createInterest,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Interest'],
    }),
    deleteInterest: builder.mutation({
      query: (data) => ({
        url: endpoints.interests.deleteInterest,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Interest'],
    }),
    editInterest: builder.mutation({
      query: (data) => ({
        url: endpoints.interests.editInterest,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Interest'],
    }),
    fetchInterestCategory: builder.query<any, void>({
      query: () => ({
        url: endpoints.interests.fetchInterestCategory,
        method: 'GET',
      }),
      providesTags: ['Interest'],
    }),
  }),
});

export const {
  useFetchInterestQuery,
  useCreateInterestMutation,
  useDeleteInterestMutation,
  useEditInterestMutation,
  useFetchInterestCategoryQuery,
  useFetchUnasssociatedTagsQuery,
} = interestsApi;
