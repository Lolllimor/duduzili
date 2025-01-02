// "use client";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const api_key = process.env.NEXT_PUBLIC_ADMIN_API_KEY as string;
// const secret_key = process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY as string;

// const hash_key = localStorage.getItem("hash");
// const idempotency_key = localStorage.getItem("idempotency");

// console.log("keyresult", hash_key);
// console.log("idempotencyresult", idempotency_key);

// export const apiSlice = createApi({
//   reducerPath: "api",

//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
//     prepareHeaders: (headers, { getState }) => {
//       if (api_key) {
//         headers.set("ADMIN-API-KEY", api_key);
//       }

//       if (idempotency_key) {
//         headers.set("ADMIN-IDEMPOTENCY-KEY", idempotency_key);
//       }
//       if (hash_key) {
//         headers.set("ADMIN-HASH-KEY", hash_key);
//       }

//       headers.set("Accept", "application/json");

//       // if (token) {
//       //   headers.set("Authorization", `Bearer ${token}`);
//       // }
//       return headers;
//     },
//   }),
//   tagTypes: [""],
//   endpoints: (builder) => ({}),
// });

// export const {} = apiSlice;
