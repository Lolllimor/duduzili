import { endpoints } from '../endpoint';
import { baseApi } from './base-api';

export const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchCommunityList: builder.query<any, { page?: string }>({
      query: (arg) => {
        const page = arg?.page;
        return {
          url: endpoints.community.fetchCommunityList,
          method: 'GET',
          params: page ? { page } : undefined,
        };
      },
      providesTags: ['Community'],
    }),

    fetchCommunityDashboard: builder.query({
      query: (id: string) => ({
        url: `${endpoints.community.fetchCommunityDashboard}?community_id=${id}`,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    fetchCommunityPost: builder.query({
      query: ({ id }) => ({
        url: `${endpoints.community.fetchCommunityPost}?community_id=${id}`,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    fetchCommunityAdmin: builder.query({
      query: (id: string) => ({
        url: `${endpoints.community.fetchCommunityAdmin}?community_id=${id}`,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    fetchCommunityMembers: builder.query({
      query: (id: string) => ({
        url: `${endpoints.community.fetchCommunityMembers}?community_id=${id}`,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),
    fetchCommunityProfile: builder.query({
      query: (id: string) => ({
        url: `${endpoints.community.fetchCommunityProfile}?community_id=${id}`,
        method: 'GET',
      }),
      providesTags: ['Community'],
    }),

    toggleCommunityStatus: builder.mutation({
      query: (data) => ({
        url: endpoints.community.toggleCommunityStatus,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Community'],
    }),
  }),
});

export const {
  useFetchCommunityListQuery,
  useFetchCommunityPostQuery,
  useFetchCommunityAdminQuery,
  useFetchCommunityProfileQuery,
  useFetchCommunityMembersQuery,
  useFetchCommunityDashboardQuery,
  useToggleCommunityStatusMutation,
} = communityApi;
