import { endpoints } from '../endpoint';
import { baseApi } from './base-api';

export const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchCommunityList: builder.query<any, void>({
      query: () => ({
        url: endpoints.community.fetchList,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    fetchCommunityDashboard: builder.query<any, void>({
      query: () => ({
        url: endpoints.community.fetchDashboard,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    fetchCommunityPost: builder.query<any, void>({
      query: () => ({
        url: endpoints.community.fetchPost,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    fetchCommunityAdmin: builder.query<any, void>({
      query: () => ({
        url: endpoints.community.fetchAdmin,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    fetchCommunityMembers: builder.query<any, void>({
      query: () => ({
        url: endpoints.community.fetchAdmin,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    toggleCommunityStatus: builder.mutation({
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
  useFetchCommunityAdminQuery,
  useFetchCommunityDashboardQuery,
  useFetchCommunityListQuery,
  useFetchCommunityMembersQuery,
  useFetchCommunityPostQuery,
} = communityApi;
