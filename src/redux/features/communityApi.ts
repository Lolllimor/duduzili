import { endpoints } from '../endpoint';
import { baseApi } from './base-api';

export const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchList: builder.query<any, void>({
      query: () => ({
        url: endpoints.community.fetchList,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    fetchDashboard: builder.query<any, void>({
      query: () => ({
        url: endpoints.community.fetchDashboard,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    fetchPost: builder.query<any, void>({
      query: () => ({
        url: endpoints.community.fetchPost,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    fetchAdmin: builder.query<any, void>({
      query: () => ({
        url: endpoints.community.fetchAdmin,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    fetchMembers: builder.query<any, void>({
      query: () => ({
        url: endpoints.community.fetchAdmin,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    toggleStatus: builder.mutation({
      query: (data) => ({
        url: endpoints.community.toggleStatus,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Community'],
    }),
  }),
});

export const {
  useFetchListQuery,
  useFetchPostQuery,
  useFetchAdminQuery,
  useFetchMembersQuery,
  useToggleStatusMutation,
  useFetchDashboardQuery,
} = communityApi;
