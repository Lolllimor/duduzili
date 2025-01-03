import { baseApi } from './base-api';
import { endpoints } from '../endpoint';

export const feedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchFeedDashboard: builder.query<any, void>({
      query: () => ({
        url: endpoints.feeds.fetchDashboard,
        method: 'GET',
      }),
      providesTags: ['Feed'],
    }),
    fetchTrendingPost: builder.query<any, void>({
      query: () => ({
        url: endpoints.feeds.fetchTrendingPost,
        method: 'GET',
      }),
      providesTags: ['Feed'],
    }),
    fetchTrendingTopics: builder.query<any, void>({
      query: () => ({
        url: endpoints.feeds.fetchTrendingTopics,
        method: 'GET',
      }),
      providesTags: ['Feed'],
    }),
    createAdminPost: builder.mutation({
      query: (data) => ({
        url: endpoints.feeds.CreateAdminPost,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Feed'],
    }),
  }),
});

export const {
  useFetchFeedDashboardQuery,
  useFetchTrendingPostQuery,
  useFetchTrendingTopicsQuery,
  useCreateAdminPostMutation,
} = feedApi;
