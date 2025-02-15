import { baseApi } from './base-api';
import { endpoints } from '../endpoint';
import { sanitizeParams } from '@/lib/sanitize-params';

export const managementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchPermission: builder.query<any, void>({
      query: () => ({
        url: endpoints.management.fetchPermission,
        method: 'GET',
      }),
      providesTags: ['Permission'],
    }),
    fetchPermissionGroup: builder.query({
      query: (arg) => {
        const { ...params } = arg || {};
        return {
          url: endpoints.management.permissionGroup.crud,
          method: 'GET',
          params: { ...params },
        };
      },
      providesTags: ['Permission'],
    }),
    postPermissionGroup: builder.mutation({
      query: (data) => ({
        url: endpoints.management.permissionGroup.cud,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Permission'],
    }),
    deletePermissionGroup: builder.mutation({
      query: (data) => ({
        url: endpoints.management.permissionGroup.cud,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Permission'],
    }),
    updatePermissionGroup: builder.mutation({
      query: (data) => ({
        url: endpoints.management.permissionGroup.cud,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Permission'],
    }),
    togglePermissionGroup: builder.mutation({
      query: (data) => ({
        url: endpoints.management.permissionGroup.toggle,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Permission'],
    }),
    toggleUserStatus: builder.mutation({
      query: (data) => ({
        url: endpoints.management.user.toggleStatus,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Permission'],
    }),
    revokeUserAccess: builder.mutation({
      query: (data) => ({
        url: endpoints.management.user.revokeAccess,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Permission'],
    }),
    userPermissionDetail: builder.query({
      query: (username: string) => ({
        url: `${endpoints.management.user.permissionDetails}?username=${username}`,
        method: 'GET',
      }),
      providesTags: ['Permission'],
    }),
    updateUserAccess: builder.mutation({
      query: (data) => ({
        url: endpoints.management.user.updateAccess,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Permission'],
    }),
    viewMembers: builder.query({
      query: (arg) => {
        const { id, ...params } = arg || {};
        return {
          url: `${endpoints.management.viewMembers}?group_id=${id}`,
          method: 'GET',
          params: { ...params },
        };
      },
      providesTags: ['Permission'],
    }),
    fetchPermissionGroupList: builder.query<any, void>({
      query: () => ({
        url: endpoints.management.fetchPermissionGroupList,
        method: 'GET',
      }),
      providesTags: ['Permission'],
    }),
    fetchAdminUserList: builder.query<any, void>({
      query: () => ({
        url: endpoints.management.adminUserList,
        method: 'GET',
      }),
      providesTags: ['Permission'],
    }),
    addAdminToGroup: builder.mutation({
      query: (data) => ({
        url: endpoints.management.addAdminToGroup,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Permission'],
    }),
    addAdmin: builder.mutation({
      query: (data) => ({
        url: endpoints.management.addAdmin,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Permission'],
    }),
  }),
});

export const {
  useViewMembersQuery,
  useAddAdminMutation,
  useFetchPermissionQuery,
  useFetchAdminUserListQuery,
  useAddAdminToGroupMutation,
  useUpdateUserAccessMutation,
  useToggleUserStatusMutation,
  useRevokeUserAccessMutation,
  useUserPermissionDetailQuery,
  useFetchPermissionGroupQuery,
  usePostPermissionGroupMutation,
  useFetchPermissionGroupListQuery,
  useTogglePermissionGroupMutation,
  useUpdatePermissionGroupMutation,
  useDeletePermissionGroupMutation,
} = managementApi;
