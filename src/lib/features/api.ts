import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ['Review', 'userDetails'],
    endpoints: (build) => ({
        getUser: build.query<Userdata , void>({
            query: () => '/auth/me',
        }),
        getUserInfo: build.query<UserWreviews, void>({
            query: ()=> 'auth/profileInfo'
        }),

        getReviews: build.query<Review[] , string>({
            query: (movieId) => `/reviews/allreviews?id=${movieId}`,
            providesTags: (result, error, movieId) =>
                    result ? [{ type: 'Review', id: movieId }] : ['Review']
        }),

        addEditReveiws: build.mutation<Res , {movieId: string,title: string, reviews: string, rating: number }>({
            query: ({ movieId , ...patch }) => ({
                    url: `/reviews/setReviews?id=${movieId}`,
                    method: 'PUT',
                    credentials: 'include',
                    body: patch,
                }),
            invalidatesTags: (result, error, {movieId})=>
                result ? [{type: 'Review', id: movieId}] : ['Review']
            
            }),
        getUserDetails: build.query<UserWreviews , string>({
            query: (username) =>  `/user/finduserdetails?id=${username}`,
            providesTags: (result, error, username) =>
                    result ? [{type: 'userDetails' , id: username}]: ['userDetails']
        }),
        setFollow:  build.mutation<Res , {id: string, followId: string, username: string}>({
            query: ({id, followId}) => ({
                url: `/connect?id=${id}`,
                method: 'PUT',
                credentials: 'include',
                body: {followId},
            }),
            invalidatesTags: (result, error , {username}) =>
                        result ? [{type: 'userDetails' , id: username}]: ['userDetails']
        })
    }) ,
})

export const {useGetUserQuery, useGetUserInfoQuery, useGetReviewsQuery , useAddEditReveiwsMutation , useGetUserDetailsQuery , useSetFollowMutation} = api