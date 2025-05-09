import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    endpoints: (build) => ({
        getUser: build.query<Userdata , void>({
            query: () => '/auth/me',
        }),
    }) ,
})

export const {useGetUserQuery} = authApi