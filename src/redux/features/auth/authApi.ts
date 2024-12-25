import { endpoints } from '@/redux/endpoint';
import { apiSlice } from '../apiSlice';
import { userEmail, userToken } from './authSlice';
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // register: builder.mutation({
    //   query: (body: { email: string; password: string; fullName: string }) => ({
    //     url: endpoints.register,
    //     method: "POST",
    //     body,
    //     credentials: "include" as const,
    //   }),

    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const result = await queryFulfilled;
    //       console.log("emailvaluequery:", result?.data?.email);
    //       dispatch(
    //         userEmail({
    //           email: result?.data?.email,
    //         })
    //       );
    //     } catch (error: any) {
    //       console.log("Query-failed", error);
    //     }
    //   },
    // }),
    // { username_email: string; password: string }
    login: builder.mutation({
      query: (body: { username_email: string; password: string }) => ({
        url: endpoints.signin,
        method: 'POST',
        body,
        credentials: 'include' as const,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log('tokenvaluequery:', result?.data?.token);
          dispatch(
            userToken({
              token: result?.data?.token,
            })
          );
        } catch (error: any) {
          console.log('Query-failed', error);
        }
      },
    }),

    // forgotPassword: builder.mutation({
    //   query: (body: { email: string }) => ({
    //     url: endpoints.forgotpassword,
    //     method: "POST",
    //     body,
    //     credentials: "include" as const,
    //   }),
    // }),

    // resetPassWord: builder.mutation({
    //   query: (body: { email: string; otp: string; password: string }) => ({
    //     url: endpoints.resetPassword,
    //     method: "POST",
    //     body,
    //     credentials: "include" as const,
    //   }),
    // }),

    // googleSignIn: builder.query<{}, void>({
    //   query: () => ({
    //     url: endpoints.googleSignIn,
    //     method: "GET",
    //     credentials: "include" as const,
    //   }),
    //   transformResponse: (response: { data: any }, meta, arg) => response.data,
    // }),
  }),
});

export const { useLoginMutation } = authApi;
