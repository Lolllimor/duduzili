import { endpoints } from "../endpoint";
import { baseApi } from "./base-api";

export const supportApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchMessageList: builder.query({
      query: ({ token }) => ({
        url: `${endpoints.support.fetchMessageLists}?token=${token}`,
        method: "GET",
      }),
      providesTags: ["Support"],
    }),

    // fetchCommunityDashboard: builder.query({
    //   query: (id: string) => ({
    //     url: `${endpoints.community.fetchCommunityDashboard}?community_id=${id}`,
    //     method: 'GET',
    //   }),
    //   providesTags: ['Community'],
    // }),

    // fetchUserProfile: builder.query({
    //   query: ({ id }) => ({
    //     url: `${endpoints.user.fetchUserProfile}?username=${id}`,
    //     method: 'GET',
    //   }),
    //   providesTags: ['User'],
    // }),

    // fetchCommunityAdmin: builder.query({
    //   query: (id: string) => ({
    //     url: `${endpoints.community.fetchCommunityAdmin}?community_id=${id}`,
    //     method: 'GET',
    //   }),
    //   providesTags: ['Community'],
    // }),
    // fetchCommunityMembers: builder.query({
    //   query: ( arg) => {
    //     const {id, ...params } = arg || {};
    //     return {
    //       url: `${endpoints.community.fetchCommunityMembers}?community_id=${id}`,
    //       method: 'GET',
    //       params:{...params}
    //     };
    //   },
    //   providesTags: ['Community'],
    // }),
    // fetchCommunityProfile: builder.query({
    //   query: (id: string) => ({
    //     url: `${endpoints.community.fetchCommunityProfile}?community_id=${id}`,
    //     method: 'GET',
    //   }),
    //   providesTags: ['Community'],
    // }),

    // toggleCommunityStatus: builder.mutation({
    //   query: (data) => ({
    //     url: endpoints.community.toggleCommunityStatus,
    //     method: 'POST',
    //     body: data,
    //   }),
    //   invalidatesTags: ['Community'],
    // }),
  }),
});

export const {
  useFetchMessageListQuery,
  //   useFetchUserProfileQuery,
  //   useFetchCommunityAdminQuery,
  //   useFetchCommunityProfileQuery,
  //   useFetchCommunityMembersQuery,
  //   useFetchCommunityDashboardQuery,
  //   useToggleCommunityStatusMutation,
} = supportApi;
