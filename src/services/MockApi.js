import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Autharization: "",
};

const baseUrl = "https://api.github.com";

const createRequest = (url) => ({ url, headers: Headers });

export const mockApi = createApi({
    reducerPath: "mockApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => createRequest(`endpoint`),
        }),
    }),
});

export const { useGetDataQuery } = mockApi;
