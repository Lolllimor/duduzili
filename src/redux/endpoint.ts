export const endpoints = {
  signin: 'api/administration/admin-sign-in/',
  setting: {
    about: {
      fetch: 'api/administration/fetch-about/',
      create: 'api/administration/create-about/',
    },
    contact: {
      create: 'api/administration/populate-contact-info/',
      fetch: 'api/administration/fetch-contact-info/',
    },
    privacy: {
      create: 'api/administration/create-privacy-policy/',
      fetch: 'api/administration/fetch-privacy-policy/',
    },
    faq: {
      create: 'api/administration/create-faq/',
      fetch: 'api/administration/fetch-faq/',
      delete: 'api/administration/delete-faq/',
    },
    smi: {
      fetch: 'api/administration/fetch-smi/',
      toggle: 'api/administration/toggle-smi/',
    },
    deactivated: {
      fetch: 'api/administration/deactivated-users/',
      activate: 'api/administration/activate-users/',
    },
    deleted: {
      fetch: 'api/administration/deleted-users/',
    },
  },
  management: {
    permissionGroup: {
      crud: 'api/administration/fetch-permission-group/',
      cud: 'api/administration/permission-group/',
      toggle: 'api/administration/toggle-permission-group/',
    },
    user: {
      toggleStatus: 'api/administration/toggle-user-status/',
      revokeAccess: 'api/administration/revoke-access/',
      permissionDetails: `api/administration/user-permission-details/ `,
      updateAccess: 'api/administration/update-user-access/',
    },
    fetchPermission: 'api/administration/fetch-permissions/',
    viewMembers: 'api/administration/view-group-members/',
    fetchPermissionGroupList: 'api/administration/permission-group-list/',
    addAdminToGroup: 'api/administration/add-admin-to-group/',
    adminUserList: 'api/administration/admin-user/',
    addAdmin: 'api/administration/add-admin/',
  },
  community: {
    fetchCommunityList: 'api/administration/community-list/',
    toggleCommunityStatus: 'api/administration/toggle-community-status/',
    fetchCommunityDashboard: 'api/administration/community-details-dashboard/',
    fetchCommunityPost: 'api/administration/community-posts/',
    fetchCommunityAdmin: 'api/administration/community-admin/',
    fetchCommunityMembers: 'api/administration/community-members/',
  },
  feeds: {
    fetchDashboard: 'api/administration/feeds-dashboard/',
    fetchTrendingPost: 'api/administration/trending-posts/',
    fetchTrendingTopics: 'api/administration/trending-topics/',
    CreateAdminPost: 'api/administration/create-admin-post/',
  },
  interests: {
    fetchInterestList: 'api/administration/interest/',
    fetchUnassociatedTags: 'api/administration/unassociated-tags/',
    createInterest: 'api/administration/action-interests/',
    fetchInterestCategory: 'api/administration/interest-category/',
    deleteInterest: 'api/administration/action-interests/',
    editInterest: 'api/administration/action-interests/',
  },
};
