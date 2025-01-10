import { baseApi } from './base-api';
import { endpoints } from '../endpoint';

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchNewUser: builder.query<any, void>({
      query: () => ({
        url: endpoints.dashboard.fetchNewUser,
        method: 'GET',
      }),
    }),
    fetchAgeGroup: builder.query<any, void>({
      query: () => ({
        url: endpoints.dashboard.fetchAgeGroup,
        method: 'GET',
      }),
    }),

    fetchGenderRatio: builder.query<any, void>({
      query: () => ({
        url: endpoints.dashboard.fetchGenderRatio,
        method: 'GET',
      }),
    }),
    fetchUserCountry: builder.query<any, void>({
      query: () => ({
        url: endpoints.dashboard.fetchUserCountry,
        method: 'GET',
      }),
    }),
    fetchDashboardUser: builder.query<any, void>({
      query: () => ({
        url: endpoints.dashboard.fetchDashboardUser,
        method: 'GET',
      }),
    }),
    fetchDashboardOverview: builder.query<any, void>({
      query: () => ({
        url: endpoints.dashboard.fetchDashboardOverview,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useFetchNewUserQuery,
  useFetchAgeGroupQuery,
  useFetchUserCountryQuery,
  useFetchGenderRatioQuery,
  useFetchDashboardUserQuery,
  useFetchDashboardOverviewQuery,
} = dashboardApi;
