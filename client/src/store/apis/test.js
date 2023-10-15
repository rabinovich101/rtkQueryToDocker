// This file contain RTK query API connection
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const testApi = createApi({
    reducerPath: "test",
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/v1'
    }),
    tagTypes: ['Test'],
    endpoints(builder) {
        return {
            getTest: builder.query({
                query: () => {
                    return {
                        url: "/test",
                        method: "GET"
                    }
                },
                providesTags: ['Test']
            }),
        }
    }
});


export const { useGetTestQuery } = testApi;
export { testApi };