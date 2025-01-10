import { baseApi } from './base-api';
import { endpoints } from '../endpoint';

export const reportApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchReportList: builder.query({
      query: (user: string) => ({
        url: `${endpoints.report.fetchReportList}?category_type=${user}`,
        method: 'GET',
      }),
      providesTags: ['Interest'],
    }),
    fetchReportTypeDetail: builder.query({
      query: (id: string) => ({
        url: `${endpoints.report.fetchReportList}?rt_id=${id}`,
        method: 'GET',
      }),
      providesTags: ['Report'],
    }),
    createReportType: builder.mutation({
      query: (data) => ({
        url: endpoints.report.createReportType,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Report'],
    }),
    deleteReportType: builder.mutation({
      query: (data) => ({
        url: endpoints.report.deleteReportType,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Report'],
    }),

    fetchReportingList: builder.query<any, void>({
      query: () => ({
        url: endpoints.report.fetchReportingList,
        method: 'GET',
      }),
      providesTags: ['Report'],
    }),
  }),
});

export const {
  useCreateReportTypeMutation,
  useDeleteReportTypeMutation,
  useFetchReportListQuery,
  useFetchReportTypeDetailQuery, useFetchReportingListQuery
} = reportApi;
