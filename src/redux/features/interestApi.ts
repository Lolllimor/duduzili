import { baseApi } from './base-api';
import { endpoints } from '../endpoint';

export const interestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchInterstList: builder.query<any, void>({
      query: () => ({
        url: endpoints.interests.fetchInterestList,
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchInterstListQuery } = interestApi;
