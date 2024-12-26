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
    deactivated: {
      fetch: 'api/administration/deactivated-users/',
      activate: 'api/administration/activate-users/',
    },
  },
};
