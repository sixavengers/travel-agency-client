import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server_url } from "../config/config";
export const authenticationApi = createApi({
  reducerPath: "AuthenticationApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${server_url}/users`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data: any) => ({
        url: `/register`,
        method: "POST",
        body: data,
      }),
    }),

    loginUser: builder.mutation({
      query: (data: any) => ({
        url: `/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } =
  authenticationApi;
