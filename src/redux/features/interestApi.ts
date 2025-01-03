import { endpoints } from "../endpoint";
import { baseApi } from "./base-api";


export const interestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchInterstList: builder.query<any, void>({
      query: () => ({
        url: endpoints.interests.fetchInterestList,
        method: 'GET',
      }),
      providesTags: ['Interest'],
    }),
  }),
});

export const { useFetchInterstListQuery } = interestApi;
