import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPagination, ISignIn, ISignUp, ISignUpRes, IWord, IWords} from "../store/models/Interfaces";
import {RootState} from "../store/store";


export const ReduxService = createApi({
    reducerPath: 'AppAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://english-easy-dr.herokuapp.com`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).AuthSlice.token

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    tagTypes: ['PostApp'],
    endpoints: build => ({
        createUser: build.mutation<ISignUpRes, ISignUp>({
            query: (user) => ({
                url: `/api/auth/registration`,
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['PostApp']
        }),
        loginUser: build.mutation<ISignUpRes, ISignIn>({
            query: (user) => ({
                url: `/api/auth/login`,
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['PostApp']
        }),
        logout: build.mutation<null, string>({
            query: () => ({
                url: `/api/auth/logout`,
                method: 'POST',
            }),
            invalidatesTags: ['PostApp']
        }),
        getCurrentUser: build.query<any, string>({
            query: () => ({
                url: `api/auth/current`
            }),
            providesTags: result => ['PostApp']
        }),
        addNewWord: build.mutation<IWord, Partial<IWord>>({
            query: (word) => ({
                url: `/api/words/create`,
                method: 'POST',
                body: word
            }),
            invalidatesTags: ['PostApp']
        }),
        getWords: build.query<IWords, IPagination>({
            query: ({page, limit}) => ({
                url: `/api/words/getallwords?page=${page}&limit=${limit}`
            }),
            providesTags: result => ['PostApp']
        }),
        getOwnWords: build.query<IWords, IPagination>({
            query: ({page, limit}) => ({
                url: `/api/words/vocabulary?page=${page}&limit=${limit}`
            }),
            providesTags: result => ['PostApp']
        }),
        updateWord: build.mutation<IWord, Partial<IWord>>({
            query: (body) => ({
                url: `/api/words/${body._id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['PostApp']
        }),
        deleteWord: build.mutation<IWords, string|any>({
            query: (_id) => ({
                url: `/api/words/${_id}`,
                method: 'DELETE',
                body: "Deleted successfuly"
            }),
            invalidatesTags: ['PostApp']
        }),
    })
})

export const {useCreateUserMutation, useLoginUserMutation, useLogoutMutation, useGetCurrentUserQuery, useAddNewWordMutation, useGetWordsQuery, useGetOwnWordsQuery} = ReduxService